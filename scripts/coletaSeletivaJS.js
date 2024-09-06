lixos = document.querySelectorAll("div.lixos img");
exit = document.querySelector("#exit");
popup = document.querySelector(".pop-up");
popuptitulo = document.querySelector(".pop-up-header h1");
popuptexto = document.querySelector(".pop-up-info p");

exit.addEventListener("click", function (){
    popup.style.display = "none";
});

lixos.forEach(function(lixo){
    lixo.addEventListener("mouseover", function(){
        this.style.height = "450px";
    });
    lixo.addEventListener("click", function(e){
        classe = e.currentTarget.getAttribute("class");
        switch(classe){
            case "1":
                document.getElementById("foto").src = "assets/imgs/cinza.png";
                document.getElementById("foto2").src = "assets/imgs/cinza2.png";
                document.getElementById("foto3").src = "assets/imgs/cinza3.jpg";
                popuptitulo.innerText = "Lixo Cinza";
                popuptexto.innerText = "Cinza: O recipiente de cor cinza é destinado aos resíduos não recicláveis ou rejeitos, ou seja, aqueles que não podem ser reciclados ou reutilizados. O que descartar: Papéis higiênicos, Guardanapos sujos, Papéis metalizados ou parafinados, Adesivos, Papel carbono, Fraldas, Absorventes, Fotografias, Espelhos, Esponjas de aço, itens de cerâmica, isopor, EVA, Vidro temperado, Vidros de carro, Cortiça, Ampolas de remédio, Lentes de óculos, etc.";
                popup.style.display = "block";
                break;
            case "2":
                document.getElementById("foto").src = "assets/imgs/azul.png";
                document.getElementById("foto2").src = "assets/imgs/azul2.jpg";
                document.getElementById("foto3").src = "assets/imgs/azul3.jpg";
                popuptitulo.innerText = "Lixo Azul";
                popuptexto.innerText = "Azul: O recipiente de cor azul é destinado à coleta de papel e papelão. Nele, devem ser descartados jornais, revistas, embalagens de papelão, caixas e outros materiais similares. O que descartar: Jornais, revistas, sulfite, rascunhos, folhas de caderno, formulários, caixas de papelão, aparas de papel, envelopes, cartazes, panfletos etc. O que não descartar: Adesivos, papel carbono, Celofane, Guardanapos, bitucas de cigarro, papéis plastificados, metalizados, papéis sanitários, etc.";
                popup.style.display = "block";
                break;
            case "3":
                document.getElementById("foto").src = "assets/imgs/verde.jpg";
                document.getElementById("foto2").src = "assets/imgs/verde2.png";
                document.getElementById("foto3").src = "assets/imgs/verde3.jpg";
                popuptitulo.innerText = "Lixo Verde";
                popuptexto.innerText = "Verde: O vidro deve ser descartado nos recipientes verdes. Garrafas, potes e frascos de vidro podem ser reciclados e transformados em novos produtos. O que descartar: Garrafas, potes de conserva, Embalagens, Frascos, Vazios de remédios, Copos, Cacos dos resíduos citados, etc. O que não descartar: Espelhos, Óculos, Boxes temperados, Pirex, Cerâmicas, Porcelanas, Tubos de TV, Tampas de forno, etc.";
                popup.style.display = "block";
                break;
            case "4":
                document.getElementById("foto").src = "assets/imgs/vermelho.jpg";
                document.getElementById("foto2").src = "assets/imgs/vermelho2.jpg";
                document.getElementById("foto3").src = "assets/imgs/vermelho3.png";
                popuptitulo.innerText = "Lixo Vermelho";
                popuptexto.innerText = "Vermelho: O recipiente vermelho é utilizado para o descarte de plásticos. Garrafas PET, embalagens plásticas, sacolas, potes e tampas são alguns exemplos de materiais que devem ser colocados nesse recipiente. O que descartar: Copos, Sacolas, Frascos, Potes, Tampinhas, Tubos de PVC, Embalagens PET (Refrigerantes, sucos, água, etc). O que não descartar: Cabos de panelas, Adesivos, Espuma, Acrílico, Embalagens metalizadas (Biscoitos e Salgadinhos).";
                popup.style.display = "block";
                break;
            case "5":
                document.getElementById("foto").src = "assets/imgs/amarelo.png";
                document.getElementById("foto2").src = "assets/imgs/amarelo2.jpg";
                document.getElementById("foto3").src = "assets/imgs/amarelo3.jpg";
                popuptitulo.innerText = "Lixo Amarelo";
                popuptexto.innerText = "Amarelo: O recipiente amarelo é destinado aos metais. Latas de alumínio, latas de aço, tampas metálicas e outros objetos feitos de metal devem ser descartados nesse recipiente. O que descartar: Tampinhas de garrafas, lacres de latinhas, latas, ferragens, arames, chapas, canos, pregos, parafusos, porcas, ferramentas, etc. O que não descartar: Clipes, grampos, esponjas de aço, aerossóis, latas de tinta ou verniz, solventes ou químicos, latas de inseticida, etc.";
                popup.style.display = "block";
                break;
            case "6":
                document.getElementById("foto").src = "assets/imgs/preto.png";
                document.getElementById("foto2").src = "assets/imgs/preto2.jpg";
                document.getElementById("foto3").src = "assets/imgs/preto3.jpg";
                popuptitulo.innerText = "Lixo Preto";
                popuptexto.innerText = "PRETO = MADEIRAS. O que descartar: Galhos de árvores, Caixas, Restos de Construção, Móveis, Artefatos e objetos, Palitos de dente ou sorvete, Resíduos Industriais, etc. Ao descartar madeira, retirar todos os pregos, parafusos ou metais cortantes.";
                popup.style.display = "block";
                break;
            case "7":
                document.getElementById("foto").src = "assets/imgs/laranja.jpg";
                document.getElementById("foto2").src = "assets/imgs/laranja2.jpg";
                document.getElementById("foto3").src = "assets/imgs/laranja3.jpg";
                popuptitulo.innerText = "Lixo Laranja";
                popuptexto.innerText = "LARANJA = RESÍDUOS PERIGOSOS. O que descartar: Pilhas e Baterias, Pneus, Óleos Lubrificantes, Produtos Eletrônicos, Lâmpadas Fluorescentes, de vapor, de Sódio / Mercúrio ou de luz mista, Tintas, Produtos Químicos, etc. Todos os resíduos perigosos necessitam de tratamento e destinação final especiais.";
                popup.style.display = "block";
                break;
            case "8":
                document.getElementById("foto").src = "assets/imgs/branco.jpg";
                document.getElementById("foto2").src = "assets/imgs/branco2.jpg";
                document.getElementById("foto3").src = "assets/imgs/branco3.jpg";
                popuptitulo.innerText = "Lixo Branco";
                popuptexto.innerText = "BRANCO = RESÍDUOS HOSPITALARES. O que descartar: Resíduos infectantes, Resíduos químicos, Gessos, Luvas, Gazes, Materiais Perfurocortantes como Lâminas, Bisturis, Agulhas, Ampolas etc. Todos os resíduos hospitalares necessitam de tratamento e destinação final especiais.";
                popup.style.display = "block";
                break;
            case "9":
                document.getElementById("foto").src = "assets/imgs/roxo.jpg";
                document.getElementById("foto2").src = "assets/imgs/roxo2.jpg";
                document.getElementById("foto3").src = "assets/imgs/roxo3.jpg";
                popuptitulo.innerText = "Lixo Roxo";
                popuptexto.innerText = "VIOLETA – RESÍDUOS RADIOATIVOS. O que descartar: Materiais Radioativos, ou Contaminados, Seringas, Frascos, Papéis Absorventes, Solventes Aquosos, Solventes Orgânicos etc. Resíduos Radioativos são altamente tóxicos e não podem ser reutilizados. Sua segregação deve ser realizada de acordo com as normas do CNEN.";
                popup.style.display = "block";
                break;
            case "10":
                document.getElementById("foto").src = "assets/imgs/marrom.jpg";
                document.getElementById("foto2").src = "assets/imgs/marrom2.jpg";
                document.getElementById("foto3").src = "assets/imgs/marrom3.jpg";
                popuptitulo.innerText = "Lixo Marrom";
                popuptexto.innerText = "Marrom: Os resíduos orgânicos, como restos de alimentos, cascas de frutas e legumes, podas de plantas e outros materiais biodegradáveis, devem ser depositados em recipientes de cor marrom. O que descartar: Cascas e restos de frutas, Legumes e Verduras, Saquinhos de chá, Restos de pães, Biscoitos, Pó e coador de café, Esterco de animais herbívoros (Galinhas, Gado, Cavalos). O que não descartar: Produtos Químicos, Remédios, Poeira, Papéis higiênicos, Guardanapos sujos, Gorduras, Óleos, Graxa, Leite e derivados, Ossos, restos de carne, etc. ";
                popup.style.display = "block";
                break;
                
        }
    });

    lixo.addEventListener("mouseout", function(){
        this.style.height = "300px";
    });  
    

});
