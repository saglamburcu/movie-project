const form = document.querySelector(".add-film");
const movieName = document.querySelector("#title");
const movieDirector = document.querySelector("#director");
const movieImage = document.querySelector("#link");

function eventListeners() {
  form.addEventListener("submit", addMovie);
};

const ui = new UI();

const addMovie = (e) => {
  const movieNameVal = movieName.value;
  const movieDirectorVal = movieDirector.value;
  const movieImageVal = movieImage.value;

  if (movieNameVal === "" || movieDirectorVal === "" || movieImageVal === "") {
    // Error Message
  } else {
    const newFilm = new Film(movieNameVal, movieDirectorVal, movieImageVal);
    //console.log(newFilm)

    ui.addMovieToUI(newFilm);
  }

  ui.clearInputs(movieName, movieDirector, movieImage);

  e.preventDefault();
}

eventListeners();
