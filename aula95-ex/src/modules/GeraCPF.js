// importar ValidaCPF
import ValidaCPF from './ValidaCPF';

export default class GeraCPF {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }
    geraNovoCpf() {
        const cpfSemDigito = this.rand();
        const digito1 = ValidaCPF.geraDigito(cpfSemDigito);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);
        const novoCPF = cpfSemDigito + digito1 + digito2;
        return this.formatado(novoCPF);
    }
    formatado(novoCpf) {
        return (
            novoCpf.slice(0, 3) + '.' +
            novoCpf.slice(3, 6) + '.' +
            novoCpf.slice(6, 9) + '-' +
            novoCpf.slice(9, 11)

        );
        
    }
    
}