// 1. Geração da lista dinâmica de filmes
const movies = [];

for (let i = 1; i <= 20; i++) {
    movies.push({
        nome: "Filme " + i,
        imagem: "https://picsum.photos/200/300/random=" + i
    });
}

// 2. Função de renderização eficiente
function render(lista) {
    const container = document.getElementById("movies");
    container.innerHTML = ""; 

    if (lista.length === 0) {
        container.innerHTML = `<p style="padding: 20px; color: #666;">Nenhum título encontrado.</p>`;
        return;
    }

    let htmlAcumulado = "";
    lista.forEach(m => {
        htmlAcumulado += `
        <div class="card">
            <img src="${m.imagem}" alt="${m.nome}" loading="lazy" />
            <p>${m.nome}</p>
        </div>
        `;
    });

    container.innerHTML = htmlAcumulado;
}

// 3. Sistema de busca em tempo real
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", (e) => {
    const termoBusca = e.target.value.toLowerCase().trim();
    
    const filmesFiltrados = movies.filter(filme => 
        filme.nome.toLowerCase().includes(termoBusca)
    );
    
    render(filmesFiltrados);
});

// 4. Efeito do cabeçalho mudar de cor no Scroll
const header = document.getElementById("main-header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.add("scrolled");
        header.classList.remove("scrolled");
    }
});

// 5. Controle do Botão de Alternância de Tema (Dark/Light)
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    
    if (currentTheme === "light") {
        document.documentElement.removeAttribute("data-theme");
        themeToggle.textContent = "Modo Claro";
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        themeToggle.textContent = "Modo Escuro";
    }
});

// Inicialização da página
render(movies);
