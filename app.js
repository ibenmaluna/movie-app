"use strict";

console.log("Movie App starter...");

const movies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Pulp Fiction", "Fight Club"];

console.log("Alle film:", movies);

console.log("Første film:", movies[0]);
console.log("Anden film:", movies[1]);
console.log("Sidste film:", movies[3]);

for (const movie of movies) {
    console.log("Nu viser vi:", movie);
}

console.log("Antal film:", movies.length);

for (const movie of movies) {
  const html = /* html */ `
    <article class="movie-card">
      <div class="movie-info">
        <h3>${movie}</h3>
      </div>
    </article>
  `;

  console.log(html);
}