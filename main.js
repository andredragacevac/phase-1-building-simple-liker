// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const div = document.querySelector('#modal');
div.className = "hidden";

function likeButtons(hearts){

  const spans = document.querySelectorAll("span.like-glyph")
  const button = document.createElement('button');
  button.className = "like-glyph";
  button.textContent = EMPTY_HEART;

  spans[0].parentNode.replaceChild(button, spans[0])

  button.addEventListener('click', mimicServerCall);
  //{
  //button.textContent = FULL_HEART;
  //}
}
const hearts = document.getElementsByTagName('button'[0]);
likeButtons(hearts);
mimicServerCall();

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
