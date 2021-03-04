const addMovieModel = document.getElementById('add-modal');
const startAddMovieButton = document.getElementById('add_but'); 
const backdrop=document.getElementById('backdrop');
const btnCancel=addMovieModel.querySelector('.whbut')
const btnAdd=btnCancel.nextElementSibling;
const userInputs=addMovieModel.querySelectorAll('input');
//console.log(userInputs);
const entryText = document.getElementById('entry-text');
const deleteMovieModel=document.getElementById('delete-modal');

const movies = [];
const updateUI=()=>{
    if(movies.length === 0){
        entryText.style.display = "block";
    }
    else{
        entryText.style .display = "none";
    }
}

const toggleBackdrop=()=>{
    backdrop.classList.toggle('visible'); 
}
const closeMovieDelation=()=>{
    //toggleBackdrop();
    deleteMovieModel.classList.remove("visible");
}
const confirmDeleteMovie=movieId=>{
    let movieIndex=0;
    for (let movie of movies){
        if(movie.id == movieId){
            break;
        }
        
            movieIndex++;
    }
    movies.splice(movieIndex,1);
    const listRoot=document.getElementById("movie-list");
    //console.log(listRoot.children[movieIndex]) 
    listRoot.children[movieIndex].remove();
    //listRoot.removeChild(listRoot.children[movieIndex]); 
    deleteMovieModel.classList.add("visible");
    closeMovieDelation();    
}
const deleteMovieElemenetHandler=(movieId)=>{
    deleteMovieModel.classList.add("visible"); 
    //toggleBackdrop();
    const cancelBtn=deleteMovieModel.querySelector(".btn--passive");
    const yesBtn=deleteMovieModel.querySelector(".btn--danger");
    // confirmDeleteMovie(movieId);
    cancelBtn.addEventListener('click',closeMovieDelation)
    yesBtn.addEventListener("click",confirmDeleteMovie.bind(null,movieId));
}

const renderNewMovieList=(id,title,imageUrl,rating)=>{
    const newMovieList=document.createElement('li');
    newMovieList.classList="movie-element";
    newMovieList.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageUrl}" alt="${title}" > 
    </div>
    <div class="movie-element__info">
         <h2>${title}</h2>  
         <p>${rating}/5 STARS</p>     
    </div>
    `
    newMovieList.addEventListener("click",deleteMovieElemenetHandler.bind(null,id))  
    const listRoot=document.getElementById("movie-list"); 
    listRoot.append(newMovieList);
}

 const toggleMovieModel = () => {
   // toggleBackdrop();
    addMovieModel.classList.toggle('visible'); 
         
}
const backdropClickHandler = ()=>{
    toggleMovieModel();
}
const cancelClickHandler=()=>{
    toggleMovieModel();
    clearMovieInputs();
}
const addMovieInUlHandler=()=>{
    const movieTitle=userInputs[0].value;
    const movieImageURL=userInputs[1].value;
    const movieRatig=userInputs[2].value;
    if(movieTitle.trim()==="" ||
     movieImageURL.trim()==="" ||
     movieRatig.trim()==="" ||
     movieRatig < 1|| 
     movieRatig>5)  
     {
         alert("please input valid value")
     }
     
     const newMovie={
        id: Math.random.toString(),
        title: movieTitle,
        imageUrl: movieImageURL,
        rating:movieRatig
     }
     movies.push(newMovie);
     console.log(movies);
     toggleMovieModel();
     clearMovieInputs();
     renderNewMovieList(newMovie.id ,newMovie.title,newMovie.imageUrl,newMovie.rating);
     updateUI();
};

const clearMovieInputs=()=>{
    for( const userInput of userInputs){
        userInput.value="";
    }
}
startAddMovieButton.addEventListener("click",toggleMovieModel);
//backdrop.addEventListener("click",backdropClickHandler);
btnCancel.addEventListener("click",cancelClickHandler);
btnAdd.addEventListener("click",addMovieInUlHandler);
