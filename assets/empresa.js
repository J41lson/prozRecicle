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
        imgContato.src = `./assets/imgs/${contato}.png`;
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