let bodyPage = document.querySelector('#bodyPage')
let numberItem = document.querySelector('#numberItem')
let click = document.querySelector('#click')
console.log('hi');





click.onclick = () => { 
  getImages(numberItem.value, onDataReceived)
  
}

let onDataReceived = (data) => {
  data.forEach(el => {
    const img = document.createElement('img');
    img.src  = el.thumbnail
    document.querySelector('#bodyPage').appendChild(img)
    console.log(numberItem.value);
  });
} 