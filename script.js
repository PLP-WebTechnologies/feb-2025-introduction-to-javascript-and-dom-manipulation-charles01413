// Select elements
const dynamicText = document.getElementById("dynamicText");
const elementContainer = document.getElementById("elementContainer");

document.getElementById("changeTextButton").addEventListener("click", () => {
  // Change text content dynamically
  dynamicText.textContent = "The text has been changed!";
});

document.getElementById("changeStyleButton").addEventListener("click", () => {
  // Modify CSS styles dynamically
  dynamicText.classList.toggle("highlight");
});

document.getElementById("addElementButton").addEventListener("click", () => {
  // Add a new element
  const newElement = document.createElement("p");
  newElement.textContent = "This is a new paragraph.";
  elementContainer.appendChild(newElement);
});

document.getElementById("removeElementButton").addEventListener("click", () => {
  // Remove the last element
  if (elementContainer.lastChild) {
    elementContainer.removeChild(elementContainer.lastChild);
  }
});
