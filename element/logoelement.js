class LogoElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        const shadow = this.shadowRoot;

        // Membuat elemen logo baru di luar kotak
        const logo = document.createElement('div'); // Elemen untuk logo
        logo.style.display = 'flex'; // Menggunakan flexbox untuk logo
        logo.style.alignItems = 'center'; // Menengahkan vertikal
        logo.style.justifyContent = 'center';

        // Menambahkan teks dan titik pada logo
        const logoText = document.createElement('span');
        logoText.textContent = 'Jalani'; // Teks untuk logo
        logoText.style.fontSize = '24px'; // Ukuran font untuk logo
        logoText.style.color = '#000'; // Warna teks logo
        logoText.style.fontFamily = 'Lobster';

        const dot = document.createElement('span');
        dot.textContent = '.'; // Karakter titik
        dot.style.fontSize = '24px'; // Ukuran titik
        dot.style.fontFamily = 'Lobster';
        dot.style.color = '#FF7426'; // Warna titik

        // Menambahkan teks dan titik ke dalam elemen logo
        logo.appendChild(logoText);
        logo.appendChild(dot);

        // Menambahkan logo di luar kotak ke shadow DOM
        shadow.appendChild(logo); 
    }
}

customElements.define('logo-element', LogoElement);