let produto = {
    nome: "teclado",
    preco: 120,
    estoque: 10,
    disponivel: true,

};

console.log("==== PRODUTO ====");
console.log(
    "Nome:", produto.nome,
    "\npreco:", produto.preco,
    "\nestoque:", produto.estoque,
    "\ndisponivel:", produto.disponivel,

)

produto.preco = 99.90;
produto.estoque = 9;
produto.disponivel = false;


console.log("==== PRODUTO ATUALIZADO ====");
console.log(
    "\npreco:", produto.preco,
    "\nestoque:", produto.estoque,
    "\ndisponivel:", produto.disponivel,
)