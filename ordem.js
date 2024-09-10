const usuários = [
    {nome: "carlos", idade:32},
    {nome: "ana", idade:28},
    {nome: "felipe", idade:40}
]

//encontrando um objeto
const ana = usuarios.find(usuarios => usuarios.nome ==="ana");
console.log(ana);
