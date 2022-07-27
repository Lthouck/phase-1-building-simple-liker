// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const likedHearts = document.querySelectorAll(".like-glyph")

for (const glyph of likedHearts) {
  glyph.addEventListener("click", likeCallBack)
} 

function likeCallBack(e) {
  const hearts = e.target
  mimicServerCall("http://mimicServer.example.com")
  .then(function() {
    if (hearts.innerText === EMPTY_HEART) {
      hearts.innerText = FULL_HEART
      hearts.className = "activated-heart"
    } else {
      hearts.innerText = EMPTY_HEART
      hearts.className = ""
    }
  })
.catch(function(error) {
  const modal = document.getElementById("modal")
  modal.className = ""
  modal.innerText = error
  setTimeout(() => modal.className = "hidden", 3000)
})
}


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
