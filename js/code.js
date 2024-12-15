let itemsArray = [];
const appConfig = {
    maxItems: 7
};
function addItem() {
    const inputElement = document.getElementById("inputName");
    const name = inputElement.value.trim();
    if (!name) {
        alert("Por favor, ingresa un nombre.");
        inputElement.focus();
        return;
    }
    if (itemsArray.length >= appConfig.maxItems) {
        alert("Has alcanzado el número máximo de elementos.");
        return;
    }
    itemsArray.push(name);
    alert(`Nombre agregado: ${name}`);
    inputElement.value = "";
    inputElement.focus();
    updateList();
}
function filterItems() {
    const filterInput = document.getElementById("filterInput");
    const filterKeyword = filterInput.value.trim();
    if (!filterKeyword) {
        alert("Por favor, ingresa una palabra clave para filtrar.");
        filterInput.focus();
        return;
    }
    const filteredArray = itemsArray.filter(item => item.includes(filterKeyword));
    if (filteredArray.length === 0) {
        alert(`No se encontraron elementos que contengan '${filterKeyword}'.`);
    } 
    else {
        alert(`Elementos filtrados que contienen '${filterKeyword}':\n${filteredArray.join(", ")}`);
    }
    highlightFilteredItems(filteredArray);
}
function highlightFilteredItems(filteredArray) {
    const listItems = document.querySelectorAll("#list li");
    listItems.forEach(item => {
        if (filteredArray.includes(item.textContent)) {
            item.classList.add("highlight");
        } else {
            item.classList.remove("highlight");
        }
    });
}
function updateList() {
    const listElement = document.getElementById("list");
    listElement.innerHTML = "";
    itemsArray.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        listElement.appendChild(listItem);
    });
}
const addButton = document.getElementById("addButton");
const filterButton = document.getElementById("filterButton");
addButton.addEventListener("click", addItem);
filterButton.addEventListener("click", filterItems);