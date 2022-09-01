const form = document.querySelector(".add-film");
const movieName = document.querySelector("#title");
const movieDirector = document.querySelector("#director");
const movieImage = document.querySelector("#link");
const movieTable = document.querySelector("#movie-table");
const clearAllButton = document.querySelector("#clear-all-button");

function eventListeners() {
  form.addEventListener("submit", addMovie);

  document.addEventListener("DOMContentLoaded", () => {
    let films = Storage.getMovieFromStorage();
    UI.loadAllFilms(films);
  });

  movieTable.addEventListener("click", deleteMovie);
  clearAllButton.addEventListener("click", clearAllMovies);

};

const addMovie = (e) => {
  const movieNameVal = movieName.value;
  const movieDirectorVal = movieDirector.value;
  const movieImageVal = movieImage.value;

  if (movieNameVal === "" || movieDirectorVal === "" || movieImageVal === "") {
    // Error Message
    UI.showInfo("fail", "You entered missing information!");
  } else {
    const newFilm = new Film(movieNameVal, movieDirectorVal, movieImageVal);
    //console.log(newFilm)

    UI.addMovieToUI(newFilm);
    Storage.addMovieToStorage(newFilm);
    UI.showInfo("success", "The movie is added to the list");
  }

  UI.clearInputs(movieName, movieDirector, movieImage);
  e.preventDefault();

}

const deleteMovie = (e) => {
  if (e.target.id === "delete-movie") {
    UI.deleteMovieFromUI(e.target);
    UI.showInfo("warning", "The movie is removed from the list");
    Storage.deleteMovieFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
  }
}

const clearAllMovies = (e) => {
  if (confirm("Are you sure that want to delete all movies?")) {
    UI.clearAllMoviesFromUI();
    Storage.clearAllMoviesFromStorage();
  }
}

eventListeners();
