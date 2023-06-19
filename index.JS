localStorage.contador = 1;

const mudar = ["https://media1.tenor.com/images/c61b407257c30373b1c3c65cf6b79ea5/tenor.gif?itemid=18455293"
    ,"https://i.pinimg.com/originals/58/17/d3/5817d33cf9d8ce5af259e382cdc549de.gif"
    , "https://i.pinimg.com/originals/f2/c7/00/f2c700fd02e7ba1ce2b084443f04821e.gif"
    , "https://media.giphy.com/media/YWB6Hi29vA3jG/giphy.gif"
    , "http://1.bp.blogspot.com/-To-gu1WUFCU/UXsH2GD3smI/AAAAAAAAALo/5fv5vP6wmlo/s1600/tumblr_mks12bP4gi1s4ugiyo2_500.gif"
    , "https://i.pinimg.com/originals/05/9f/75/059f7521b362f303cc73cb63816a99b0.gif"
    , "https://i.pinimg.com/originals/b0/4f/72/b04f72e1a05829ddc1184a7238e93660.gif"
    , "https://i.kym-cdn.com/photos/images/original/001/128/524/0ea.gif"
    , "https://i.pinimg.com/originals/5d/91/79/5d9179c904a9ff22a9eb6a7350e7aa85.gif"
    , "https://i.pinimg.com/originals/80/6c/bd/806cbd3b30817193f6d95b400a1c6860.gif"
    , "https://i.pinimg.com/originals/93/30/36/933036e449f1b3b67a46aa7fa7c110bf.gif"
];

const imagem = document.getElementById("imagem");

const aperto = document.getElementById('alt');

aperto.addEventListener("click", () => {
    imagem.src = mudar[localStorage.contador++];

    if (localStorage.contador > 10) {
        localStorage.contador = 0;
    }

});
