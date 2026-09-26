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

function render(lista, containerId) {
    const container = document.getElementById(containerId);

    container.innerHTML = lista.map(m => `
        <article class="card">
            <img src="${m.imagem}" alt="Capa de ${m.nome}">
            <p>${m.nome}</p>
        </article>
    `).join("");
}

render(movies, "movies");
render(movies2, "movies2");

// =====================================================================================

const banners = [
    "https://www.picsum.photos/1200/600?random=200",
    "https://www.picsum.photos/1200/600?random=201",
    "https://www.picsum.photos/1200/600?random=202",
    "https://www.picsum.photos/1200/600?random=203",
    "https://www.picsum.photos/1200/600?random=204"
];

const hero = document.querySelector(".hero");
let bannerAtual = 0;

function mudaBanner() {
    hero.style.backgroundImage = `
    linear-gradient(to top, #141414, transparent),
    url('${banners[bannerAtual]}')
    `;
    bannerAtual++; 

    if (bannerAtual >= banners.length) {
        bannerAtual = 0;
    }
}

mudaBanner();

// Chama esse método a cada 3 segundos
setInterval(mudaBanner, 3000);

function mudaTema() {
    document.body.classList.toggle("light");

    const icone = document.querySelector('#botao i');

    // valida se ta com tema claro ou escuro
    if (document.body.classList.contains("light")) {
        icone.classList.remove("fa-sun");
        icone.classList.add("fa-moon");
    } else {
        icone.classList.remove("fa-moon");
        icone.classList.add("fa-sun");
    }
}

document.getElementById("botao").addEventListener("click", mudaTema);

document.getElementById("search").addEventListener("input", event => {
    const termo = event.target.value.trim().toLowerCase();
    const filtrar = lista => lista.filter(movie =>
        movie.nome.toLowerCase().includes(termo)
    );

    render(filtrar(movies), "movies");
    render(filtrar(movies2), "movies2");
});
