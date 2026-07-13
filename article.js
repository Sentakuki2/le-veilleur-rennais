const params = new URLSearchParams(window.location.search);
const article = articles.find(a => a.id === params.get("id"));
const contenu = document.getElementById("article-content");
const commentairesSection = document.getElementById("comments-section");
if (!article) {
  contenu.innerHTML = `<h1>Article introuvable</h1><p><a href="index.html">← Retour à l'accueil</a></p>`;
  commentairesSection.remove();
} else {
  document.title = `${article.titre} — Le Veilleur Rennais`;
  contenu.innerHTML = `
      <p class="back-link">
          <a href="index.html">← Retour aux articles</a>
      </p>

      <h1>${article.titre}</h1>

      <p class="article-meta">
          Publié le ${article.date} par ${article.auteur}
      </p>

      <div class="article-body">
          ${article.contenu}
      </div>
      
       ${article.image ? `
          <figure class="article-image">
              <img src="${article.image}" alt="${article.imageAlt || article.titre}">
              ${article.imageLegende ? `
                  <figcaption>${article.imageLegende}</figcaption>
              ` : ""}
          </figure>
      ` : ""}
  `;
  const commentaires = article.commentaires || [];
  commentairesSection.innerHTML = `<h2>Commentaires (${commentaires.length})</h2>
    ${commentaires.length ? commentaires.map(c => `<article class="comment"><div class="comment-header"><strong>${c.pseudo}</strong><span>${c.date}</span></div><p>${c.texte}</p></article>`).join("") : "<p>Aucun commentaire pour le moment.</p>"}`;
}