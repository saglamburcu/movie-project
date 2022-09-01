class Storage {
  static addMovieToStorage(newFilm) {
    let films = this.getMovieFromStorage();

    films.push(newFilm);

    localStorage.setItem("movies", JSON.stringify(films));
  }

  static getMovieFromStorage() {
    let movies;

    if (localStorage.getItem("movies") === null) {
      movies = [];
    } else {
      movies = JSON.parse(localStorage.getItem("movies"));
    }

    return movies;
  }

  static deleteMovieFromStorage(filmTitle) {
    let movies = this.getMovieFromStorage();

    movies.forEach((movie, index) => {
      if (movie.title === filmTitle) {
        movies.splice(index, 1);
      }
    })

    localStorage.setItem("movies", JSON.stringify(movies));
  }

  static clearAllMoviesFromStorage() {
    localStorage.removeItem("movies")
  }
}




