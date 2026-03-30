// Salva o perfil ativo (nome e imagem) no localStorage ao selecionar um perfil
document.addEventListener('DOMContentLoaded', () => {
	const profileLinks = document.querySelectorAll('.profile-link');

	profileLinks.forEach(link => {
		link.addEventListener('click', (e) => {
			try {
				const img = link.querySelector('img');
				const caption = link.querySelector('figcaption');

				const nome = caption ? caption.textContent.trim() : '';
				// Resolve src relativo para uma URL absoluta baseada na página atual
				const imagem = img ? new URL(img.getAttribute('src'), window.location.href).href : '';

				if (nome) localStorage.setItem('perfilAtivoNome', nome);
				if (imagem) localStorage.setItem('perfilAtivoImagem', imagem);
			} catch (err) {
				console.error('Erro ao salvar perfil no localStorage', err);
			}
			// Deixar a navegação seguir normalmente para catalogo/catalogo.html
		});
	});
});
