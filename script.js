const itemsContainer = document.querySelector(".container");
const addBookButton = document.querySelector("#add-button");
const modalDialog = document.querySelector(".modal");
const form = document.querySelector(".dialog-form");

class Library {
  static myLibrary = [];
  static #itemsContainer = document.querySelector(".container");

  static addBookToLibrary(Book) {
    this.myLibrary.push(book);
  }

  static createCard(book) {
    let card = document.createElement("div");
    card.classList.add("item");

    console.log(book);

    // Item Header Element Creation
    let itemHeader = document.createElement("div");
    let itemTitle = document.createElement("h2");
    let itemDivider = document.createElement("hr");
    let itemAuthor = document.createElement("h4");

    itemHeader.classList.add("item-header-section");
    itemTitle.classList.add("item-title");
    itemAuthor.classList.add("item-author");
    itemTitle.textContent = book.title;
    itemAuthor.textContent = book.author;

    itemHeader.appendChild(itemTitle);
    itemHeader.appendChild(itemDivider);
    itemHeader.appendChild(itemAuthor);

    // Item Info Section Element Creation
    let itemInfoSection = document.createElement("div");
    let itemInfoPages = document.createElement("p");
    let itemInfoRead = document.createElement("button");

    itemInfoSection.classList.add("item-info-section");
    itemInfoPages.classList.add("pages-text");
    itemInfoRead.classList.add("read-btn");
    itemInfoPages.textContent = book.pages + " pages";
    itemInfoRead.textContent = book.read ? "Read" : "Not Read";
    if (book.read) {
      itemInfoRead.style.backgroundColor = "#2ecc71";
    }

    itemInfoRead.addEventListener("click", () => {
      if (!book.read) {
        itemInfoRead.style.backgroundColor = "#2ecc71";
      } else {
        itemInfoRead.style.backgroundColor = "#e74c3c";
      }
      book.read = !book.read;
      itemInfoRead.textContent = book.read ? "Read" : "Not Read";
    });

    itemInfoSection.appendChild(itemInfoPages);
    itemInfoSection.appendChild(itemInfoRead);

    // Delete Button
    let removeCardButton = document.createElement("button");
    removeCardButton.classList.add("primary-button");
    removeCardButton.style.backgroundColor = "transparent";
    removeCardButton.style.border = "2px solid red";
    removeCardButton.textContent = "Remove Book";
    removeCardButton.style.marginTop = "10px";

    removeCardButton.addEventListener("click", () => {
      removeCardButton.parentElement.remove();
    });

    card.appendChild(itemHeader);
    card.appendChild(itemInfoSection);
    card.appendChild(removeCardButton);

    itemsContainer.appendChild(card);
  }
}

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

addBookButton.addEventListener("click", () => {
  modalDialog.showModal();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var pages = document.getElementById("pages").value;
  var read = document.getElementById("read").checked;

  let b = new Book(title, author, pages, read);
  form.reset();

  Library.createCard(b);
  modalDialog.close();
});
