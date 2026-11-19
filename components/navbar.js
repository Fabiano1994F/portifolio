class NavBar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <nav class="navegacao">
            <ul class="menu">
                <li><a href="#inicio" class="menu-link">Início</a></li>
                <li><a href="#sobre" class="menu-link">Sobre</a></li>
                <li><a href="#projetos" class="menu-link">Projetos</a></li>
                <li><a href="#contato" class="menu-link">Contato</a></li>
            </ul>
        </nav>`;
    }
}

customElements.define('nav-bar', NavBar);
