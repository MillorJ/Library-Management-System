const bookTable = document.getElementById("bookTable");
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  addBook();
  form.reset();
});

function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const publisher = document.getElementById("publisher").value;
  const year = document.getElementById("year").value;
  const pages = document.getElementById("pages").value;

  const newRow = document.createElement("tr");

  const titleCell = document.createElement("td");
  titleCell.innerHTML = title;
  titleCell.classList.add("text-center", "text-secondary");
  newRow.appendChild(titleCell);

  const authorCell = document.createElement("td");
  authorCell.innerHTML = author;
  authorCell.classList.add("text-center", "text-secondary");
  newRow.appendChild(authorCell);

  const publisherCell = document.createElement("td");
  publisherCell.innerHTML = publisher;
  publisherCell.classList.add("text-center", "text-secondary");
  newRow.appendChild(publisherCell);

  const yearCell = document.createElement("td");
  yearCell.innerHTML = year;
  yearCell.classList.add("text-center", "text-secondary");
  newRow.appendChild(yearCell);

  const pagesCell = document.createElement("td");
  pagesCell.innerHTML = pages;
  pagesCell.classList.add("text-center", "text-secondary");
  newRow.appendChild(pagesCell);

  const editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.className = "btn text-primary d-flex-row w-100";

  editButton.onclick = function () {
    editRow(newRow);
  };
  newRow.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.className = "btn text-danger d-flex-row w-100";
  deleteButton.onclick = function () {
    bookTable.deleteRow(newRow.rowIndex);
  };

  newRow.appendChild(deleteButton);

  bookTable.appendChild(newRow);
}

function editRow(row) {
  const titleCell = row.cells[0];
  const authorCell = row.cells[1];
  const publisherCell = row.cells[2];
  const yearCell = row.cells[3];
  const pagesCell = row.cells[4];

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.value = titleCell.innerHTML;
  titleCell.innerHTML = "";
  titleCell.appendChild(titleInput);

  const authorInput = document.createElement("input");
  authorInput.type = "text";
  authorInput.value = authorCell.innerHTML;
  authorCell.innerHTML = "";
  authorCell.appendChild(authorInput);

  const publisherInput = document.createElement("input");
  publisherInput.type = "text";
  publisherInput.value = publisherCell.innerHTML;
  publisherCell.innerHTML = "";
  publisherCell.appendChild(publisherInput);

  const yearInput = document.createElement("input");
  yearInput.type = "number";
  yearInput.value = yearCell.innerHTML;
  yearCell.innerHTML = "";
  yearCell.appendChild(yearInput);

  const pagesInput = document.createElement("input");
  pagesInput.type = "number";
  pagesInput.value = pagesCell.innerHTML;
  pagesCell.innerHTML = "";
  pagesCell.appendChild(pagesInput);

  const saveButton = document.createElement("button");
  saveButton.innerHTML = "Save";
  saveButton.className = "btn text-success d-flex-row w-100";
  saveButton.onclick = function () {
    titleCell.innerHTML = titleInput.value;
    authorCell.innerHTML = authorInput.value;
    publisherCell.innerHTML = publisherInput.value;
    yearCell.innerHTML = yearInput.value;
    pagesCell.innerHTML = pagesInput.value;
    saveButton.remove();
    cancelButton.remove();
  };
  row.appendChild(saveButton);

  const cancelButton = document.createElement("button");
  cancelButton.innerHTML = "Cancel";
  cancelButton.className = "btn text-secondary d-flex-row w-100";
  cancelButton.onclick = function () {
    titleCell.innerHTML = titleInput.defaultValue;
    authorCell.innerHTML = authorInput.defaultValue;
    publisherCell.innerHTML = publisherInput.defaultValue;
    yearCell.innerHTML = yearInput.defaultValue;
    pagesCell.innerHTML = pagesInput.defaultValue;
    saveButton.remove();
    cancelButton.remove();
  };
  row.appendChild(cancelButton);
}
