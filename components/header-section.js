class HeaderSection extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <main id="inicio" class="cabecalho">
            <img src="img/perfil.jpg" alt="Foto de Fabiano Santos" class="foto-perfil">
            <h1>Fabiano Santos</h1>
            <p class="cabecalho-sub-titulo">Desenvolvedor Front-End</p>
        </main>`;
    }
}

customElements.define('header-section', HeaderSection);
