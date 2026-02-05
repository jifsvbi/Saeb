const questoes = [
    // ===== CERTO / ERRADO (CEBRASPE) =====
    { tipo: "CE", enunciado: "Um algoritmo é uma sequência finita de passos lógicos para resolver um problema.", correta: "C" },
    { tipo: "CE", enunciado: "A estrutura IF executa o bloco de código independentemente da condição.", correta: "E" },
    { tipo: "CE", enunciado: "Variáveis armazenam valores que podem ser alterados durante a execução.", correta: "C" },
    { tipo: "CE", enunciado: "HTML é a linguagem responsável pela estilização visual de páginas web.", correta: "E" },
    { tipo: "CE", enunciado: "CSS permite separar conteúdo da apresentação visual.", correta: "C" },

    // ===== MÚLTIPLA ESCOLHA =====
    {
        tipo: "ME",
        enunciado: "Qual linguagem é utilizada para estruturar páginas web?",
        alternativas: {
            A: "CSS",
            B: "JavaScript",
            C: "HTML",
            D: "SQL"
        },
        correta: "C"
    },
    {
        tipo: "ME",
        enunciado: "Qual comando SQL é utilizado para consultar dados?",
        alternativas: {
            A: "INSERT",
            B: "UPDATE",
            C: "DELETE",
            D: "SELECT"
        },
        correta: "D"
    },
    {
        tipo: "ME",
        enunciado: "Qual dispositivo interliga redes diferentes?",
        alternativas: {
            A: "Switch",
            B: "Hub",
            C: "Roteador",
            D: "Modem"
        },
        correta: "C"
    },

    // ===== CERTO / ERRADO =====
    { tipo: "CE", enunciado: "JavaScript é executado principalmente no navegador.", correta: "C" },
    { tipo: "CE", enunciado: "console.log() é utilizado para entrada de dados.", correta: "E" },
    { tipo: "CE", enunciado: "Chave primária identifica registros de forma única.", correta: "C" },
    { tipo: "CE", enunciado: "DELETE altera a estrutura de uma tabela.", correta: "E" },
    { tipo: "CE", enunciado: "Normalização reduz redundância de dados.", correta: "C" },

    // ===== MÚLTIPLA ESCOLHA =====
    {
        tipo: "ME",
        enunciado: "Qual sistema operacional é open source?",
        alternativas: {
            A: "Windows",
            B: "Linux",
            C: "macOS",
            D: "iOS"
        },
        correta: "B"
    },
    {
        tipo: "ME",
        enunciado: "Qual propriedade CSS define a cor do texto?",
        alternativas: {
            A: "background",
            B: "font-color",
            C: "color",
            D: "text-style"
        },
        correta: "C"
    },

    // ===== CERTO / ERRADO =====
    { tipo: "CE", enunciado: "HTTP é um protocolo utilizado para transferência de páginas web.", correta: "C" },
    { tipo: "CE", enunciado: "FTP é utilizado para envio de e-mails.", correta: "E" },
    { tipo: "CE", enunciado: "O modelo OSI possui sete camadas.", correta: "C" },
    { tipo: "CE", enunciado: "Memória RAM é armazenamento permanente.", correta: "E" },

    // ===== COMPLETA ATÉ 30 =====
    { tipo: "CE", enunciado: "Processos representam programas em execução.", correta: "C" },
    { tipo: "CE", enunciado: "Linux é um sistema operacional proprietário.", correta: "E" },
    { tipo: "CE", enunciado: "Firewall controla o tráfego de rede.", correta: "C" },
    { tipo: "CE", enunciado: "Senhas fortes aumentam a segurança da informação.", correta: "C" },
    { tipo: "CE", enunciado: "Metodologias ágeis priorizam software funcional.", correta: "C" },
    { tipo: "CE", enunciado: "O modelo cascata segue etapas sequenciais.", correta: "C" },
    { tipo: "CE", enunciado: "Banco de dados não armazena informações estruturadas.", correta: "E" },
    { tipo: "CE", enunciado: "Engenharia de software melhora a qualidade dos sistemas.", correta: "C" }
];

let atual = 0;
let respostas = Array(questoes.length).fill(null);
let tempo = 90 * 60;

const PONTUACAO_MINIMA = 18;

function carregar() {
    document.getElementById("numeroQuestao").innerText = `Questão ${atual + 1}`;
    document.getElementById("enunciado").innerText = questoes[atual].enunciado;

    const form = document.getElementById("formResposta");
    form.innerHTML = "";

    if (questoes[atual].tipo === "CE") {
        ["C", "E"].forEach(valor => {
            const label = document.createElement("label");
            label.innerHTML = `
                <input type="radio" name="resposta" value="${valor}">
                ${valor === "C" ? "Certo" : "Errado"}
            `;
            form.appendChild(label);
        });
    } else {
        for (let letra in questoes[atual].alternativas) {
            const label = document.createElement("label");
            label.innerHTML = `
                <input type="radio" name="resposta" value="${letra}">
                ${letra}) ${questoes[atual].alternativas[letra]}
            `;
            form.appendChild(label);
        }
    }

    document.querySelectorAll("input[name='resposta']").forEach(r => {
        r.checked = r.value === respostas[atual];
        r.addEventListener("change", e => respostas[atual] = e.target.value);
    });

    atualizarMapa();
}

function atualizarMapa() {
    const mapa = document.getElementById("mapaQuestoes");
    mapa.innerHTML = "";

    respostas.forEach((r, i) => {
        const btn = document.createElement("button");
        btn.textContent = i + 1;
        if (r) btn.style.background = "#4caf50";
        btn.onclick = () => { atual = i; carregar(); };
        mapa.appendChild(btn);
    });
}

function proxima() {
    if (atual < questoes.length - 1) atual++;
    carregar();
}

function anterior() {
    if (atual > 0) atual--;
    carregar();
}

function finalizar() {
    let pontos = 0;

    questoes.forEach((q, i) => {
        if (respostas[i] === q.correta) pontos++;
        else if (q.tipo === "CE" && respostas[i] !== null) pontos--;
    });

    document.querySelector("main").hidden = true;
    document.getElementById("resultado").hidden = false;

    document.getElementById("pontuacao").innerText = `Pontuação: ${pontos}/${questoes.length}`;
    document.getElementById("status").innerText =
        pontos >= PONTUACAO_MINIMA ? "APROVADO ✅" : "REPROVADO ❌";
}

setInterval(() => {
    tempo--;
    const h = String(Math.floor(tempo / 3600)).padStart(2, "0");
    const m = String(Math.floor((tempo % 3600) / 60)).padStart(2, "0");
    const s = String(tempo % 60).padStart(2, "0");
    document.getElementById("timer").innerText = `Tempo restante: ${h}:${m}:${s}`;
    if (tempo <= 0) finalizar();
}, 1000);

carregar();
