class patinete {
    private material: string;
    private montagem: boolean;
    private altura: string;
    private tamanhoRoda: string;
    private pesoMaximo: string;
    private comprimento: string;
    private pesodoProduto: string;
    private QuantidadeDeRodas: string;

    constructor(material: string, montagem: boolean, altura: string, tamanhoRoda: string, pesoMaximo: string, comprimento: string, pesodoProduto: string, QuantidaDeRodas: string){
        this.material = material;
        this.montagem = montagem;
        this.altura = altura;
        this.tamanhoRoda = tamanhoRoda;
        this.pesoMaximo = pesoMaximo;
        this.comprimento = comprimento;
        this.pesodoProduto = pesodoProduto;
        this.QuantidadeDeRodas = QuantidaDeRodas;
        
    }
    mostrarInformacoes():void {
        console.log(`DETALHES DO PRODUTO\n Material: ${this.material}.\n Necessita de Montagem: ${this.montagem}.\n Altura: ${this.altura}.\n Tamanho das Rodas: ${this.tamanhoRoda}.\n Peso Máximo: ${this.pesoMaximo}.\n Comprimento: ${this.comprimento}.\n Peso do Produto: ${this.pesodoProduto}.\n Quantidade de Rodas: ${this.QuantidadeDeRodas}.`)
    }
}
var info: patinete = new patinete("Alumínio e Ferro", true, "80.5 cm", "200 mm", "80 kg", "84.5 cm", "2 kg", "2")
info.mostrarInformacoes()