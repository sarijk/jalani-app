class SearchElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        const shadow = this.shadowRoot;

        const kotak = document.createElement('div');
            kotak.style.width = 'max-width';
            kotak.style.height = '80px';
            kotak.style.margin = '0 80px';
            kotak.style.border = '2px solid #ddd';
            kotak.style.borderRadius = '30px';
            kotak.style.display = 'flex';
            kotak.style.flexDirection = 'column';
            kotak.style.alignItems = 'center';
            kotak.style.justifyContent = 'center';
            shadow.appendChild(kotak);
    }
}

customElements.define('search-element', SearchElement);