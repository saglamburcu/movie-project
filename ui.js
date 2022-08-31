function UI() {

}

UI.prototype.addMovieToUI = (newMovie) => {
  const movieList = document.querySelector("#movie-list");

  movieList.innerHTML += `
    <tr>
      <td>${newMovie.title}</td>
      <td>${newMovie.director}</td>
      <td>
        <img id="movie-image" src=${newMovie.url} alt="#">
      </td>
    </tr>
  `
};

UI.prototype.clearInputs = (movieName, movieDirector, movieImage) => {
  movieName.value = "";
  movieDirector.value = "";
  movieImage.value = "";
}