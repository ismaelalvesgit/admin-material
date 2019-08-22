//@Author Ismael Alves
export class Cep {
    
    constructor(init?: Partial<Cep>) {
        Object.assign(this, init);
    }

    bairro:string;
    cep:string;
    complemento:string;
    gia:string;
    ibge:string;
    localidade:string;
    logradouro:string;
    uf:string;
    unidade:string;
}
