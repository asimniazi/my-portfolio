let tabs = document.querySelectorAll(".tab");
let buttons = document.querySelectorAll(".aboutButtons button");    //This selects all button elements that are inside any element with the class aboutButtons. The length is 3 because there are three button elements inside the div.


document.querySelector(".skillsBtn").addEventListener("click", () => {
    buttons[0].style.color = "white";
    buttons[1].style.color = "gray";
    buttons[2].style.color = "gray";
    tabs[0].style.display = 'block';
    tabs[1].style.display = 'none';
    tabs[2].style.display = 'none';
});

document.querySelector(".experienceBtn").addEventListener("click", () => {
    buttons[0].style.color = "gray";
    buttons[1].style.color = "white";
    buttons[2].style.color = "gray";
    tabs[0].style.display = 'none';
    tabs[1].style.display = 'block';
    tabs[2].style.display = 'none';
});

document.querySelector(".educationBtn").addEventListener("click", () => {
    buttons[0].style.color = "gray";
    buttons[1].style.color = "gray";
    buttons[2].style.color = "white";
    tabs[0].style.display = 'none';
    tabs[1].style.display = 'none';
    tabs[2].style.display = 'block';
});


const imageCards = document.querySelectorAll(".imageCard");
imageCards.forEach(imageCard => {
  console.log("Loop Executed!")
  const image = imageCard.querySelector("img");
  const content = imageCard.querySelector(".content");

  content.style.display = "none";

  imageCard.addEventListener("mouseover", () => {
    console.log("Hover Event Executed!");
    image.style.display = "none";
    content.style.display = "block";
    console.log("Come Outside From Hover!");
  });
  
  imageCard.addEventListener("mouseout", () => {
    console.log("Mouse Out Event Executed!");
    image.style.display = "block";
    content.style.display = "none";
    console.log("Come Outside From Mouse Out Event!");
  });
  console.log("Come Outside The Loop!");
});