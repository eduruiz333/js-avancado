
let hash = {
    nome: 'Eduardo',
    idade: 47,
    genero: 'Masculino'
}

hash.cpf = 123123123;

console.log('O nome é: ' + hash.nome); // FORMA CONCATENADA
console.log(`A idade é ${hash.idade} e o gênero é ${hash.genero}`); // FORMA TELMPATE STRING
console.log(`O CPF inserido foi: ${hash.cpf}`);
console.log(`O tipo da variável hash é '${typeof(hash)}'`);

// PARA CONJUNTOS USAMOS ARRAY
// PARA DADOS ESTRUTURADOS USAMOS HASH
// JASON UTILIZA FORMATAÇÃO HASH



