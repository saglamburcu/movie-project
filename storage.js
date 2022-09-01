class Storage {
  addMovieToStorage(newFilm) {
    let films = this.getMovieFromStorage();

    films.push(newFilm);

    localStorage.setItem("movies", JSON.stringify(films));
  }

  getMovieFromStorage() {
    let movies;

    if (localStorage.getItem("movies") === null) {
      movies = [];
    } else {
      movies = JSON.parse(localStorage.getItem("movies"));
    }

    return movies;
  }
}




