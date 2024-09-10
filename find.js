const clientes = required("./clientes.json");

function encontrar(lista, chave, valor){
    return lista.find((item)=> item[chave]===valor);
}

const encontrado = encontrad = encontrar (clientes, "nome", "kirby");

console.log(encontradpo);
