const bookTable = $('#bookTable');
const form = $('form');

$(updateBooks());

function updateBooks() {

    $("tbody").remove(); // avoid duplications

    $.ajax({
        type: "GET",
        url: "ajax/getBooks.php",
        dataType: "json",
        success: function(response) {
            for(var i = 0; i < response.length; i++) {
                var id = response[i][0];
                var title = response[i][1];
                var author = response[i][2];
                var publisher = response[i][3];
                var year = response[i][4];
                var pages = response[i][5];

                let newRow = $("<tr></tr>");

                let idCell = $("<td></td>").text(id);
                idCell.addClass("text-center text-secondary");
                newRow.append(idCell);

                let authorCell = $("<td></td>").text(author);
                authorCell.addClass("text-center text-secondary");
                newRow.append(authorCell);

                let titleCell = $("<td></td>").text(title);
                titleCell.addClass("text-center text-secondary");
                newRow.append(titleCell);

                let publisherCell = $("<td></td>").text(publisher);
                publisherCell.addClass("text-center text-secondary");
                newRow.append(publisherCell);

                let yearCell = $("<td></td>").text(year);
                yearCell.addClass("text-center text-secondary");
                newRow.append(yearCell);

                let pagesCell = $("<td></td>").text(pages);
                pagesCell.addClass("text-center text-secondary");
                newRow.append(pagesCell);

                let editButton = $("<button></button>").text("Edit");
                editButton.addClass("btn text-primary d-flex-row w-100");

                editButton.on("click", function () {
                    editRow(newRow);
                });
                newRow.append(editButton);

                let deleteButton = $("<button></button>").text("Delete");
                deleteButton.addClass("btn text-danger d-flex-row w-100");
                deleteButton.on("click", function () {
                    newRow.remove();
                    ajax_removeBook(id);
                });

                newRow.append(deleteButton);

                bookTable.append(newRow);
            }
        },
        error: function(xhr, status, error) {
            console.error("Error retrieving data: " + error);
        }
    });

    /*var ajax = new XMLHttpRequest();
    ajax.open("GET", "ajax/getBooks.php", true);
    ajax.setRequestHeader("Content-type", "application/json");
    ajax.onreadystatechange = function() {
        if (this.readyState == 4) {
            if ( (this.status >= 200 && this.status < 300) || (this.status == 304) ) {
                var data = JSON.parse(this.responseText);
                
                for(var i = 0; i < data.length; i++) {
                    var id = data[i][0];
                    var title = data[i][1];
                    var author = data[i][2];
                    var publisher = data[i][3];
                    var year = data[i][4];
                    var pages = data[i][5];

                    let newRow = $("<tr></tr>");

                    let idCell = $("<td></td>").text(id);
                    idCell.addClass("text-center text-secondary");
                    newRow.append(idCell);

                    let authorCell = $("<td></td>").text(author);
                    authorCell.addClass("text-center text-secondary");
                    newRow.append(authorCell);

                    let titleCell = $("<td></td>").text(title);
                    titleCell.addClass("text-center text-secondary");
                    newRow.append(titleCell);

                    let publisherCell = $("<td></td>").text(publisher);
                    publisherCell.addClass("text-center text-secondary");
                    newRow.append(publisherCell);

                    let yearCell = $("<td></td>").text(year);
                    yearCell.addClass("text-center text-secondary");
                    newRow.append(yearCell);

                    let pagesCell = $("<td></td>").text(pages);
                    pagesCell.addClass("text-center text-secondary");
                    newRow.append(pagesCell);

                    let editButton = $("<button></button>").text("Edit");
                    editButton.addClass("btn text-primary d-flex-row w-100");

                    editButton.on("click", function () {
                        editRow(newRow);
                    });
                    newRow.append(editButton);

                    let deleteButton = $("<button></button>").text("Delete");
                    deleteButton.addClass("btn text-danger d-flex-row w-100");
                    deleteButton.on("click", function () {
                        newRow.remove();
                        ajax_removeBook(id);
                    });

                    newRow.append(deleteButton);

                    bookTable.append(newRow);
                }
            }
        }
    };
    ajax.send();*/
}

form.submit(function (event) {
    event.preventDefault();
    addBook();
    form.trigger("reset");
});

function addBook() {
    ajax_addBook();
    updateBooks();

    /*let newRow = $("<tr></tr>");

    let authorCell = $("<td></td>").text(author);
    authorCell.addClass("text-center text-secondary");
    newRow.append(authorCell);

    let titleCell = $("<td></td>").text(title);
    titleCell.addClass("text-center text-secondary");
    newRow.append(titleCell);

    let publisherCell = $("<td></td>").text(publisher);
    publisherCell.addClass("text-center text-secondary");
    newRow.append(publisherCell);

    let yearCell = $("<td></td>").text(year);
    yearCell.addClass("text-center text-secondary");
    newRow.append(yearCell);

    let pagesCell = $("<td></td>").text(pages);
    pagesCell.addClass("text-center text-secondary");
    newRow.append(pagesCell);

    let editButton = $("<button></button>").text("Edit");
    editButton.addClass("btn text-primary d-flex-row w-100");

    editButton.on("click", function () {
        editRow(newRow);
    });
    newRow.append(editButton);

    let deleteButton = $("<button></button>").text("Delete");
    deleteButton.addClass("btn text-danger d-flex-row w-100");
    deleteButton.on("click", function () {
        newRow.remove();
    });

    newRow.append(deleteButton);

    bookTable.append(newRow);*/

}

