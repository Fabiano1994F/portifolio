class ContactSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="contatos">
            <form class="formulario-contato">
                <h1>Entre em Contato</h1>
                <div class="grupo-form">
                    <input type="text" id="nome" class="campo-form" placeholder="Seu Nome" required>
                </div>
                <div class="grupo-form">
                    <input type="email" id="email" class="campo-form" placeholder="Seu E-mail" required>
                </div>
                <div class="grupo-form">
                    <textarea id="mensagem" class="campo-form" rows="5" placeholder="Sua Mensagem" required></textarea>
                </div>
                <button type="button" id="btnEnviar" class="botao-form">Enviar Mensagem</button>
            </form>
        </section>
        `;

        
        this.querySelector('#btnEnviar').addEventListener('click', () => this.enviarWhatsApp());
    }

    enviarWhatsApp() {
        const nome = this.querySelector('#nome').value;
        const email = this.querySelector('#email').value;
        const mensagem = this.querySelector('#mensagem').value;
        const numero = "5511985679953"; 

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos antes de enviar.");
            return;
        }

        const textoMensagem = `*Novo Contato via Site*\n\n*Nome:* ${nome}\n*E-mail:* ${email}\n*Mensagem:* ${mensagem}`;
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(textoMensagem)}`;
        window.open(url, '_blank');
    }
}

customElements.define('contact-section', ContactSection);