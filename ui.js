function UI() {

}

UI.prototype.addMovieToUI = (newMovie) => {
  const movieList = document.querySelector("#movie-list");

  movieList.innerHTML += `
    <tr>
      <td>${newMovie.title}</td>
      <td>${newMovie.director}</td>
      <td class="image-container">
        <img id="movie-image" src=${newMovie.url} alt="#">
        <button id="delete-movie" type="button">Filmi Sil</button>
      </td>
    </tr>
  `
};

UI.prototype.clearInputs = (movieName, movieDirector, movieImage) => {
  movieName.value = "";
  movieDirector.value = "";
  movieImage.value = "";
};

UI.prototype.showInfo = (status, message) => {
  const form = document.querySelector(".add-film");

  const alert = document.createElement("div");
  alert.className = `info ${status}`
  alert.textContent = message;

  form.prepend(alert)

  setTimeout(() => {
    alert.remove();
  }, 2000)
}

UI.prototype.loadAllFilms = (films) => {
  const movieList = document.querySelector("#movie-list");

  films.forEach((film) => (
    movieList.innerHTML += `
    <tr>
      <td>${film.title}</td>
      <td>${film.director}</td>
      <td class="image-container">
        <img id="movie-image" src=${film.url} alt="#">
        <button id="delete-movie" type="button">Filmi Sil</button>
      </td>
    </tr>
  `
  ))
};

UI.prototype.deleteMovieFromUI = (element) => {
  element.parentElement.parentElement.remove()
}

UI.prototype.clearAllMoviesFromUI = () => {
  const movieList = document.querySelector("#movie-list");

  while (movieList.firstElementChild !== null) {
    movieList.firstElementChild.remove();
  }
}