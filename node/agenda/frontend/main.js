//IMPORTANTO CSS
// importando bootstrap
import 'bootstrap';
//incorporando o bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//importando meu style personalizado
import './assets/css/style.css';

//PARA BROWSERS ANTIGOS => importanto core e regenerator para aplicações que precisem rodar em navegadores antigos
import 'core-js/stable';
import 'regenerator-runtime/runtime';


//validando frontend
//Login de usuário => Validando formulário de login
import Login from './modules/Login'
const login = new Login('.signin')
login.init();
//Cadastro de usuário => Validando formulário de signup
import Signup from './modules/Signup'
const signup = new Signup('.signup')
signup.init();
// Cadastro de Contato => Validando formulário de contato
import Contato from './modules/Contato'
const contato = new Contato('.contato')
contato.init();
