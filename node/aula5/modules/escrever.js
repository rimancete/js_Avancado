// criando e atualizando arquivo de log
const fs = require('fs').promises;
const path = require('path');
//recebe o caminho do arquivo que será escrito
const logPath = path.resolve(__dirname,'..', 'log.txt');
/*adicionando conteúdo ao arquivo e sobrescrevendo caso o arquivo exista
flag w(write) => apaga td o que estiver no arquivo, caso ele exista e sobrescreve com o que solicitei
flag a(append) => adiciona conteúdo ao arquivo existente
*/
if (/log.txt/g.test(logPath)) {
    fs.writeFile(logPath,'Arquivo salvo\n', {flag: 'a'});
}else {
    fs.writeFile(logPath,'Arquivo salvo\n', {flag: 'w'});
}
//criando função que recebe objeto e retorna JSON
module.exports = (caminho, obj) => {
    fs.writeFile(caminho,obj, {flag: 'w'});

}


