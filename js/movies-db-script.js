const getAllMovies = async () => {
    try {
        let url = 'http://localhost:3000/movies';
        const options = {
            method: 'GET',
            headers: {
                'application-type': 'json',
            }
        }

        const response = await fetch(url, options);
        return await response.json();
    } catch (error) {
        console.log(error.message);
    }
}


(async () => {

    let allMovies = await getAllMovies();
    console.log(allMovies);









})()
