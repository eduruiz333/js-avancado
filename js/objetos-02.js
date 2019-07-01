// CRIAÇÃO DE OBJETOS COM PASSAGEM DE PARÂMETROS

var Animal = function (_animal, _especie, _somProduzido, _tipoDePele, _habitat) {
    this.animal = _animal;
    this.especie = _especie;
    this.somProduzido = _somProduzido;
    this.tipoDePele = _tipoDePele;
    this.habitat = _habitat;

    this.show = function () {
        console.log('Animal: ' + this.animal);
        console.log('Espécie: ' + this.especie);
        console.log('Som que produz: ' + this.somProduzido);
        console.log('Tipo de pele: ' + this.tipoDePele);
        console.log('Habitat: ' + this.habitat);
    }
}

var gato = new Animal ('Gato', 'Felino', 'Miado', 'Pêlos', 'Terestre');
gato.show();
