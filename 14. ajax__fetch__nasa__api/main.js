const KEY = "rbjhr2IunSqVP9oPcanvaBS8ldJeMd1dGbMQ5oSj"

function loadMarsRoverPhotosData() {
    let dateInput = document.querySelector('#setDate')
    let foundDate = dateInput.value
    const ENDPOINT_MARS_ROVER_PHOTOS = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=3&api_key=${KEY}&earth_date=${foundDate}`

   // let xhr = new XMLHttpRequest()

   // xhr.open("GET", ENDPOINT_MARS_ROVER_PHOTOS)

   // xhr.onload = parseMarsRoverPhotoData

   // xhr.send()


   // uses JS Promise
   fetch(ENDPOINT_MARS_ROVER_PHOTOS)
        .then(response => response.json())
        .then(parseMarsRoverPhotoData)
}

function parseMarsRoverPhotoData( data ) {
    // let xhr = e.target
    // let data = JSON.parse(xhr.responseText)
    createGliderDOM(data)
}

function createGliderDOM( data ) {
    let slidesContainer = document.querySelector('#gallery .glider')
    // photos[0].img_src
    data.photos.forEach( photo => { 
        console.log(photo) 
        let div = document.createElement('div')
        div.appendChild( document.createElement('img') )
        div.firstElementChild.src = photo.img_src
        div.appendChild( document.createElement('h2') )
        div.lastElementChild.innerText = photo.earth_date
        div.appendChild( document.createElement('h3') )
        div.lastElementChild.innerText = photo.camera.full_name
        slidesContainer.appendChild(div)
    })

    newGlider()
    console.log(data)
}

// window.addEventListener('load', function(){
function newGlider() {
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 3,
            slidesToScroll: 3,
            draggable: true,
            dots: '.dots',
            arrows: {
              prev: '.glider-prev',
              next: '.glider-next'
            }            
    })
    
}
//  })