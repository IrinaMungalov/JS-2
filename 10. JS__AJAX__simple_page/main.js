

function loadAbout() {
    
    // 1) create comn object
    let xhr = new XMLHttpRequest()

    // 2) configure connection
    xhr.open( "GET", "partials/about.html" )

    // 4) get the response
    xhr.onload = function() {
        document.querySelector( '.dynamic').innerHTML = xhr.responseText
    }

    // 3) send the request
    xhr.send()     

} 

/// HW1: optimize loadAbout() -> loadFragment(???)

function loadFragment(fragmentPath) {

    // 1) create comn object
    let xhr = new XMLHttpRequest()

    // 2) configure connection
    xhr.open( "GET", fragmentPath )

    // 4) get the response
    xhr.onload = function() {        
            document.querySelector('.dynamic').innerHTML = xhr.responseText
        }     

    // 3) send the request
    xhr.send()

}