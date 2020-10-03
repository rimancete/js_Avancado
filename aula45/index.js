//Tratando e lançando erros (try, catch, finally)

// try{
//     // é executada quando não há erros
//     //console.log(a);
//     console.log('abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('fechei o arquivo');
//     try{
//         console.log(b);
//     } catch(e){
//         console.log('deu erro')
//     } finally{
//         console.log('sou outro finally');
//     }

// } catch(e){
//     // é executada quando há erros
//     console.log('tratando o erro');
// } finally{
//     //sempre
//     console.log('FINALLY: eu sempre sou executado');
// }

function retornaHora (data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
}   catch (e){
    // tratar erro
}   finally{
    console.log('tenha um bom dia');
}


