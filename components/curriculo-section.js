class CurriculoSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="curriculo" class="sobre">
            <h2 class="sobre-titulo">Meu Currículo</h2>
            <div class="sobre-caixa" style="text-align: center;">
                <p class="sobre-paragrafo" style="margin-bottom: 2rem;">
                    Gostaria de analisar minha trajetória profissional e competências técnicas em detalhes? 
                    Você pode baixar a versão em PDF ou visualizar agora mesmo.
                </p>
                <div class="projeto-links" style="justify-content: center; max-width: 500px; margin: 0 auto;">
                    <a href="assets/curriculo-fabiano-santos.pdf" download class="projeto-btn deploy-btn">
                        <i class="fas fa-download"></i> Baixar PDF
                    </a>
                    <a href="assets/curriculo-fabiano-santos.pdf" target="_blank" class="projeto-btn github-btn">
                        <i class="fas fa-eye"></i> Visualizar Online
                    </a>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('curriculo-section', CurriculoSection);