function editRow(row) {    

    const idCell = row.find("td:eq(0)");
    const authorCell = row.find("td:eq(1)");
    const titleCell = row.find("td:eq(2)");
    const publisherCell = row.find("td:eq(3)");
    const yearCell = row.find("td:eq(4)");
    const pagesCell = row.find("td:eq(5)");

    var id = idCell.text();
    var titleText = titleCell.text();
    var authorText = authorCell.text();
    var publisherText = publisherCell.text();
    var yearText = yearCell.text();
    var pagesText = pagesCell.text();

    titleCell.text("");
    authorCell.text("");
    publisherCell.text("");
    yearCell.text("");
    pagesCell.text("");

    const titleInput = $('<input type="text"></input>');
    titleInput.val(titleText);
    titleCell.append(titleInput);

    const authorInput = $('<input type="text"></input>');
    authorInput.val(authorText);
    authorCell.append(authorInput);

    const publisherInput = $('<input type="text"></input>');
    publisherInput.val(publisherText);
    publisherCell.append(publisherInput);

    const yearInput = $('<input type="number"></input>');
    yearInput.val(yearText);
    yearCell.append(yearInput);

    const pagesInput = $('<input type="number"></input>');
    pagesInput.val(pagesText);
    pagesCell.append(pagesInput);

    const saveButton = $('<button></button>').text("Save");
    saveButton.addClass("btn text-success d-flex-row w-100");
    saveButton.on("click", function () {
        titleCell.text(titleInput.val());
        authorCell.text(authorInput.val());
        publisherCell.text(publisherInput.val());
        yearCell.text(yearInput.val());
        pagesCell.text(pagesInput.val());
        saveButton.remove();
        cancelButton.remove();

        ajax_editBook(id, titleInput.val(), authorInput.val(), publisherInput.val(), yearInput.val(), pagesInput.val());
    });
    row.append(saveButton);

    const cancelButton = $('<button></button>').text("Cancel");
    cancelButton.addClass("btn text-secondary d-flex-row w-100");
    cancelButton.on("click", function () {
        titleCell.text(titleText);
        authorCell.text(authorText);
        publisherCell.text(publisherText);
        yearCell.text(yearText);
        pagesCell.text(pagesText);
        saveButton.remove();
        cancelButton.remove();
    });

    row.append(cancelButton);
}

function ajax_addBook() {
    
    const title = $("#title").val();
    const author = $("#author").val();
    const publisher = $("#publisher").val();
    const year = $("#year").val();
    const pages = $("#pages").val();
    
    $.ajax({
        type: "POST",
        url: "ajax/addBook.php",
        data: {
            title: title, 
            author: author,
            publisher: publisher,
            year: year,
            pages: pages
        },
        error: function(xhr, status, error) {
            console.error("Error updating row: " + error);
        }
    });

    /*var ajax = new XMLHttpRequest();

    ajax.open("POST", "ajax/addBook.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    var data = "title=" + encodeURIComponent(title) + "&author=" + encodeURIComponent(author) + "&publisher=" + encodeURIComponent(publisher) + "&year=" + encodeURIComponent(year) + "&pages=" + encodeURIComponent(pages);
    ajax.send(data);*/
    
}

function ajax_editBook(id, title, author, publisher, year, pages) {
    
    $.ajax({
        type: "POST",
        url: "ajax/editBook.php",
        data: {
            id: id,
            title: title, 
            author: author,
            publisher: publisher,
            year: year,
            pages: pages
        },
        error: function(xhr, status, error) {
            console.error("Error updating row(" + id +"): " + error);
        }
    });

    /*var ajax = new XMLHttpRequest();

    ajax.open("POST", "ajax/editBook.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    var data = "title=" + encodeURIComponent(title) + "&author=" + encodeURIComponent(author) + "&publisher=" + encodeURIComponent(publisher) + "&year=" + encodeURIComponent(year) + "&pages=" + encodeURIComponent(pages);
    ajax.send(data);*/

}

function ajax_removeBook(id) {
    $.ajax({
        type: "POST",
        url: "ajax/removeBook.php",
        data: {
            id: id
        },
        error: function(xhr, status, error) {
            console.error("Error updating row(" + id +"): " + error);
        }
    });
    /*var ajax = new XMLHttpRequest();

    ajax.open("POST", "ajax/removeBook.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    var data = "id=" + encodeURIComponent(id);
    ajax.send(data);*/
}