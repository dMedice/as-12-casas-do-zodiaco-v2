function descobrirCDZ() {

    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const texto2 = document.querySelector("h3");
    var d = document.querySelector('#data').value;
    var [ano, mes , dia] = d.split('-').map(Number);

    if(data ==  "aquario"  || ((dia >= 21 && dia<=31 && mes ==1) || ( dia>=1 && dia <= 18 && mes ==2))){
        texto.innerHTML = "Aquário";
        imagem.setAttribute("src","img/aquario.jpg");
        imagem.setAttribute("width","500px");
        texto2.innerHTML+= " Camus é um cavaleiro bastante poderoso, com habilidade de baixar a temperatura e lançar o Pó de Diamante com grande facilidade. A Execução Aurora é o seu golpe secreto mais poderoso, que emite um frio próximo ao zero absoluto, e foi herdado por Hyoga."
    }
     else if(data ==  "peixes"  || ((dia >= 19 && dia<=29 && mes ==2) || ( dia>=1 && dia <= 20 && mes ==3))){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","img/peixes.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML+= "Afrodite de Peixes, é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX. É um poderoso Cavaleiro capaz de gerar e manipular rosas. É um dos Cavaleiros mais poderosos do exército de Atena."
    }
    else if(data ==  "aries"  || ((dia >= 21 && dia<=31 && mes ==3) || ( dia>=1 && dia <= 20 && mes ==4))){
        texto.innerHTML = "Áries";
        imagem.setAttribute("src","img/aries.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML+= "Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco. Como desde cedo desconfiava do Grande Mestre, deu as costas ao Santuário."
    }
    else if(data ==  "touro"  || ((dia >= 21 && dia<=30 && mes ==4) || ( dia>=1 && dia <= 20 && mes ==5))){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","img/touro.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML+= "Aldebaran é o Cavaleiro de Ouro de Touro do século XX, que protege a Casa de Touro no Santuário. Dotado de uma resistência fora do comum, nem mesmo o Meteoro de Pégaso de Seiya conseguiu causar danos ao seu corpo. Sendo um Cavaleiro de Ouro, Aldebaran é um dos Cavaleiros mais poderosos do Exército de Atena.";
    }
    else if(data ==  "gemeos"  || ((dia >= 21 && dia<=31 && mes ==5) || ( dia>=1 && dia <= 20 && mes ==6))){
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","img/gemeos.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML+= "Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena."
    }
    else if(data ==  "cancer"  || ((dia >= 21 && dia<=30 && mes ==6) || ( dia>=1 && dia <= 22 && mes ==7))){
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src","img/cancer.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "CANCER";
    }
    else if(data ==  "leao"  || ((dia >= 23 && dia<=31 && mes ==7) || ( dia>=1 && dia <= 22 && mes ==8))){
        texto.innerHTML = "Leão";
        imagem.setAttribute("src","img/leao.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML+= "Aiolia de Leão  é um Cavaleiro de Ouro do Século XX, irmão do cavaleiro de Sagitário da mesma época (Aioros), na série Os Cavaleiros do Zodíaco, de Masami Kurumada. É o Cavaleiro de Ouro que protege a Casa de Leão."
    }
    else if(data ==  "virgem"  || ((dia >= 23 && dia<=31 && mes ==8) || ( dia>=1 && dia <= 22 && mes ==9))){
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src","img/virgem.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML+= "Shaka de Virgem é o Cavaleiro de Ouro de Virgem do Século XX, que protege a Casa de Virgem no Santuário. Considerado como a reencarnação de Buda, possui um poder de observação que permite conhecer a verdade escondida sob as aparências."
    }
    else if(data ==  "libra"  || ((dia >= 23 && dia<=30 && mes ==9) || ( dia>=1 && dia <= 22 && mes ==10))){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","img/libra.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML+= "Dohko de Libra fora um lendário e renomado Cavaleiro de Ouro do Santuário de Atena por ter lutado e sobrevivido a Guerra Santa contra Hades no Século XVIII ao lado de seu parceiro de batalhas, Shion de Áries."
    }
    else if(data ==  "escorpiao"  || ((dia >= 23 && dia<=31 && mes ==10) || ( dia>=1 && dia <= 21 && mes ==11))){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","img/escorpiao.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML+= "O forte senso de confiança e superioridade de Milo. Milo é confiante e orgulhoso, e se importa muito com a honra e dignidade dos cavaleiros. Sempre seguro de si, é mais impassível do que a maioria dos outros Cavaleiros de Ouro."
    }
    else if(data ==  "sagitario"  || ((dia >= 22 && dia<=30 && mes ==11) || ( dia>=1 && dia <= 21 && mes ==12))){
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src","img/sagitario.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML+= "Cavaleiro de Ouro do signo de sagitário. Natural da Grécia. É o irmão mais velho de Aiolia e foi considerado traidor pela morte de Atena. Mas na verdade é um cavaleiro exemplar que dedicou sua vida na grande missão de proteger Atena mesmo desprezado pelos que o rodeavam."
    }
    else if(data ==  "capricornio"  || ((dia >= 22 && dia<=31 && mes ==12) || ( dia>=1 && dia <= 20 && mes ==1))){
        texto.innerHTML = "Capricórnio";
        imagem.setAttribute("src","img/capricornio.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML+= "Shura de Capricórnio é o Cavaleiro que protege a décima casa do Santuário, a Casa de Capricórnio. Um dos principais personagens de Saint Seiya (Os Cavaleiros do Zodíaco), Shura se considera o cavaleiro mais fiel a Athena.";
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
    }
}