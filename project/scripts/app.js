const addMovieModel = document.getElementById('header');
const startAddMovieButton = document.getElementById('add_but');
console.log(addMovieModel)
const toggleMovieModel = () => {
    addMovieModel.classList.toggle('visible');
}
startAddMovieButton.addEventListener('click',toggleMovieModel);
 