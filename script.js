const itemsContainer = document.querySelector(".container");
const addBookButton = document.querySelector("#add-button");
const modalDialog = document.querySelector(".modal");
const form = document.querySelector(".dialog-form");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function createCard(book) {
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
  itemInfoRead.textContent = true ? "Read" : "Not Read";

  itemInfoSection.appendChild(itemInfoPages);
  itemInfoSection.appendChild(itemInfoRead);

  card.appendChild(itemHeader);
  card.appendChild(itemInfoSection);

  itemsContainer.appendChild(card);
}

addBookButton.addEventListener("click", () => {
  modalDialog.showModal();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var pages = document.getElementById("pages").value;
  var read = document.getElementById("read").value;

  let b = new Book(title, author, pages, read);

  createCard(b);
  modalDialog.close();
});
