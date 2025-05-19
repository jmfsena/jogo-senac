
let scene = 1;

const scenes = {
    1: {
        text: "Você é um(a) gestor(a) de RH em uma grande empresa. A diretoria propõe adotar uma política de cotas. O que você faz?",
        img: "img/scene1.png",
        choices: {
            a: 2,
            b: 3
        }
    },
    2: {
        text: "Você decide implementar as cotas. A equipe questiona a decisão. O que fazer?",
        img: "img/scene2.png",
        choices: {
            a: 4,
            b: 5
        }
    },
    3: {
        text: "Você ignora a política. Alguns talentos diversos não são contratados. Resultado negativo.",
        img: "img/scene3.png",
        choices: null
    },
    4: {
        text: "Você realiza treinamentos de sensibilização. A equipe entende e apoia. E agora?",
        img: "img/scene4.png",
        choices: {
            a: 6,
            b: 7
        }
    },
    5: {
        text: "Você não faz nada. O clima interno piora. Final neutro.",
        img: "img/scene5.png",
        choices: null
    },
    6: {
        text: "Você continua monitorando a diversidade e melhorando ações. Final positivo!",
        img: "img/scene6.png",
        choices: null
    },
    7: {
        text: "Você para após os treinamentos. Melhorou, mas falta consistência. Final razoável.",
        img: "img/scene7.png",
        choices: null
    }
};

function choose(option) {
    if (!scenes[scene].choices) return;
    scene = scenes[scene].choices[option];
    document.getElementById('scene-text').innerText = scenes[scene].text;
    document.getElementById('scene-image').src = scenes[scene].img;

    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';

    if (scenes[scene].choices) {
        choicesDiv.innerHTML += `<button onclick="choose('a')">Escolha A</button>`;
        choicesDiv.innerHTML += `<button onclick="choose('b')">Escolha B</button>`;
    }
}
