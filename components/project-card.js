class ProjectCard extends HTMLElement {
    connectedCallback() {
        // Captura dos atributos com valores padrão (fallback)
        const img = this.getAttribute("img") || "img/default.jpg";
        const title = this.getAttribute("title") || "Projeto sem título";
        const desc = this.getAttribute("desc") || "Sem descrição";
        const deploy = this.getAttribute("deploy") || "#";
        const github = this.getAttribute("github") || "#";

        this.innerHTML = `
        <div class="projeto-card">
            <div class="projeto-img-wrapper">
                <img src="${img}" alt="${title}">
            </div>

            <div class="projeto-info">
                <h3>${title}</h3>
                <p>${desc}</p>
                
                <div class="projeto-links">
                    <a class="projeto-btn deploy-btn" href="${deploy}" target="_blank" rel="noopener noreferrer">
                         🚀 Ver Projeto
                    </a>
                    <a class="projeto-btn github-btn" href="${github}" target="_blank" rel="noopener noreferrer">
                        💻 GitHub
                    </a>
                </div>
            </div>
        </div>`;
    }
}

// Define o elemento customizado para ser usado no index.html como <project-card>
customElements.define("project-card", ProjectCard);