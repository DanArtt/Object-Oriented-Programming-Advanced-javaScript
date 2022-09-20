class paciente {
    private nome: string;
    private idade: number;
    private nascimento: string;
    private nomeHospitals: string;
    private dataEntradas: string;
    private doenca: string;
    private remedio: string;
    private dataSaida: string;
    private receitaRemedios: string;

    constructor(nome: string, idade: number, nascimento: string, nomeHospitals: string, dataEntradas: string , doenca: string, remedio: string, dataSaida: string, receitaRemedios: string) {
        this.nome = nome;
        this.idade = idade;
        this.nascimento = nascimento;
        this.nomeHospitals = nomeHospitals;
        this.dataEntradas = dataEntradas;
        this.doenca = doenca;
        this.remedio = remedio;
        this.dataSaida = dataSaida;
        this.receitaRemedios = receitaRemedios;

        

    }
    mostrarInformacoes():void {
        console.log(`Nome do Paciente: ${this.nome}.\n Idade: ${this.idade}.\n Data de Nascimento: ${this.nascimento}.\n Deu entrada no ${this.nomeHospitals} no dia ${this.dataEntradas} se queixando de fortes dores no peitos, solicitamos os exames: Ecocardiograma, eletrocardiograma e uma ressonâcia do tórax. Constatou que o paciente estava tendo crises de ${this.doenca}. Então aplicamos ${this.remedio}. Com a melhora do paciente, ele pode ter alta do Hospital e saiu no ${this.dataSaida} e receitamos para ele continuar tomando o ${this.receitaRemedios}. `)
    }
}
var informacao: paciente = new paciente("Daniel de Andrade da Silva", 21, "21 de fevereiro de 2001", "Hospital Memorial Fuad Chidid", "dia 22 de fevereiro de 2021", "arritmia cardíaca", "soro e cloridrato de sotalol na veia", "dia 24 de fevereiro de 2021", "cloridrato de sotalol")

informacao.mostrarInformacoes()