const form = document.querySelector(".add-film");
const movieName = document.querySelector("#title");
const movieDirector = document.querySelector("#director");
const movieImage = document.querySelector("#link");
const movieTable = document.querySelector("#movie-table");

const ui = new UI();
const storage = new Storage();

function eventListeners() {
  form.addEventListener("submit", addMovie);

  document.addEventListener("DOMContentLoaded", () => {
    let films = storage.getMovieFromStorage();
    ui.loadAllFilms(films);
  });

  movieTable.addEventListener("click", deleteMovie)

};

const addMovie = (e) => {
  const movieNameVal = movieName.value;
  const movieDirectorVal = movieDirector.value;
  const movieImageVal = movieImage.value;

  if (movieNameVal === "" || movieDirectorVal === "" || movieImageVal === "") {
    // Error Message
    ui.showInfo("fail", "You entered missing information!");
  } else {
    const newFilm = new Film(movieNameVal, movieDirectorVal, movieImageVal);
    //console.log(newFilm)

    ui.addMovieToUI(newFilm);
    storage.addMovieToStorage(newFilm);
    ui.showInfo("success", "The movie is added to the list");
  }

  ui.clearInputs(movieName, movieDirector, movieImage);
  e.preventDefault();

}

const deleteMovie = (e) => {
  if (e.target.id === "delete-movie") {
    ui.deleteMovieFromUI(e.target);
    ui.showInfo("warning", "The movie is removed from the list");
  }
}

eventListeners();
