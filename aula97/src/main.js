//CSSs
// importando bootstrap
import 'bootstrap';
//incorporando o bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//importando meu style personalizado
import './assets/css/style.css';

//importanto core e regenerator para aplicações que precisem rodar em navegadores antigos
import 'core-js/stable';
import 'regenerator-runtime/runtime';
//js em si
import executa from './modules/promises'
executa();