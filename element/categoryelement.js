import { dataKategori } from "../src/data.js";

class CategoryElement extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this._data =[];
    }

    render() {
        const shadow = this.shadowRoot;

        shadow.innerHTML = '';

        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.flexDirection = 'row'; 
        container.style.justifyContent = 'space-between';
        container.style.flexWrap = 'wrap'; 

        this._data.forEach(item => {
            const kotak = document.createElement('div');
            const icon = document.createElement('img');
            const teks = document.createElement('span');

            kotak.style.width = '150px';
            kotak.style.height = '125px';
            kotak.style.background = 'linear-gradient(to top, rgba(112, 130, 70, 0.1) 0%, #FFFFFF 80%)';
            kotak.style.borderRadius = '30px';
            kotak.style.display = 'flex';
            kotak.style.flexDirection = 'column';
            kotak.style.alignItems = 'center';
            kotak.style.justifyContent = 'center';

            icon.src = item.gambar;
            icon.alt = 'Icon';
            icon.style.height = '50px';

            teks.textContent = item.nama;
            teks.style.marginTop = '10px';
            teks.style.fontSize = '16px';
            teks.style.fontFamily = 'Inter';
            teks.style.fontWeight = '600';
            teks.style.textAlign = 'center';
            teks.style.color ='#333';

            kotak.appendChild(icon);
            kotak.appendChild(teks);

            container.appendChild(kotak);
        });

        shadow.appendChild(container);
    }

    set data(newData) {
        this._data = newData;
        this.render();
    }

    get data() {
        return this._data;
    }
}

customElements.define('category-element', CategoryElement);

const cardElements = document.getElementById('kartu');
cardElements.data = dataKategori;