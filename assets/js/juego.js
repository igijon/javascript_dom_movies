/**
 * Vamos a crear dos montones de tarjetas, uno de películas y otro de recursos relacionados:
 * 
 */
const NMOVIES = 5
const NELEMENTSPMOVIE = 3

const btnMovieConfiguration = () => {
    const btnMovie = document.querySelector('#btnMovie')
    btnMovie.addEventListener('click', () => {
        let movie = getElement(movieDeck)
        console.log(movie)
    })
}

const getMoviesDeck = () => {
    let movieDeck = []
    for(let i = 1; i <= NMOVIES; i++) {
        movieDeck.push("0"+i+"M")
    }
    //Barajamos con un método dela librería Underscore. Esta librería ofrece muchas funciones,
    //en este caso uso shuffle que recibe un arrayy lo devuelve de forma aleatoria
    movieDeck = _.shuffle(movieDeck)
    return movieDeck;
}

const getElementsDeck = () => {
    let elementDeck = []
    for(let i = 1; i <= NMOVIES; i++) {
        for(let j = 1; j <= NELEMENTSPMOVIE; j++) {
            elementDeck.push("0"+i+"C"+j)
        } 
    }
    //Barajamos
    elementDeck = _.shuffle(elementDeck)
    return elementDeck;
}

const getElement = (elementDeck) => {
    if(elementDeck.length === 0)
        throw 'No hay más tarjetas'
    const tarjeta = elementDeck.pop()
    return tarjeta;
}


let movieDeck = getMoviesDeck()
let elementDeck = getElementsDeck()
btnMovieConfiguration()
