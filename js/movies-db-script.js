const getAllMovies = async () => {
    try {
        let url = 'http://localhost:3000/movies';
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch(url, options);
        return await response.json();
    } catch (error) {
        console.log(error.message);
    }
};

const addMovie = async (movieObject) => {
    try {
        let url = `http://localhost:3000/movies`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movieObject)
        }

        const response = await fetch(url, options);
        return await response.json();
    } catch (error) {
        console.log(error.message);
    }

};

function renderMovieCard(movieInfo) {
    const movieContainer = document.querySelector(".body-container")
    movieContainer.innerHTML = "";
    for (let movie of movieInfo) {
        const movieCard = document.createElement('div');
        movieCard.innerHTML = `
        <div class= "movie-boxes">
            <p>${movie.title}</p>
            <p>${movie.genre}</p>
            <p>${movie.rating}</p>
        </div>
        `;
        movieContainer.appendChild(movieCard);
    }
}

const updateMovie = async (movie) => {
    let url = `http://localhost:3000/movies`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    };
    const response = await fetch(`${url}/${movie.id}`, options);
    return response.json();
};

const removeMovie = async (id) => {
    let url = `http://localhost:3000/movies`;
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const response = await fetch(`${url}/${id}`, options);
    return response.json();
};

const getTopAPIMovies = async () => {
    try {
        let url = 'https://api.themoviedb.org/3/movie/popular/?api_key=';
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch(`${url}${MOVIES_KEY}`, options);
        return await response.json();
    } catch (error) {
        console.log(error.message);
    }
};

const searchMoviesAPI = async (movieName) => {
    try {
        let url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=`
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch(`${url}${MOVIES_KEY}`, options);
        return await response.json();
    } catch (error) {
        console.log(error.message);
    }

}

(async () => {


    const testMovie = {
        title: "Harry Potter",
        genre: "Crime",
        rating: 5000
    }
    const testUpdatedMovie = {
        id: 2,
        title: "Harry armpit",
        genre: "Wizards",
        rating: 9000
    }

    // await addMovie(testMovie);

    // await updateMovie(testUpdatedMovie);
    //
    // await removeMovie(1);
    //
    // let allMovies = await getAllMovies();
    //
    // renderMovieCard(allMovies);


})()
