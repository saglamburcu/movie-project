class UI {

  static addMovieToUI(newMovie) {
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

  static clearInputs(movieName, movieDirector, movieImage) {
    movieName.value = "";
    movieDirector.value = "";
    movieImage.value = "";
  };

  static showInfo(status, message) {
    const form = document.querySelector(".add-film");

    const alert = document.createElement("div");
    alert.className = `info ${status}`
    alert.textContent = message;

    form.prepend(alert)

    setTimeout(() => {
      alert.remove();
    }, 2000)
  };

  static loadAllFilms(films) {
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

  static deleteMovieFromUI(element) {
    element.parentElement.parentElement.remove()
  };

  static clearAllMoviesFromUI() {
    const movieList = document.querySelector("#movie-list");

    while (movieList.firstElementChild !== null) {
      movieList.firstElementChild.remove();
    }
  };
}
