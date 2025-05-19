
const storyText = document.getElementById("story-text");
const choices = document.getElementById("choices");

const story = {
  start: {
    text: "O CEO te pediu para criar um novo plano de contratação. O quadro atual é formado por 90% de homens brancos de classe média alta.",
    choices: {
      A: "cen1a",
      B: "cen1b",
      C: "cen1c"
    }
  },
  cen1a: {
    text: "Você propõe um programa afirmativo. Alguns gestores resistem, mas os dados mostram que profissionais diversos agregam inovação. Com o tempo, o programa se torna um case de sucesso.",
    choices: {
      A: "fimBom",
      B: "fimRuim",
      C: "fimMedio"
    }
  },
  cen1b: {
    text: "Os treinamentos são bem recebidos, mas sem ações práticas, pouco muda. Você percebe que conscientizar é bom, mas não suficiente.",
    choices: {
      A: "cen2b1",
      B: "cen2b2",
      C: "cen2b3"
    }
  },
  cen1c: {
    text: "O discurso da meritocracia é aplaudido por alguns, mas perpetua desigualdades. Nada muda na prática.",
    choices: {
      A: "fimRuim",
      B: "fimRuim",
      C: "fimRuim"
    }
  },
  cen2b1: {
    text: "Você lança cotas para pessoas com deficiência. A mudança começa a acontecer.",
    choices: {
      A: "fimBom",
      B: "fimMedio",
      C: "fimMedio"
    }
  },
  cen2b2: {
    text: "Você muda o recrutamento para torná-lo mais inclusivo. Bons resultados começam a aparecer.",
    choices: {
      A: "fimBom",
      B: "fimMedio",
      C: "fimMedio"
    }
  },
  cen2b3: {
    text: "Você faz um festival de diversidade. Inspira, mas precisa de continuidade.",
    choices: {
      A: "fimMedio",
      B: "fimMedio",
      C: "fimMedio"
    }
  },
  fimBom: {
    text: "Parabéns! Sua empresa se tornou referência em diversidade e inclusão. Os resultados são positivos em inovação e reputação.",
    choices: {}
  },
  fimMedio: {
    text: "Você gerou algum impacto, mas ainda há muito a fazer. Continue lutando por mais equidade.",
    choices: {}
  },
  fimRuim: {
    text: "Sua empresa estagnou. A falta de inclusão afastou talentos e oportunidades.",
    choices: {}
  }
};

let currentScene = "start";

function choose(option) {
  const nextScene = story[currentScene].choices[option];
  if (!nextScene) return;
  currentScene = nextScene;
  updateScene();
}

function updateScene() {
  storyText.innerText = story[currentScene].text;
  choices.innerHTML = "";
  const currentChoices = story[currentScene].choices;
  for (let key in currentChoices) {
    const btn = document.createElement("button");
    btn.innerText = `${key}) ${getButtonText(currentScene, key)}`;
    btn.onclick = () => choose(key);
    choices.appendChild(btn);
  }
}

function getButtonText(scene, choice) {
  const nextScene = story[scene].choices[choice];
  return story[nextScene]?.text.slice(0, 50) + "...";
}
