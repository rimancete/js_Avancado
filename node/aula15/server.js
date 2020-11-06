// criando servidor express (API)
//importando express
const express = require('express');
// executando o express
const app = express();
//Ocultando dados de conexão com BD
require('dotenv').config();
//importanto o mongoose que fará a conexão com o BD
const mongoose = require('mongoose');
//armazenado o link de conexão pelo dotenv('.env no '/' do projeto)
//conectar com BD, emitindo um sinal quando o bd tiver conectado(resolve) ou algum erro de conexão tenha ocorrido(reject).
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('BD connected');
    })
    .catch(e => new Error('BD connections failed'));

// *** NEW Chamando session e salvando-a
const session = require('express-session');
//*** NEW Chamando connect-mongo com a session criada acima
const MongoStore = require('connect-mongo')(session);
// *** NEW Chamando flash messages
const flash = require('connect-flash');
// importando routes
const routes = require('./routes')
//importando path
const path = require('path');
//importando middleware
const { middlewareGlobal } = require('./src/middlewares/middleware');

//setando o express para tratar o POST requisitado
app.use(express.urlencoded({ extended: true }))

//importando conteúdo estático(bundle, css, imgs e etc...)
app.use(express.static(path.resolve(__dirname, 'public')));

// *** NEW Configurar sessão
const sessionOptions = session({
    // espécie de 'frase secreta' da sessão
    secret: 'adfW%$fsd3RfE%gFS4rsFSr43RTGrwe3$:aÂEwr',
    // local no qual sessão será armazenada
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        // tempo de duração do cookie, no caso 7 dias
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    },
});
// *** NEW Chamando a session configurada no app
app.use(sessionOptions);
// *** NEW Chamando flash essages no app
app.use(flash());


//importanto views => manipular os dados html com recursos de programação
app.set('views', path.resolve(__dirname, 'src', 'views'))
//instalar ejs => npm i ejs
//setando a engine das views
app.set('view engine', 'ejs');

//iniciando nossos próprios middlewares
app.use(middlewareGlobal);
// iniciando o routes
app.use(routes);
//Quando o BD tiver conectado, escuta o servidor express
app.on('BD connected', () => {
    // configurando porta que escutará as requisições
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
})