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
}

const addMovie = async (movieObject) => {
    try {
        console.log(movieObject);
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

}


function renderMovieCard(movieInfo) {
    console.log(movieInfo);
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


(async () => {


    // let allMovies = await getAllMovies();

    const testMovie = {
        title: "Harry Potter",
        genre: "Crime",
        rating: 5000
    }

    // await addMovie(testMovie);

    let allMovies = await getAllMovies();

    renderMovieCard(allMovies)


})()
