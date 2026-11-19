class AboutSection extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <section id="sobre" class="sobre">
            <h2 class="sobre-titulo">Sobre Mim</h2>
            <div class="sobre-caixa">
                <p class="sobre-paragrafo">
                    Olá! Meu nome é Fabiano Santos e sou um desenvolvedor front-end apaixonado por criar experiências
                    digitais incríveis. Com habilidades em HTML, CSS e JavaScript, Next.js, estou sempre aprendendo novas
                    tecnologias para entregar projetos de alta qualidade.
                </p>
            </div>
        </section>`;
    }
}

customElements.define('about-section', AboutSection);
