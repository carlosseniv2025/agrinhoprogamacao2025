let perguntas = [
  {
    pergunta: "1. Qual é a principal função do calcário na agricultura?",
    opcoes: ["Fornecer nitrogênio", "Corrigir a acidez do solo", "Aumentar a salinidade", "Aumentar a retenção de água"],
    correta: 1
  },
  {
    pergunta: "2. O que é adubação verde?",
    opcoes: ["Uso de fertilizantes químicos", "Uso de esterco animal", "Plantio de leguminosas para melhorar o solo", "Uso de irrigação por gotejamento"],
    correta: 2
  },
  {
    pergunta: "3. Qual desses é um exemplo de cultura perene?",
    opcoes: ["Milho", "Soja", "Café", "Feijão"],
    correta: 2
  },
  {
    pergunta: "4. O que significa 'plantio direto'?",
    opcoes: ["Plantio sem preparo do solo", "Plantio apenas com adubo orgânico", "Plantio manual", "Plantio em terrenos íngremes"],
    correta: 0
  },
  {
    pergunta: "5. Qual desses é um defensivo agrícola?",
    opcoes: ["Herbicida", "Calcário", "Adubo orgânico", "Composto verde"],
    correta: 0
  },
  {
    pergunta: "6. Qual cultura é mais sensível à falta de água?",
    opcoes: ["Milho", "Cana-de-açúcar", "Girassol", "Mandioca"],
    correta: 0
  },
  {
    pergunta: "7. O que é rotação de culturas?",
    opcoes: ["Replantar a mesma cultura sempre", "Alternar espécies cultivadas para melhorar o solo", "Usar culturas perenes", "Deixar o solo em pousio"],
    correta: 1
  },
  {
    pergunta: "8. Qual é o principal nutriente do adubo NPK responsável pelo crescimento vegetativo?",
    opcoes: ["Nitrogênio", "Fósforo", "Potássio", "Cálcio"],
    correta: 0
  },
  {
    pergunta: "9. O que é agricultura de precisão?",
    opcoes: ["Uso de GPS e tecnologia para otimizar a produção", "Cultivo de precisão manual", "Rotação de culturas exata", "Uso de sementes selecionadas"],
    correta: 0
  },
  {
    pergunta: "10. Qual praga afeta principalmente a cultura da soja?",
    opcoes: ["Lagarta-do-cartucho", "Mosca branca", "Percevejo-marrom", "Broca-do-café"],
    correta: 2
  }
];

let perguntaAtual = 0;
let pontuacao = 0;
let terminou = false;

function setup() {
  createCanvas(800, 400);
  textAlign(CENTER, CENTER);
  textSize(18);
}

function draw() {
  background(220);

  if (terminou) {
    fill(0);
    textSize(24);
    text("Quiz finalizado!", width / 2, height / 2 - 40);
    text("Sua pontuação: " + pontuacao + " de " + perguntas.length, width / 2, height / 2);
    return;
  }

  mostrarPergunta();
}

function mostrarPergunta() {
  let q = perguntas[perguntaAtual];

  fill(0);
  text(q.pergunta, width / 2, 50);

  for (let i = 0; i < q.opcoes.length; i++) {
    let x = width / 2 - 150;
    let y = 100 + i * 50;
    fill(200);
    rect(x, y, 300, 40, 10);
    fill(0);
    text(q.opcoes[i], x + 150, y + 20);
  }
}

function mousePressed() {
  if (terminou) return;

  let q = perguntas[perguntaAtual];
  for (let i = 0; i < q.opcoes.length; i++) {
    let x = width / 2 - 150;
    let y = 100 + i * 50;
    if (mouseX > x && mouseX < x + 300 && mouseY > y && mouseY < y + 40) {
      if (i === q.correta) {
        pontuacao++;
      }
      perguntaAtual++;
      if (perguntaAtual >= perguntas.length) {
        terminou = true;
      }
    }
  }
}

