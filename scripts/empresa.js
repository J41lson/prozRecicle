const empresas = [
    {
        nome: "Ecotrans",
        logo: "./assets/imgs/ecobrans.png",
        telefone: "#",
        whatsapp: "#",
        email: "#",
        instagram: "#",
        resumo: "A empresa Ecotrans de coleta de lixo é responsável pela reciclável e é aliada no saneamento básico."
    },
    {
        nome: "Tombstone",
        logo: "./assets/imgs/tombstane.png",
        telefone: "#",
        whatsapp: "#",
        email: "#",
        instagram: "#",
        resumo: "Há 21 anos, a Tombstone Reciclagem é uma empresa de reciclagem de papel e papelão que atua no mercado com certificações ISO 9001 e ISO 14001."
    },
    {
        nome: "Luvitec",
        logo: "./assets/imgs/Luvitec.png",
        telefone: "#",
        whatsapp: "#",
        email: "#",
        instagram: "#",
        resumo: "A Luvitec é uma empresa de coleta de lixo recicláveis que compra todo tipo de material reciclável como papel, papelão, plástico, sucata de ferro e metais."
    },
    {
        nome: "Luvitec",
        logo: "./assets/imgs/Luvitec.png",
        telefone: "#",
        whatsapp: "#",
        email: "#",
        instagram: "#",
        resumo: "A Luvitec é uma empresa de coleta de lixo recicláveis que compra todo tipo de material reciclável como papel, papelão, plástico, sucata de ferro e metais."
    },
    {
        nome: "Luvitec",
        logo: "./assets/imgs/Luvitec.png",
        telefone: "#",
        whatsapp: "#",
        email: "#",
        instagram: "#",
        resumo: "A Luvitec é uma empresa de coleta de lixo recicláveis que compra todo tipo de material reciclável como papel, papelão, plástico, sucata de ferro e metais."
    },
    {
        nome: "Luvitec",
        logo: "./assets/imgs/Luvitec.png",
        telefone: "#",
        whatsapp: "#",
        email: "#",
        instagram: "#",
        resumo: "A Luvitec é uma empresa de coleta de lixo recicláveis que compra todo tipo de material reciclável como papel, papelão, plástico, sucata de ferro e metais."
    },
    {
        nome: "Luvitec",
        logo: "./assets/imgs/Luvitec.png",
        telefone: "#",
        whatsapp: "#",
        email: "#",
        instagram: "#",
        resumo: "A Luvitec é uma empresa de coleta de lixo recicláveis que compra todo tipo de material reciclável como papel, papelão, plástico, sucata de ferro e metais."
    },
    {
        nome: "Tombstone",
        logo: "./assets/imgs/tombstane.png",
        telefone: "#",
        whatsapp: "#",
        email: "#",
        instagram: "#",
        resumo: "Há 21 anos, a Tombstone Reciclagem é uma empresa de reciclagem de papel e papelão que atua no mercado com certificações ISO 9001 e ISO 14001."
    }
];

const container = document.getElementById('empresas');

empresas.forEach(empresa => {
    // Criação da seção
    const section = document.createElement('section');
    
    // Criação da div redes
    const divRedes = document.createElement('div');
    divRedes.className = 'redes';

    // Imagem do logo
    const imgLogo = document.createElement('img');
    imgLogo.src = empresa.logo;
    imgLogo.alt = empresa.nome;
    imgLogo.title = empresa.nome;

    divRedes.appendChild(imgLogo);

    // Título "Contatos"
    const h5 = document.createElement('h5');
    h5.textContent = 'Contatos';
    divRedes.appendChild(h5);

    // Lista de contatos
    const ul = document.createElement('ul');
    ul.className = 'social-list';

    const contatos = ['telefone', 'whatsapp', 'email', 'instagram'];
    contatos.forEach(contato => {
        const li = document.createElement('li');
        li.setAttribute('aria-label', contato.charAt(0).toUpperCase() + contato.slice(1));

        const a = document.createElement('a');
        a.href = empresa[contato];
        a.target = '_blank';

        const imgContato = document.createElement('img');
        if (contato === 'whatsapp') {
            imgContato.src = './assets/imgs/whatsApp.png';
        } else {
            imgContato.src = `./assets/imgs/${contato}.png`;
        }
        imgContato.alt = contato.charAt(0).toUpperCase() + contato.slice(1);
        imgContato.title = contato.charAt(0).toUpperCase() + contato.slice(1);

        a.appendChild(imgContato);
        li.appendChild(a);
        ul.appendChild(li);
    });

    divRedes.appendChild(ul);


    // Criação do parágrafo de resumo
    const divTexto = document.createElement('div');
    divTexto.className = 'texto';
    const pResumo = document.createElement('p');
    pResumo.innerHTML = `A <strong>${empresa.nome}</strong> ${empresa.resumo}`;
    divTexto.appendChild(pResumo);

    // Adiciona os elementos à seção
    section.appendChild(divRedes);
    section.appendChild(divTexto);

    // Adiciona a seção ao contêiner
    container.appendChild(section);
});
const emailCnpjInput = document.getElementById('emailCnpj');
const senhaInput = document.getElementById('senha');
const emailCnpjError = document.getElementById('emailCnpjError');
const senhaError = document.getElementById('senhaError');

// Função para validar email ou CNPJ
function validateEmailCnpj() {
    const emailCnpjValue = emailCnpjInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valida o formato do email
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/; // Valida o formato do CNPJ

    if (emailCnpjValue === '' || (!emailRegex.test(emailCnpjValue) && !cnpjRegex.test(emailCnpjValue))) {
        emailCnpjInput.classList.add('invalid');
        emailCnpjInput.classList.remove('valid');
        emailCnpjError.style.display = 'block';
    } else {
        emailCnpjInput.classList.remove('invalid');
        emailCnpjInput.classList.add('valid');
        emailCnpjError.style.display = 'none';
    }
}

// Função para validar a senha
function validateSenha() {
    const senhaValue = senhaInput.value;

    if (senhaValue === '') {
        senhaInput.classList.add('invalid');
        senhaInput.classList.remove('valid');
        senhaError.style.display = 'block';
    } else {
        senhaInput.classList.remove('invalid');
        senhaInput.classList.add('valid');
        senhaError.style.display = 'none';
    }
}

// Event listeners para ativar a validação ao clicar ou digitar nos campos
emailCnpjInput.addEventListener('input', validateEmailCnpj);
emailCnpjInput.addEventListener('focus', validateEmailCnpj);
senhaInput.addEventListener('input', validateSenha);
senhaInput.addEventListener('focus', validateSenha);

// Validação final ao submeter o formulário
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    validateEmailCnpj();
    validateSenha();

    // Evita o envio do formulário se houver erros
    if (emailCnpjInput.classList.contains('invalid') || senhaInput.classList.contains('invalid')) {
        event.preventDefault();
    }
});