class Form {
    constructor(){
        this.entrada = createInput("").attribute("placeholder","Digite seu nome");
        this.botaoJogar = createButton("Jogar");
        this.nomeDoJogo = createImg("./assets/TITULO.png", "nome do jogo");
        this.mensagem = createElement("h2");
    }
    //métodos
    posicaoElementos(){
        this.entrada.position(width/2 - 110, height/2 - 80);
        this.botaoJogar.position(width/2 - 90, height/2 - 20);
        this.nomeDoJogo.position(120,160);
        this.mensagem.position(width/2 - 300, height - 100);
    }

    estiloElementos(){
        this.entrada.class("customInput");
        this.botaoJogar.class("customButton");
        this.nomeDoJogo.class("gameTitle");
        this.mensagem.class("greeting");
    }
    
    mostrar(){
        this.posicaoElementos();
        this.estiloElementos();
    }

    pressionouBotao(){
        this.botaoJogar.mousePressed(()=>{
            this.entrada.hide();
            
        })
    }
}