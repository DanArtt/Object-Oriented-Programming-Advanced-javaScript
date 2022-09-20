class conta {
    private nome: string;
    private numeroConta: string;
    private cpf: string;
    private saldo: string;
    private credito: string

    constructor(nome: string, numeroConta: string, cpf: string, saldo: string, credito: string) {
        this.nome = nome;
        this.numeroConta = numeroConta;
        this.cpf = cpf;
        this.saldo = saldo;
        this.credito = credito;

    }
    mostrarInformacoes():void {
        console.log(`Nome do Tilular: ${this.nome}.\n Número da Conta: ${this.numeroConta}.\n CPF: ${this.cpf}\n Saldo na Conta: ${this.saldo}.\n Fatura Atual: ${this.credito}`)
    }

}
var infoConta: conta = new conta("Daniel de Andrade da Siva", "34928614-9","176.875.907.45", "R$ 1.454,58", "$ 3.689,30");
infoConta.mostrarInformacoes();