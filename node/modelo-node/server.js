// criando servidor express (API)
//importando express
const express = require('express');
// importando o express
const app = express();
//Ocultando dados de conexão com BD e outras variáveis de ambiente
require('dotenv').config();
//importanto o mongoose que fará a conexão com o BD e o modelará
const mongoose = require('mongoose');
//armazenando o link de conexão pelo dotenv('.env' no '/' do projeto)
//conectar com BD, emitindo um sinal quando o bd tiver conectado(resolve) ou algum erro de conexão tenha ocorrido(reject).
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('BD connected');
    })
    .catch(e => new Error('BD connections failed'));

//Chamando session e salvando-a
const session = require('express-session');
//Chamando connect-mongo com a session criada acima
const MongoStore = require('connect-mongo')(session);
//Chamando flash messages
const flash = require('connect-flash');
// importando routes
const routes = require('./routes');
//importando path
const path = require('path');
//*** NEW importanto helmet
const helmet = require('helmet');
//*** NEW importando csurf
const csrf = require('csurf');

//importando middlewares *** NEW csrf
const { middlewareGlobal, checkCSRF, csrfMiddleware } = require('./src/middlewares/middleware');

//*** NEW usando helmet => antes de tudo
app.use(helmet());

//setando o express para tratar o POST requisitado
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//importando conteúdo estático(bundle, css, imgs e etc...) que pode ser acessado diretamente
app.use(express.static(path.resolve(__dirname, 'public')));

//Configurar sessão(cookies)
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
//Chamando a session configurada no app
app.use(sessionOptions);
//Chamando flash messages
app.use(flash());

//importanto views => manipular os dados html com recursos de programação
app.set('views', path.resolve(__dirname, 'src', 'views'))
//instalar ejs => npm i ejs
//setando a engine das views
app.set('view engine', 'ejs');

//*** NEW iniciando o csrf
app.use(csrf());

//iniciando nossos próprios middlewares em todas as rotas
app.use(middlewareGlobal);
//iniciando midds csrf
app.use(checkCSRF);
app.use(csrfMiddleware);

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