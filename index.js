const sliderElement = document.querySelector('.slider');
const arrowLeftElement = document.querySelector('.arrow.left');
const arrowRightElement = document.querySelector('.arrow.right');

let sliderIndex = 0;
const imagesArray = [
    "https://www.smurf.com/characters-smurfs/papa.png",
    "https://www.smurf.com/characters-smurfs/handy.png",
    "https://www.smurf.com/characters-smurfs/smurfette.png",
    "https://www.smurf.com/characters-smurfs/hefty.png",
    "https://www.smurf.com/characters-smurfs/brainy.png",
    "https://www.smurf.com/characters-smurfs/jokey.png",
    "https://www.smurf.com/characters-smurfs/farmer.png",
    "https://www.smurf.com/characters-smurfs/gargamel-min.png",
];
const numberOfSlides = imagesArray.length;
sliderElement.style.width = `${numberOfSlides*100}%`

imagesArray.forEach((element)=>{
    const imageContainerElement = document.createElement("div");
    const imageElement = document.createElement("img");
    sliderElement.appendChild(imageContainerElement);
    imageContainerElement.appendChild(imageElement);
    imageElement.setAttribute("src", element);
    imageElement.setAttribute("alt", `smurf ${sliderIndex}`);
});

arrowLeftElement.onclick = () => {
    if (sliderIndex > 0) {
        sliderIndex -= 1;
        sliderElement.style.transform = `translate(${-(100 / numberOfSlides) * sliderIndex}%)`;
    }
}
arrowRightElement.onclick = () => {
    if (sliderIndex < numberOfSlides-1) {
        sliderIndex += 1;
        sliderElement.style.transform = `translate(${-(100 / numberOfSlides) * sliderIndex}%)`;   
    }
}