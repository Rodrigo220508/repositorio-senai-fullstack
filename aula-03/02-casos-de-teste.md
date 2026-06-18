# Casos de Teste

- Caso 1

Entrada:
idade = 17
temResponsavel = true
bloqueado = false

Saída esperada:
Acesso liberado com responsável.

---

- Caso 2

Entrada:
idade = 19
temCadastro = false
bloqueado = false

Saída esperada:
Acesso negado: cadastro necessário.

---

- Caso 3

Entrada:
valorCompra = 180
temCupom = true
formaPagamento = "pix"

Saída esperada:
Desconto de 10% por cupom e mais 5% por pagamento via PIX.

---

- Caso 4

Entrada:
valorCompra = 250
temCupom = false
ehAlunoSENAI = true

Saída esperada:
Desconto de 10% por ser aluno SENAI.

---

- Caso 5

Entrada:
prioridade = 3
sistemaForaDoAr = true
tempoEspera = 50

Saída esperada:
Classificação CRÍTICO.

---

- Caso 6

Entrada:
categoria = "internet"

Saída esperada:
Verificar cabo, Wi-Fi e roteador.

---

- Caso 7

Entrada:
codigoIngresso = "VIP"
horaChegada = 19
idade = 15

Saída esperada:
Entrada liberada.
Tipo de ingresso: VIP.

---

- Caso 8

Entrada:
codigoIngresso = "XYZ"
horaChegada = 18
idade = 20

Saída esperada:
Código de ingresso inválido.