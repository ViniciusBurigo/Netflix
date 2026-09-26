// Lista vazia de filmes
const movies = [];

for (let i = 1; i <= 20; i++) {
    movies.push({
        nome: "Filme" + i,
        imagem: "https://www.picsum.photos/200/300?random=" + i
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

render(movies)