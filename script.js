// Lista vazia de filmes
const movies = [];
const movies2 = [];

for (let i = 1; i <= 20; i++) {
    movies.push({
        nome: "Filme" + i,
        imagem: "https://www.picsum.photos/200/300?random=" + i
    });
}

for (let i = 1; i <= 10; i++) {
    movies2.push({
        nome: "Filme" + i,
        imagem: "https://www.picsum.photos/200/300?random=" + (i + 99)
    });
}

function render(lista) {
    const container = document.getElementById("movies");

    lista.forEach(m => {
        container.innerHTML += `
        <div classe="card">
            <img src="${m.imagem}" />
            <p>${m.nome}</p>
        </div>
        `;
    });
}

function render2(lista) {
    const container = document.getElementById("movies2");

    lista.forEach(m => {
        container.innerHTML += `
        <div classe="card">
            <img src="${m.imagem}" />
            <p>${m.nome}</p>
        </div>
        `;
    });
}

render(movies);
render2(movies2);

// =====================================================================================

const banners = [
    "https://www.picsum.photos/200/300?random=200",
    "https://www.picsum.photos/200/300?random=201",
    "https://www.picsum.photos/200/300?random=202",
    "https://www.picsum.photos/200/300?random=203",
    "https://www.picsum.photos/200/300?random=204"
]

const hero = document.querySelector(".hero");
let bannerAtual = 0;

function mudaBanner(){
    hero.style.backgroundImage = `
    linear-gradient(to top, #141414, transparent),
    url('${banners[bannerAtual]}')
    `;
    bannerAtual++; 

    if(bannerAtual >= 4) {
        bannerAtual = 0;
    }
}

mudaBanner();

// Cham esse método a cada 3 segundos
setInterval(mudaBanner, 3000);