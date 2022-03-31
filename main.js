const burger = document.querySelector(".burger");
const home = document.querySelector(".home");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    home.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
    burger.classList.remove("active");
    burger.classList.remove("active");
}))

// const menu = document.querySelector('.price')
// const  burger = document.querySelector('.burger')



// const toggleMenu = () => {
//     menu.classList.toggle("show");
// }


// burger.addEventListener('click', toggleMenu)

// const containerOne = document.querySelectorAll('.one')


// const mainContent = [
    
//     {
//     imageUrl: "Vector",
//     title: "Award Design",
//     content: `
//     Lorem ipsum is a simply dummy <br />
//     text of the printing and <br />
//     typesetting industry. Lorem <br />
//     ipsum has been the industry's.  
//     `
//     },

//     {
//     imageUrl: "Vector",
//     title: "Award Design",
//     content: `
//     Lorem ipsum is a simply dummy <br />
//     text of the printing and <br />
//     typesetting industry. Lorem <br />
//     ipsum has been the industry's.  
//     `
//     },

//     {
//         imageUrl: "Vector",
//         title: "Award Design",
//         content: `
//         Lorem ipsum is a simply dummy <br />
//         text of the printing and <br />
//         typesetting industry. Lorem <br />
//         ipsum has been the industry's.  
//         `
//         },
// ]

// const  bigItem = (imageUrl,title, content) => (`
// <div class="main">
// <img src="./assets1/svgs/${imageUrl}" alt="" />
// <h2>${title}</h2>
// <p>
//  ${content}
// </p>
// </div>
// `)



// const showContent = () => mainContent.forEach(( {imageUrl, title,content}, index, arr) => container.appendChild(bigItem(imageUrl, title,content)))




