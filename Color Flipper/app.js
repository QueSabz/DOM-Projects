const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById ('btn');

//color span
const color = document.querySelector ('.color');

//event listener for clicke event
btn.addEventListener ('click', function () {
  //get random number between 0 -3 colors
  const randomNumber = getRandomNumber ();
  console.log (randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber () {
  return Math.floor (Math.random () * colors.length);
}
