localStorage.contador = 1;

const mudar = ["https://media.tenor.com/6YMQBN7gUpEAAAAM/opa-fabio-de-luca.gif"
    ,"https://i.pinimg.com/originals/58/17/d3/5817d33cf9d8ce5af259e382cdc549de.gif"
    , "https://cutewallpaper.org/28/city-pixel-gifs-wallpaper/animated-cyberpunk-wallpaper-gif-posted-by-zoey-anderson.gif"
    , "https://magiagifs.com.br/wp-content/uploads/2019/08/gifs-anime26.gif"
    , "https://media.tenor.com/Y_zcZcrB1XkAAAAC/anime.gif"
    , "https://media.tenor.com/IumafqEjUOAAAAAd/boku-no-hero-my-hero-academia.gif"
    , "https://media.tenor.com/7zFnc4Y3pqUAAAAd/vigilante-deku-deku.gif"
    , "https://i.pinimg.com/originals/2a/cd/b9/2acdb9192f82fc1726058bb37e7a88aa.gif"
    , "https://media.tenor.com/Lrg_CamXv08AAAAC/jujutsu-kaisen.gif"
    , "https://i.pinimg.com/originals/21/ec/81/21ec81f8b13bb26b1a0f9c663f7a017f.gif"
    , "https://giffiles.alphacoders.com/211/211338.gif"
];

const imagem = document.getElementById("imagem");

const aperto = document.getElementById('alt');

aperto.addEventListener("click", () => {
    imagem.src = mudar[localStorage.contador++];

    if (localStorage.contador > 10) {
        localStorage.contador = 0;
    }

});
