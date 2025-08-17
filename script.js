let books = []

function Book(title) {
  this.title = title
  this.id = crypto.randomUUID()
}

function addBook(title) {
  let book = new Book(title)
  books.push(book)
  listBooks()
}
document.querySelector("button.addBook").addEventListener("click", () => {
  addBook(document.querySelector("input").value)
})

function listBooks() {
  let bookDivs = document.querySelector("div.books")
  bookDivs.replaceChildren()

  for (let book of books) {
    let div = document.createElement("div")
    div.setAttribute("data-id", book.id)

    let p = document.createElement("p")
    p.textContent = book.title
    div.append(p)

    let delButton = document.createElement("button")
    delButton.classList.add("remove")
    delButton.textContent = "Remove"
    delButton.addEventListener("click", (e) => {
      let id = e.target.parentElement.getAttribute("data-id")
      books = books.filter(book => book.id !== id)
      listBooks()
    })
    div.append(delButton)

    bookDivs.appendChild(div)
  }
}

addBook("Tomie")
addBook("Gyo")
addBook("Remina")
addBook("Uzumaki")
