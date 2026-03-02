// Básico
// Maior de Idade
let idade = 16;

const resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(`Você é ${resultado}`);

// Número par ou ímpar
const numero = 10;

const resultadoNumero = numero % 2 === 0 ? "Par" : "Ímpar";

console.log(`O número ${numero} é ${resultadoNumero}`);

// Situação do aluno
const nota = 6.5;
''
const situacao = nota >= 7 ? "Aprovado" : nota >= 5 ? "Recuperação" : "Reprovado";
console.log(situacao); 

// Intermediário
// Desconto

const valorCompra = 120;

const valorFinal = valorCompra >= 100 ? valorCompra * 0.9 : valorCompra;

console.log(`O valor final da compra é R$${valorFinal}`);

// Texto condicional
const logado = false;

const login = logado ? "Bem Vindo!" : "Faça Login para continuar";

console.log(login);

// 🔥 EXERCÍCIO BRABO — Ternário + Array + Lógica

const usuarios = [
  { nome: "Ana", ativo: true },
  { nome: "Carlos", ativo: false },
  { nome: "Bruna", ativo: true },
];

const formatado = usuarios.map(usuario => {
  return usuario.ativo ? `${usuario.nome} - Ativo` : `${usuario.nome} - Inativo`;
});

console.log(formatado);
