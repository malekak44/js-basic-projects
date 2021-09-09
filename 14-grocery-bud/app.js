const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.querySelector("#grocery");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const submitBtn = document.querySelector(".submit-btn");
const clearBtn = document.querySelector(".clear-btn");

let editElement;
let editID = "";
let editFlag = false;

// submit the form
form.addEventListener("submit", addItem);
// set the list
window.addEventListener("DOMContentLoaded", setupItems);
//clear the list
clearBtn.addEventListener("click", clearItems);

function addItem(e) {
    e.preventDefault();

    const value = grocery.value;
    const id = new Date().getTime().toString();

    if (value !== "" && !editFlag) {
        const element = document.createElement("article");
        let attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.classList.add("grocery-item");
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>`;

        const editBtn = element.querySelector(".edit-btn");
        editBtn.addEventListener("click", editItem);
        const deleteBtn = element.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", deleteItem);

        list.appendChild(element);

        container.classList.add("show-container");

        displayAlert("Item added to list", "success");

        addToLocalStorage(id, value);

        setBackToDefault();

    } else if (value !== "" && editFlag) {
        editElement.innerHTML = value;

        displayAlert("value changed", "success");

        editLocalStorage(editID, value);

        setBackToDefault();

    } else {
        displayAlert("please enter a value", "danger");
    }
}

function displayAlert(text, action) {
    alert.textContent = `${text}`;
    alert.classList.add(`alert-${action}`);

    setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;

    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";
}

function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;

    list.removeChild(element);

    if (list.children.length === 0) {
        container.classList.remove("show-container");
    }

    displayAlert("item removed", "danger");

    removeFromLocalStorage(id);

    setBackToDefault();
}

function clearItems() {
    const items = document.querySelectorAll(".grocery-item");

    if (items.length > 0) {
        items.forEach(item => {
            list.removeChild(item);
        });
    }

    container.classList.remove("show-container");
    displayAlert("empty list", "danger");
    setBackToDefault();
    localStorage.removeItem("list");
}

function setBackToDefault() {
    editID = "";
    grocery.value = "";
    editFlag = false;
    submitBtn.textContent = "submit";
}


// localStorage Section

function addToLocalStorage(id, value) {
    const grocery = { id, value };
    const items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
    return localStorage.getItem("list")
        ? JSON.parse(localStorage.getItem("list"))
        : [];
}

function editLocalStorage(id, value) {
    let items = getLocalStorage();

    items = items.map(item => {
        if (item.id === id) { item.value = value }
        return item;
    });

    localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter(item => {
        if (item.id !== id) {
            return item;
        }
    });

    localStorage.setItem("list", JSON.stringify(items));
}

function setupItems() {
    let items = getLocalStorage();

    if (items.length > 0) {
        items.forEach(item => {
            createListItem(item.id, item.value);
        });
        container.classList.add("show-container");
    }
}

function createListItem(id, value) {
    const element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("grocery-item");
    element.innerHTML = `<p class="title">${value}</p>
      <div class="btn-container">
        <button type="button" class="edit-btn">
          <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
          <i class="fas fa-trash"></i>
        </button>
      </div>`;

    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);

    list.appendChild(element);
}