const ARTICLES_PAR_PAGE = 6;
const params = new URLSearchParams(window.location.search);
const pageDemandee = Number(params.get("page")) || 1;
const articlesTries = [...articles].sort((a,b) => new Date(b.dateISO) - new Date(a.dateISO));
const nombrePages = Math.max(1, Math.ceil(articlesTries.length / ARTICLES_PAR_PAGE));
const pageActuelle = Math.min(Math.max(pageDemandee, 1), nombrePages);
const debut = (pageActuelle - 1) * ARTICLES_PAR_PAGE;
const liste = document.getElementById("articles-list");
articlesTries.slice(debut, debut + ARTICLES_PAR_PAGE).forEach(article => {
  const bloc = document.createElement("article");
  bloc.className = "article-card";
  bloc.innerHTML = `
      ${article.image ? `
          <a href="article.html?id=${encodeURIComponent(article.id)}">
              <img
                  class="article-card-image"
                  src="${article.image}"
                  alt="${article.imageAlt || article.titre}"
              >
          </a>
      ` : ""}

      <div class="article-card-content">
          <p class="article-meta">${article.date} — ${article.auteur}</p>

          <h2>
              <a href="article.html?id=${encodeURIComponent(article.id)}">
                  ${article.titre}
              </a>
          </h2>

          <p>${article.resume}</p>

          <a class="read-more" href="article.html?id=${encodeURIComponent(article.id)}">
              Lire l'article →
          </a>
      </div>
  `;
  liste.appendChild(bloc);
});
const pagination = document.getElementById("pagination");
if (nombrePages > 1) {
  if (pageActuelle > 1) pagination.innerHTML += `<a href="?page=${pageActuelle-1}">← Précédent</a>`;
  pagination.innerHTML += `<span>Page ${pageActuelle} sur ${nombrePages}</span>`;
  if (pageActuelle < nombrePages) pagination.innerHTML += `<a href="?page=${pageActuelle+1}">Suivant →</a>`;
}