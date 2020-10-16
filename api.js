const button = document.getElementById('plaque-immat')
const immat = document.getElementById('plaque-immatriculation');

const maxSize = 9;
immat.maxLength = maxSize;
const token = "demoxM";
const format = "json";
let immatriculation = "";
let url = ""

const getImmat = _ => {
    immatriculation = immat.value
    // console.log(immatriculation + ' hi')
    return immatriculation
}
const inputValue = (e) => {
    immat.maxlength = maxSize;
    if (immat.value.length === 2 && e.keyCode !== 8) {
        immat.value = `${immat.value}-`;
    } else if (immat.value.length === 6 && e.keyCode !== 8) {
        immat.value = `${immat.value}-`;
    } else if (immat.value.length > maxSize) {
        immat.value = immat.value.slice(0, maxSize)
    }
    getImmat()
    console.log(immatriculation)
}

const requete = (e) => {
    e.preventDefault()
    url = `http://api.apiplaqueimmatriculation.com/carte-grise?immatriculation=${immatriculation}&token=${token}&format=${format}`

    fetch(url)
        .then(data => data.json())
        .then(res => console.log(res))

}



immat.addEventListener("keydown", inputValue)
button.addEventListener('click', requete)

// const settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "http://api.apiplaqueimmatriculation.com/carte-grise?immatriculation="+immatriculation+"&token="+token+"&format="+format,
//     "method": "POST",
//     "headers": {
//         "Accept": "application/json"
//     }
// }