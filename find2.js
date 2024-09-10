const clientes = required("./clientes.json");

function encontrar(lista, chave, valor){
    return lista.find((item)=>[chave].includes(valor));
}
const encontrado = encontrar(clientes,"nome", "kirby");
const encontrado2 = encontrar(clientes, "telefone", "1918820860");
console.log(encontrado);
