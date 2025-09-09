let imageRef = document.getElementById('main_images');

let myImages = [
    "./img/autum.jpg",
    "./img/lake1.jpg",
    "./img/lake2.jpg",
    "./img/lake3.jpg",
    "./img/mountains1.jpg",
    "./img/mountains2.jpg",
    "./img/mountains4.jpg",
    "./img/mountains5.jpg",
    "./img/mountains6.jpg",
    "./img/mountains7.jpg",
    "./img/mountains8.jpg",
    "./img/mountains9.jpg",
    "./img/mountains10.jpg",
    "./img/mountains11.jpg",
    "./img/fog.jpg",
    "./img/road-mountain.jpg"
];
let IdImages = [
    "Image_0",
    "Image_1",
    "Image_2",
    "Image_3",
    "Image_4",
    "Image_5",
    "Image_6",
    "Image_7",
    "Image_8",
    "Image_9",
    "Image_10",
    "Image_11",
    "Image_12",
    "Image_13",
    "Image_14",
    "Image_15"
]

let myAltTexts = [
    "autum",
    "lake1",
    "lake2",
    "lake3",
    "mountains1",
    "mountains2",
    "mountains4",
    "mountains5",
    "mountains6",
    "mountains7",
    "mountains8",
    "mountains9",
    "mountains10",
    "mountains11",
    "fog.jpg",
    "road-mountain"
];

function renderImage() {
    imageRef.innerHTML = "";
    for (let i = 0; i < myImages.length; i++) {
        imageRef.innerHTML += getImages(i);
    }

}

function getImages(i) {
    return `<img    class="images"  
                    tabindex="0"  
                    aria-haspopup="dialog" aria-controls="overlay" 
                    onkeydown="if(event.key === 'Enter') 
                    openDialog(${i})" 
                    onclick="openDialog(${i})" 
                    src="${myImages[i]}" 
                    alt="${myAltTexts[i]}">`;
}
//Open dialog

function openDialog(i) {
    let dialogRef = document.getElementById('overlay');
    dialogRef.innerHTML = `
   <section class="dialog_content" onClick="logDownWBubblingPrevention(event)">
       <img class="dialogImage" id="dialogImage" src="${myImages[i]}" alt="${myAltTexts[i]}">
   </section>
   <section class="dialog_footer" >
       <button aria-label="Prev_Dialog" id="prevButton" onclick="openDialog(${(i - 1 + myImages.length) % myImages.length}); logDownWBubblingPrevention(event)"
        tabindex="0"><img class="prevButton" tabindex="0" src="./icon/arrow-left-solid-full.svg"></button>
        <img aria-label="Close_Dialog" class="close_x" tabindex="0" onclick="closeDialog(${i})" src="icon/xmark-solid-full.svg" alt="Close">
        <button aria-label="next_Dialog" id="nextButton" onclick="openDialog(${(i + 1) % myImages.length}); logDownWBubblingPrevention(event)"
        tabindex="0"><img class="nextButton" tabindex="0" src="./icon/arrow-right-solid-full.svg"></button>
   </section>`;
    dialogRef.showModal();
}

//Close dialog 

function closeDialog() {
    let dialogRef = document.getElementById('overlay');
    dialogRef.close();
}

/*tabindex focus on h1 */

function setFocusOnHeadline(isSpaceKey) {
    const elemRef = document.getElementById('headline');
    if (isSpaceKey) {
        elemRef.focus();
    }
}

function logUp() {
    const body = document.getElementById('bodyMain')
    body.addEventListener("click", closeDialog())  
}

function logDownWBubblingPrevention(event) {
    const body = document.getElementById('overlay')
    event.stopPropagation() 
}

