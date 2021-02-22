const btn=document.querySelector("button");

//old style
// btn.onclick = function () {
//     alert("I am clicked")
// }


// const btnClickHander= ()=> {
//     alert("I am clicked")
// };

// const otherClick = () =>{
//     console.log("hello")
// }
// btn.onclick=btnClickHander;
// btn.onclick=otherClick;




const btnClickHandler= ()=> {
    alert("I am clicked")
};

const otherClick = () =>{
    console.log("hello")
};

btn.addEventListener("click", btnClickHandler);
//btn.removeEventListener()




