import { dataDestinasi } from "../src/data-destinasi.js";

class CardElement extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this._data = [];
        this.currentPage = 1; // Halaman saat ini
        this.cardsPerPage = 12; // Batas maksimal card per halaman
    }

    render() {
        const shadow = this.shadowRoot;

        shadow.innerHTML = '';

        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.flexDirection = 'row'; 
        container.style.justifyContent = 'flex-start';
        container.style.gap = '5%';
        container.style.flexWrap = 'wrap'; 

        const startIndex = (this.currentPage - 1) * this.cardsPerPage;
        const endIndex = this.currentPage * this.cardsPerPage;

        this._data.slice(startIndex, endIndex).forEach(item => {
            const kotak = document.createElement('div');
            const icon = document.createElement('img');
            const teks = document.createElement('span');
            const time = document.createElement('div');
            const iconTime = document.createElement('img');
            const duration = document.createElement('span');

            kotak.style.width = '290px';
            kotak.style.height = 'max-content';
            kotak.style.borderRadius = '30px';
            kotak.style.display = 'flex';
            kotak.style.flexDirection = 'column';
            kotak.style.justifyContent = 'center';
            kotak.style.marginBottom = '40px';

            icon.src = item.gambar;
            icon.alt = 'Icon';
            icon.style.width = '290px';
            icon.style.height = '200px';
            icon.style.borderRadius = '20px';

            teks.textContent = item.nama;
            teks.style.marginTop = '16px';
            teks.style.marginBottom = '50px';
            teks.style.fontSize = '18px';
            teks.style.fontFamily = 'Inter';
            teks.style.fontWeight = '600';
            teks.style.color = '#333';

            time.style.width = '107px';
            time.style.height = 'max-content';
            time.style.display = 'flex';

            iconTime.src = './src/img/timer.png';
            iconTime.style.height = '24px';
            iconTime.style.marginRight = '10px';

            duration.textContent = item.duration;

            time.appendChild(iconTime);
            time.appendChild(duration);

            kotak.appendChild(icon);
            kotak.appendChild(teks);
            kotak.appendChild(time);

            container.appendChild(kotak);
        });

        shadow.appendChild(container);

        this.renderPagination(); // Render navigasi pagination
    }

    renderPagination() {
        const shadow = this.shadowRoot;

        const paginationContainer = document.createElement('div');
        paginationContainer.style.marginTop = '20px';
        paginationContainer.style.display = 'flex';
        paginationContainer.style.justifyContent = 'center';
        paginationContainer.style.alignItems = 'center';

        const prevButton = document.createElement('button');
        const prevIcon = document.createElement('img');
        prevIcon.src = './src/img/prev.png';
        prevIcon.style.width = '24px';
        prevIcon.style.height = '24px';

        prevButton.appendChild(prevIcon); // Tambahkan ikon ke dalam tombol
        prevButton.disabled = this.currentPage === 1;
        prevButton.addEventListener('click', () => {
            this.currentPage--;
            this.render();
        });

        const nextButton = document.createElement('button');
        const nextIcon = document.createElement('img');
        nextIcon.src = './src/img/next.png';
        nextIcon.style.width = '24px';
        nextIcon.style.height = '24px';

        nextButton.appendChild(nextIcon); // Tambahkan ikon ke dalam tombol
        const totalPages = Math.ceil(this._data.length / this.cardsPerPage);
        nextButton.disabled = this.currentPage === totalPages;
        nextButton.addEventListener('click', () => {
            this.currentPage++;
            this.render();
        });

        // Tambahkan tampilan nomor halaman
        const pageIndicator = document.createElement('span');
        pageIndicator.textContent = `Page ${this.currentPage} of ${totalPages}`;
        pageIndicator.style.margin = '0 15px'; // Beri jarak antara tombol prev dan next

        paginationContainer.appendChild(prevButton);
        paginationContainer.appendChild(pageIndicator);
        paginationContainer.appendChild(nextButton);

        shadow.appendChild(paginationContainer);

        // Tambahkan elemen <style> untuk styling button
        const style = document.createElement('style');
        style.textContent = `
            button {
                background-color: #000000;
                color: white;
                border: none;
                font-size: 24px;
                padding: 10px;
                border-radius: 16px;
                cursor: pointer;
                display: flex;
                align-items: center;
            }
            
            button:disabled {
                background-color: #CCCCCC;
                cursor: not-allowed;
            }

            button:hover:not(:disabled) {
                background-color: #0056b3;
            }

            span {
                font-size: 16px;
                color: #333;
            }
        `;

        shadow.appendChild(style);
    }

    set data(newData) {
        this._data = newData;
        this.render();
    }

    get data() {
        return this._data;
    }
}

customElements.define('card-element', CardElement);

const cardElements = document.getElementById('destinasi');
cardElements.data = dataDestinasi;
