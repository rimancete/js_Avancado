// arquivos com FS e recursão mútua

const fs = require('fs').promises;
const path = require('path');
// localizando o diretório atual e o exibindo. Em caso de erro, interceptando e tratar o erro
// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e));


async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    // enviando os arquivos e sua pasta
    walk(files, rootDir);
}

// percorrendo cada subpasta e listando arquivos e pastas internas
async function walk (files, rootDir){
    // para cada arquivo encontrado
    for (let file of files){
        //coleta seu caminho completo
        const fileFullPath = path.resolve(rootDir, file)
        //coletando 'stats' dos arquivo(tem que ser com caminho completo)
        const stats = await fs.stat(fileFullPath)
        
        // exessões => se tiver '.git' no caminho da pasta, não listar(continua a iteração)
        if (/\.git/g.test(fileFullPath)) continue;
        // se tiver 'node_modules' no caminho da pasta, não listar(continua a iteração)
        if (/node_modules/g.test(fileFullPath)) continue;

        // se for um diretório, lista-o novamente e itera novamente(continua a iteração);
        if (stats.isDirectory()){
            readdir(fileFullPath);
            continue;
        }

        //somente localizar arquivos js
        if (
            !/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)
            ) continue;

        console.log(fileFullPath);
    }
}
readdir("/home/pudico/Documents/js_Avancado/");