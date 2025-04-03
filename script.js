function searchBooks() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let books = document.querySelectorAll("#bookList li");

    books.forEach(book => {
        if (book.innerText.toLowerCase().includes(input)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
}
