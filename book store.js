
let books = [];

//addbook function
function addBook(){
let book={};
  
  book.Title = prompt("1.Enter the title of the book:");
    if (book.Title.trim() === "") {
        alert('Can not Blank ! Please RE-enter the title .');
        return addBook(); 
    }
    
    book.Author = prompt("2.Enter the author of the book:");
    if (book.Author.trim() === "") {
        alert('Can not Blank ! Please RE-enter the author.');
        return addBook(); 
    }
    
    book.Year = parseInt(prompt("3.Enter the year of the book:"));
    if (isNaN(book.Year) || book.Year < 0) {
        alert('Wrong! Please RE-enter a valid year.');
        return addBook();
    }
    
   book.Price = parseFloat(prompt("4.Enter the price of the book:"));
    if (isNaN(book.Price) || book.Price < 0) {
        alert('Wrong! Please RE-enter a valid price.');
        return addBook();
    }
 
books.push(book);
alert(`you already add book, Title:${book.Title} ,Author :${book.Author},Year:${book.Year},Price:${book.Price}`);
}

//viewbooks function
function viewBooks() {
    console.log("Allbook List:");
    books.forEach(book => {
        console.log(`title: ${book.Title},author: ${book.Author},year: ${book.Year},price: ${book.Price}`);
    });
}

//editbook function
function editBook() {
    let titleToEdit = prompt("Enter the title of the book to edit:");
    let foundBookIndex = -1;

    books.forEach((book, index) => {
        if (book.Title === titleToEdit) {
            foundBookIndex = index;
        }
    });

    if (foundBookIndex !== -1) {
        let book = books[foundBookIndex];
        
        book.Title = prompt(`Edit the title of the book (${book.Title}):`) || book.Title;
        if (book.Title.trim() === "") {
            alert('Title cannot be blank! RE-edit the title');
            return editBook();
        }

        book.Author = prompt(`Edit the author of the book (${book.Author}):`) || book.Author;
        if (book.Author.trim() === "") {
            alert('Author cannot be blank!RE-edit the author');
            return editBook();
        }

      book.Year = parseInt(prompt(`Edit the year of the book (${book.Year}):`));
        if (isNaN(book.Year) || book.Year < 0) {
            alert('Wrong ! RE-edit to a valid year.');
            return editBook();
        }

       book.Price = parseFloat(prompt(`Edit the price of the book (${book.Price}):`));
        if (isNaN(book.Price) || book.Price < 0) {
            alert('Wrong ! RE-edit to a valid price.');
            return editBook();
        }

        alert("Already edited successfully.");
    } else {
        alert("Book not found.");
    }
}

//deletebook function
function deleteBook() {
    let titleToDelete = prompt("Enter the title of the book to delete:");

    let foundBookIndex = -1;
    books.forEach((book, index) => {
        if (book.Title === titleToDelete) {
            foundBookIndex = index;
        }
    });

    if (foundBookIndex !== -1) {
        books.splice(foundBookIndex, 1);
        alert("Already deleted Book");
    } else {
        alert("Book not found.");
    }
}

//findBook function
function findBookBytitle() {
    let Title = prompt("Enter the title of the book to search:");
    if (!Title) {
        alert("Please enter a title.");
        return;
    }
    
    if (!books || books.length === 0) {
        alert("No books found");
        return;
    }

    let foundBook = books.find(book => book && book.Title && book.Title.toLowerCase() === Title.toLowerCase());
    if (foundBook) {
        alert(`Found the book:\nTitle: ${foundBook.Title}\nAuthor: ${foundBook.Author}\nYear: ${foundBook.Year}\nPrice: ${foundBook.Price}`);
    } else {
        alert(`Book with title '${Title}' not found.`);
    }
}

//choice funciton
function mainMenu() {
    let choice;
    do {
        choice = prompt("Choose\n1. addbook\n2. viewbook\n3. editbook\n4. deletebook\n5. findbook\n6. Exit \n");
        switch (choice) {
            case "1":
                addBook();
                break;
            case "2":
                viewBooks();
                break;
            case "3":
                editBook();
                break;
            case "4":
                deleteBook();
                break;
            case "5":
                findBookBytitle();
                break;
            case "6":
                alert("Already Exit");
                break;
            default:
                alert("Re choose");
        }
    } while (choice !== "6");
}
mainMenu();