const questoes = [
    {
        enunciado: "Qual linguagem é utilizada para estruturar páginas web?",
        alternativas: { A: "CSS", B: "JavaScript", C: "HTML", D: "SQL" },
        correta: "C"
    },
    {
        enunciado: "Qual linguagem é usada para estilizar páginas web?",
        alternativas: { A: "HTML", B: "CSS", C: "Python", D: "Java" },
        correta: "B"
    },
    {
        enunciado: "Qual comando SQL é usado para consultar dados?",
        alternativas: { A: "INSERT", B: "DELETE", C: "SELECT", D: "UPDATE" },
        correta: "C"
    },
    {
        enunciado: "Qual dispositivo interliga redes diferentes?",
        alternativas: { A: "Switch", B: "Hub", C: "Roteador", D: "Access Point" },
        correta: "C"
    },
    {
        enunciado: "Qual estrutura repete um bloco enquanto a condição for verdadeira?",
        alternativas: { A: "if", B: "while", C: "switch", D: "break" },
        correta: "B"
    },
    {
        enunciado: "Qual operador compara valor e tipo no JavaScript?",
        alternativas: { A: "==", B: "=", C: "===", D: "!=" },
        correta: "C"
    },
    {
        enunciado: "Qual propriedade CSS altera a cor do texto?",
        alternativas: { A: "background", B: "color", C: "font-size", D: "text-align" },
        correta: "B"
    },
    {
        enunciado: "Qual comando cria uma tabela no SQL?",
        alternativas: { A: "CREATE TABLE", B: "INSERT TABLE", C: "NEW TABLE", D: "ADD TABLE" },
        correta: "A"
    },
    {
        enunciado: "Qual protocolo é usado para acessar páginas web?",
        alternativas: { A: "FTP", B: "HTTP", C: "SMTP", D: "SSH" },
        correta: "B"
    },
    {
        enunciado: "Qual estrutura decide entre várias opções?",
        alternativas: { A: "for", B: "while", C: "switch", D: "break" },
        correta: "C"
    },
    {
        enunciado: "Qual tipo de dado representa verdadeiro ou falso?",
        alternativas: { A: "String", B: "Boolean", C: "Float", D: "Char" },
        correta: "B"
    },
    {
        enunciado: "Qual método exibe mensagem no console?",
        alternativas: { A: "alert()", B: "print()", C: "console.log()", D: "write()" },
        correta: "C"
    },
    {
        enunciado: "Qual chave identifica registros de forma única?",
        alternativas: { A: "Estrangeira", B: "Primária", C: "Secundária", D: "Composta" },
        correta: "B"
    },
    {
        enunciado: "Qual sistema operacional é open source?",
        alternativas: { A: "Windows", B: "Linux", C: "macOS", D: "iOS" },
        correta: "B"
    },
    {
        enunciado: "Qual camada do modelo OSI transmite sinais elétricos?",
        alternativas: { A: "Aplicação", B: "Rede", C: "Física", D: "Transporte" },
        correta: "C"
    },
    {
        enunciado: "Qual prática aumenta a segurança de senhas?",
        alternativas: { A: "Senha curta", B: "Reutilizar senha", C: "Autenticação forte", D: "Anotar senha" },
        correta: "C"
    },
    {
        enunciado: "Qual comando remove registros no SQL?",
        alternativas: { A: "DELETE", B: "DROP", C: "REMOVE", D: "CLEAR" },
        correta: "A"
    },
    {
        enunciado: "Qual linguagem roda no navegador?",
        alternativas: { A: "Python", B: "C++", C: "JavaScript", D: "Java" },
        correta: "C"
    },
    {
        enunciado: "Qual modelo de desenvolvimento é sequencial?",
        alternativas: { A: "Ágil", B: "Scrum", C: "Cascata", D: "Kanban" },
        correta: "C"
    },
    {
        enunciado: "Qual elemento HTML cria um link?",
        alternativas: { A: "<a>", B: "<link>", C: "<href>", D: "<url>" },
        correta: "A"
    },
    {
        enunciado: "Qual operador lógico representa 'E'?",
        alternativas: { A: "||", B: "&&", C: "!", D: "%" },
        correta: "B"
    },
    {
        enunciado: "Qual memória é volátil?",
        alternativas: { A: "HD", B: "SSD", C: "RAM", D: "ROM" },
        correta: "C"
    },
    {
        enunciado: "Qual protocolo envia e-mails?",
        alternativas: { A: "HTTP", B: "FTP", C: "SMTP", D: "SSH" },
        correta: "C"
    },
    {
        enunciado: "Qual ferramenta é usada para versionamento?",
        alternativas: { A: "Git", B: "Docker", C: "Apache", D: "Node" },
        correta: "A"
    },
    {
        enunciado: "Qual tag define título principal em HTML?",
        alternativas: { A: "<title>", B: "<h1>", C: "<head>", D: "<header>" },
        correta: "B"
    },
    {
        enunciado: "Qual comando adiciona dados ao banco?",
        alternativas: { A: "INSERT", B: "CREATE", C: "DELETE", D: "ALTER" },
        correta: "A"
    },
    {
        enunciado: "Qual conceito reduz redundância no banco?",
        alternativas: { A: "Backup", B: "Normalização", C: "Firewall", D: "Deploy" },
        correta: "B"
    },
    {
        enunciado: "Qual estrutura percorre coleção de dados?",
        alternativas: { A: "for", B: "if", C: "break", D: "return" },
        correta: "A"
    },
    {
        enunciado: "Qual comando altera dados existentes?",
        alternativas: { A: "UPDATE", B: "INSERT", C: "DROP", D: "CREATE" },
        correta: "A"
    },
    {
        enunciado: "Qual camada OSI é responsável pelo roteamento?",
        alternativas: { A: "Rede", B: "Física", C: "Aplicação", D: "Enlace" },
        correta: "A"
    }
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

    for (let letra in questoes[atual].alternativas) {
        const label = document.createElement("label");
        label.innerHTML = `
            <input type="radio" name="resposta" value="${letra}">
            ${letra}) ${questoes[atual].alternativas[letra]}
        `;
        form.appendChild(label);
        form.appendChild(document.createElement("br"));
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

        btn.onclick = () => {
            atual = i;
            carregar();
        };

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
    const resultadoDiv = document.getElementById("resultado");

    document.querySelector("main").hidden = true;
    resultadoDiv.hidden = false;

    let relatorioHTML = "";

    questoes.forEach((q, i) => {
        const acertou = respostas[i] === q.correta;
        if (acertou) pontos++;

        relatorioHTML += `
            <div style="margin-bottom:10px; padding:8px; border:1px solid #ccc;">
                <strong>Questão ${i + 1}</strong> - 
                ${acertou ? "✅ Correta" : "❌ Incorreta"}<br>
                Sua resposta: ${respostas[i] || "Não respondeu"}<br>
                Resposta correta: ${q.correta}
            </div>
        `;
    });

    document.getElementById("pontuacao").innerText =
        `Pontuação: ${pontos}/${questoes.length}`;

    document.getElementById("status").innerText =
        pontos >= PONTUACAO_MINIMA ? "APROVADO ✅" : "REPROVADO ❌";

    resultadoDiv.innerHTML += relatorioHTML;
}

setInterval(() => {
    tempo--;

    const h = String(Math.floor(tempo / 3600)).padStart(2, "0");
    const m = String(Math.floor((tempo % 3600) / 60)).padStart(2, "0");
    const s = String(tempo % 60).padStart(2, "0");

    document.getElementById("timer").innerText =
        `Tempo restante: ${h}:${m}:${s}`;

    if (tempo <= 0) finalizar();
}, 1000);

carregar();
