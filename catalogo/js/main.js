import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        // popular a seção de destaque (featured) com o primeiro item da primeira categoria
        const featuredTitleEl = document.getElementById('featured-title');
        const featuredMetaEl = document.getElementById('featured-meta');
        const featuredBg = document.getElementById('featured-bg');
        const playBtn = document.getElementById('featured-play');
        const infoBtn = document.getElementById('featured-info');

        if (categories[0] && categories[0].items && categories[0].items.length > 0) {
            const item = categories[0].items[0];
            if (featuredBg && item.img) featuredBg.style.backgroundImage = `url('${item.img}')`;
            if (featuredTitleEl) featuredTitleEl.textContent = item.title || categories[0].title || 'Destaque';
            // mostrar descrição curta quando disponível, caso contrário exibir a duração
            if (featuredMetaEl) featuredMetaEl.textContent = item.description || item.duration || '';

            if (playBtn) playBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (item.youtube) window.open(item.youtube.startsWith('http') ? item.youtube : `https://${item.youtube}`, '_blank');
            });

            if (infoBtn) infoBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                // abrir página do IMDb (Interstellar) em nova aba
                window.open('https://www.imdb.com/pt/title/tt0816692/', '_blank', 'noopener');
            });
        }

        // criar e anexar os carousels normais
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
