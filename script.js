
// var, const, let

// var firstname = "Jan";
// var lastname = "Kowalski";


// // deklaracja zmiennej - tutakj powstaje
// const firstname = "Jan";
// // firstname = "John";

// console.log(firstname);

// let lastname = "Kowalski";
// lastname = "Smith"

// console.log(lastname);

// typy proste: string (ciąg znaków), number (liczba)

// const result = "To jest " + firstname + " " + lastname + " " + "i mieszka w Londynie"

// const result2 = `To jest ${firstname} ${lastname} i mieszka w londynie`; 
// // console.log(result);

// const city = "Katowice";
// const day = "Sobota";
// let temp = "20";


// // const result3 = `Nasze miasto to ${city}. Dziś jest ${day}, na zewnątrz jest ${temp} stopni.`;

// // console.log(result3);

// const num1 = 4;
// const num2 = "3";


// console.log(num1 + Number (num2));
// console.log(num1 - num2);





// const title = document.getElementById("PageTitle");
// title.textContent = "Witamy w Katowicach";
// // title.style.fontSize  = "60px"
// // title.setAttribute("class" , "customClass");
// // title.classList.add("title")

// const pageSubtitle = document.querySelector(".subtitle");
// pageSubtitle.textContent = "Sobota";

// console.log(title);
// console.log(pageSubtitle);




// const title = document.getElementById("User");
// title.textContent = "Mikołaj";

// const title2 = document.getElementById("favColor");
// title2.textContent = "RED";
// title2.style.color = "red";

// const title5 = document.getElementById("favPet");
// title5.textContent = "Śledź w galarecie";
// title5.style.border = "2px solid blue";



// const title3 = document.getElementById("cityInfo");
// title3.textContent = "Nie, nie jest";

// const title4 = document.getElementById("jobStatus");
// title4.textContent = "Tak bardzo!";





const parentElement = document.querySelector(".wrapper");

// parentElement.innerHTML = 
// `
// <h2 class = "title"> Hello World </h2>
// <p>Dziś piekna pogoda</p>
// <button> Zobacz </button>

// `


const childTitle = document.createElement("h2");
childTitle.textContent = "Hello World";
childTitle.classList.add("title");
parentElement.appendChild(childTitle);


const childParagraph = document.createElement("p");
childParagraph.textContent = "Dziś piekna pogoda";
parentElement.appendChild(childParagraph);

const childButton = document.createElement("button");
childButton.textContent = "Przycisk";
parentElement.appendChild(childButton);


