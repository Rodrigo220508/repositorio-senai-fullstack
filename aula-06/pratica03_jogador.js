let jogador = { 

    nickname: "rodriguera",
    nivel: 1,
    moedas: 100,
    energia: 50,
    premium: false,
};

console.log ("==== STATUS INICIAL ====");
console.log (
    "nickname:", jogador.nickname,
    "\nnivel:", jogador.nivel,
    "\nmoedas:", jogador.moedas,
    "\nenergia:", jogador.energia,
    "\npremium:", jogador.premium,

);


jogador.nivel = 40;
jogador.moedas = 120;
jogador.energia = 299;
jogador.premium = true;

console.log("==== STATUS FINAL ====");
console.log (
    "nickname:", jogador.nickname,
    "\nnivel: ", jogador.nivel,
    "\nmoedas:", jogador.moedas,
    "\nenergia:", jogador.energia,
    "\npremium:", jogador.premium,
)