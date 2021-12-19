
const form = document.getElementById('form');
const titleForm = document.getElementById('title');
const categoryForm = document.getElementById('categorie');
const authorForm = document.getElementById('auteur');
const cardContainer = document.getElementById('card-container');
const button = document.getElementById('btn');


class Course {
    constructor(title, category, author) {
        this.title = title;
        this.category = category;
        this.author = author;
    }
    
    injectHtml() {
       
        let newCard = document.createElement("div");
        let cardImg = document.createElement("div");
        let cardTexts = document.createElement("div");
        let image = document.createElement("img");
        let cardTitle = document.createElement("h3");
        let cardCategory = document.createElement("p");
        let cardAuthor = document.createElement("p");

        newCard.classList.add("card");
        cardImg.classList.add("card-img");
        cardTexts.classList.add("card-texts");
        image.classList.add("image");
        cardTitle.classList.add("card-title");
        cardCategory.classList.add("card-category");
        cardAuthor.classList.add("card-author");
        

        let url = 'https://picsum.photos/100/100';

        image.src = url;
        cardTitle.textContent = `${this.title}`;
        cardCategory.textContent = `${this.category}`;
        cardAuthor.textContent = `${this.author}`;

        cardImg.appendChild(image);
        cardTexts.appendChild(cardTitle);
        cardTexts.appendChild(cardCategory);
        cardTexts.appendChild(cardAuthor);
        newCard.appendChild(cardImg);
        newCard.appendChild(cardTexts);
        cardContainer.appendChild(newCard);

    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let course = new Course (
        titleForm.value,
        categoryForm.value,
        authorForm.value
    );

    course.injectHtml();
    
});

