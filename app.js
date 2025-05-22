// *No Longer required for downsized project only evidence
// var menu = document.querySelector('#mobile-menu');
// var menuLinks = document.querySelector('.navbar__menu');
// //Adds event listener for clicks
// menu.addEventListener('click', function(){
//     menu.classList.toggle('is-active');
//     menuLinks.classList.toggle('active'); //toggles the menu visbibility
// })



// * No longer required for downsized project only evidence
// importing db.js for database connection
// const db = require("./db");
// //find review
// query("select * from reviews", (err, results) =>{
//     if (err) throw err;
//     console.log(results);
    
// });


// *No Longer required for downsized project only evidence
// new review
// const newReview = {user_id: 1, game_id: 1, rating: 5, review_text: "It be pretty Gud" };
// query("INSERT INTO reviews SET ?", newReview, (err, result) => {
//     if (err) throw err;
//     console.log("Review has been added:", result);
// });



// *No Longer required for downsized project only evidence
// document.querySelector("#someElement").addEventListener("click", () => {
//     console.log("Clicked");
// });

// document.querySelector("#submit").addEventListener("click", function() {
//     fetch("http://localhost:5000/addReview", { method: "POST" });
// });

// Search bar no longer required for project
// Filter games
//    document.querySelector("#search-bar").addEventListener("keyup", function() {
//     let filter = this.value.toLowerCase();
//     let gameItems = document.querySelectorAll("#games-list li");

//     gameItems.forEach(game => {
//         let gameName = game.textContent.toLowerCase();
//         game.style.display = gameName.includes(filter) ? "block" : "none";
//     });
// });



//ratings for game data
document.addEventListener("DOMContentLoaded", function () {
const games = [
  { id: 1, title: "Devil May Cry 5", image: "images/pic1.jpg", rating: "⭐ 5/5", review: "DMC5 is one of the best stlyish action games of all time a true comeback of the genere it has near infinite replay value on how the player can aprroach combat and combos its a must play for anybody intrested in video games" },
  { id: 2, title: "God Of War", image: "images/pic2.jpg", rating: "⭐ 4/5", review: "The original God Of War while it is showing its age and is rough around the edges, especially in the mandatory platforming sections being really frustating it is one of the best PS2 games of all time" }, 
  { id: 3, title: "Doom The Dark Ages", image: "images/pic3.jpeg", rating: "⭐ 4.2/5", review: "I loved all the Doom games so far and this one also doesn't disappoint it offers something unique to play compared to the other doom games i am glad this series doesnt stagnate" } 
];


// game card and click event handler
const container = document.querySelector(".game-grid");
  if (!container) {
    console.error("Container with class '.game-grid' not found in HTML.");
    return; // Exit if the container is not found
  }
  games.forEach((game) => {
    const card = document.createElement("div");
    card.classList.add("game-card");
    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <p>${game.title}</p>
      <div class="game-rating">${game.rating}</div>
    `;





// When the box art is clicked it will fill the modal
card.addEventListener("click", () => {
      console.log("Card clicked for:", game.title);  // For debugging
      document.getElementById("modal-review-title").textContent = game.title + " Review";
      document.getElementById("modal-review-rating").textContent = game.rating;
      document.getElementById("modal-review-content").textContent = game.review;
      document.getElementById("review-modal").style.display = "flex";// Change display style to flex so that the modal centers its content
    });



//Appends the card for the container
container.appendChild(card);
  });

// event for when the user model closes
document.getElementById("close-modal").addEventListener("click", () => {
  document.getElementById("review-modal").style.display = "none";
});
});
