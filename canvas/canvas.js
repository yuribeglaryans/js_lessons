let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
// console.log(ctx);

// Draw Rectengl
// ctx.fillStyle = "Red";
// ctx.fillRect(10, 10, 150, 130);

// // ctx.strokeStyle = "green";
// // ctx.strokeRect(50, 50, 100, 100);
const circal = () => {
  ctx.lineWidth = 3;
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.arc(150, 150, 50, 0, Math.PI * 2, false);
  ctx.stroke();
};

//Window.setTimeout()
const foo = () => {
  console.log("Hello World I am foo function");
};

const bar = () => console.log("Hello World I am bar function");

//setTimeout(circal, 3000);

// Window.setInterval
// setInterval(foo, 1000);

let position = 0;
setInterval(function () {
  ctx.fillStyle = "Red";
  ctx.fillRect(position, 0, 150, 150);
  position++;
  if (position > 200) {
    position = 0;
  }
}, 50);