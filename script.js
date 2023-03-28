function atualizandoSelect(){
    //Pegando o Value do Option para realizar as alterações de acordo com a opção selecionada
    let select = document.querySelector('#select');
    let optionValue = select.options[select.selectedIndex];
    let value = optionValue.value;

    //Pegando o documento para verificar se existe a class segundaT
    const html = document.documentElement;

    //Selecionando as imagens dos blocos que serão alteradas 
    const primeiroBloco = document.querySelector('.primeiroBloco');

    const segundoBloco = document.querySelector('.segundoBloco ');

    const terceiroBloco = document.querySelector('.terceiroBloco');

    const quartoBloco = document.querySelector('.quartoBloco');

    const classificacaoDeIdade = document.querySelector('#classificacaoDeIdade');

    const linkDoBotao = document.querySelector('.linkDoBotao');

    const texto = document.querySelector('.text');

     //Colocando a codição
    if(value == 'temporada1'){
        html.classList.contains('segundaT')
        html.classList.remove('segundaT')

        //Alterando os icones de acordo com a temporada
        classificacaoDeIdade.setAttribute('src', './assents/classificacao.png')
        linkDoBotao.setAttribute('href', 'https://youtu.be/JiRDN2zTR00')

        primeiroBloco.setAttribute('src', './assents/bloco1-temporada1.png')
        segundoBloco.setAttribute('src', './assents/bloco2-temporada1.png')
        terceiroBloco.setAttribute('src', './assents/bloco3-temporada1.png')
        quartoBloco.setAttribute('src', './assents/bloco4-temporada1.png')


        texto.textContent = "Desordeiros e maltrapilhos, são desajustados que viraram mercenários. O grupo Vox Machina está  mais interessado em dinheiro fácil e cerveja barata do que em proteger o reino. Mas quando o reino é ameaçado pelo mal, esses encrenqueiros percebem que são os únicos capazes de restaurar a justiça. O que começou como um serviço simples agora é a história de origem dos mais novos heróis de Exandria."

    
    }else{
        html.classList.add('segundaT')

        //Alterando os icones de acordo com a temporada
        classificacaoDeIdade.setAttribute('src','./assents/classicacao2.png')
        linkDoBotao.setAttribute('href', 'https://youtu.be/o-6KyeDi-7g')

        primeiroBloco.setAttribute('src', './assents/bloco1-temporada2.png')
        segundoBloco.setAttribute('src', './assents/bloco2-temporada2.png')
        terceiroBloco.setAttribute('src', './assents/bloco3-temporada2.png')
        quartoBloco.setAttribute('src', './assents/bloco4-temporada2.png')

        texto.textContent = "Após salvar o reino do mal e da destruição nas mãos do casal poderoso mais terrível de Exandria, Vox Machina deve salvar o mundo novamente - desta vez, de um sinistro grupo de dragões conhecido como Chroma Conclave."

    }

    //variaveis do botão do trailer
    const botao = document.querySelector(".btb-box2")
    const modal = document.querySelector(".modal")
    const botaoFecharModal = document.querySelector(".fechar-modal");
    const video = document.getElementById("video");

    function alternarModal(){
        modal.classList.toggle("aberto")     
    }
    
    botao.addEventListener("click",() => {
        alternarModal();
        //Alterando o trailer de acordo com o Select escolhido
        let linkDoVideo = video.src
        if(value == 'temporada2'){
            linkDoVideo = 'https://www.youtube.com/embed/o-6KyeDi-7g';
        }else{
            linkDoVideo = 'https://www.youtube.com/embed/JiRDN2zTR00';
        }
        video.setAttribute("src",linkDoVideo);
    });
    
    botaoFecharModal.addEventListener("click", () => {
        alternarModal();
        video.setAttribute("src","");
    });

}

atualizandoSelect();















