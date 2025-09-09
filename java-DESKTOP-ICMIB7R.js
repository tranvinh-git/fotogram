const imagesContainer = document.getElementById("imgDiv");
const dialog = document.getElementById("dialogContent");

let images = [
    "autum.jpg",
    "lake1.jpg",
    "lake2.jpg",
    "lake3.jpg",
    "mountains1.jpg",
    "mountains2.jpg",
    "mountains4.jpg",
    "mountains5.jpg",
    "mountains6.jpg",
    "mountains7.jpg",
    "mountains8.jpg",
    "mountains9.jpg",
    "mountains10.jpg",
    "mountains11.jpg",
    "fog.jpg",
    "road-mountain.jpg"
];

function displayImages() {
  imagesContainer.innerHTML = ""; 
  images.forEach((image, index) => {
    imagesContainer.innerHTML += getNoteTemplate(image, index);
    createEventListenersForImages();
  }); 
}

function getNoteTemplate(image, index) {
  return `
      <img src="./img/${image}" class="images" 
      id="${index}" tabindex="0" alt="${image.slice(0, -4)}" 
     role="button"/>`;
}
function createEventListenersForImages() {
    const imgElements = imagesContainer.querySelectorAll("img");
  console.log("imgElements:", imgElements);

  imgElements.forEach((img) => {
    img.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault(); 
        openDialog(img);
      }
    });
    img.addEventListener("click", () => {
      openDialog(img);
    });
  });
}

function openDialog(item) {
  createDialog(item);
  dialog.showModal();
}

let createDialog = (item) => {
  dialog.innerHTML = "";
  dialog.innerHTML += getDialogTemplate(item);
}     

function getDialogTemplate(item) {
  return `
  <div class="inner-dialog">
      ${item.outerHTML}
      <div class="next-and-prev-buttons">
        <button class="prev-image" id="prev" onclick="prevImage(${item.id})" aria-label="vorheriges Bild">
          <img src="./icon/pfeil_left.png" aria-labelledby="next" class="arrow-next" id="nextArrow" 
            alt="Next Image">
        </button>
        <button class="close" onclick="closeDialog()" aria-label="Ansicht Schließen">&times;</button>
        <button class="next-image" id="next" onclick="nextImage(${item.id})" aria-label="nächstes Bild">
          <img src="./icon/pfeil_right.png" aria-labelledby="next" class="arrow-prev" id="nextArrow" 
            alt="Next Image">
        </button>
      </div>
  </div>
  `;
}

// Check if the click is outside the dialog content
function closeDialogOnClickOutside(event) {
  if (event.target === dialog) {
    closeDialog();
  }
}

// Check if the dialog is open before trying to close it
function closeDialog() {
  if (dialog.open) {
    dialog.close();
    dialog.innerHTML = "";
  }
}

// showing next and previous image onclick
function nextImage(id) {
  let nextId = id + 1;
  if (id == images.length - 1) {
    nextId = 0;
  }
  const nextImage = document.getElementById(nextId);
  createDialog(nextImage);
}

function prevImage(id) {
  let prevId = id - 1;
  if (id == 0) {
    prevId = images.length - 1;
  }
  const prevImage = document.getElementById(prevId);
  createDialog(prevImage);
}
