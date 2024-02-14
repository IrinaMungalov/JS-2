let languages = []

const getProgrammingLanguagesList = () => {
    let xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://en.wikipedia.org/wiki/List_of_programming_languages')
    xhr.onload = () => {
        let response = xhr.responseText
        let parser = new DOMParser()
        let doc = parser.parseFromString(response, "text/html")

        let anchors = doc.querySelectorAll('div.div-col ul li a')
        languages = [...anchors].map( a => {
            return {
                name: a.innerHTML,
                url: a.href.replace("http://127.0.0.1:5500", "https://en.wikipedia.org") // find a better way
            }
        })
        
    }
    xhr.send()
}

const filterProgrammingLanguages = (e) => {
    let input = e.target
    let kw = input.value
    let results = document.getElementById('resultsDiv')
    results.innerHTML = ''

    if (kw.length >= 2) {
        let dropdownUl = document.createElement('ul')
        dropdownUl.className = "dropdown-menu show"
        
        languages
            .filter(l => 
                l.name.toLowerCase().startsWith( kw.toLowerCase() ) )
            .forEach(l => {

                /* dropdownUl.appendChild(document.createElement('li'))
                dropdownUl.lastElementChild.appendChild(document.createElement('a'))
                dropdownUl.lastElementChild.firstElementChild.innerHTML = l.name
                dropdownUl.lastElementChild.firstElementChild.href = l.url
                dropdownUl.lastElementChild.firstElementChild.className = "dropdown-item" */


                let dropdownItem = document.createElement('li')
                let dropdownLink = document.createElement('a')

                dropdownLink.innerHTML = l.name
                dropdownLink.href = l.url
                dropdownLink.className = "dropdown-item"               

                // add event listener on result links, capture the event
                dropdownLink.addEventListener('click', (event) => {
                    event.preventDefault() //  don't let the default effect happen
                    dropdownUl.classList.remove('show') // hide the dropdown list after click
                    clickLink(l.url, results) 
                })

                dropdownItem.appendChild(dropdownLink)
                dropdownUl.appendChild(dropdownItem)
            })

            results.appendChild(dropdownUl)
    }
}

const clickLink = (url, results) => {
// send another AJAX request on the link's address
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
//  load / parse the doc
    xhr.onload = () => {
        let response = xhr.responseText
        let parser = new DOMParser()
        let doc = parser.parseFromString(response, "text/html")               
//  copy the first few paragraphs
        let paragraphs = doc.querySelectorAll('p')
        let info = Array.from(paragraphs)
            .slice(0, 3)
            .map(p => p.textContent)
            .join('<br>')                        
//  show it in a div below
        let div = document.createElement('div')
        div.innerHTML = info
        results.innerHTML = ''
        results.appendChild(div)
    }

    xhr.send()

}
              
       
    
    



// HW1:
//  add event listener on result links, capture the event
//  don't let the default effect happen
//  send another AJAX request on the link's address
//  load / parse the doc
//  copy the first few paragraphs
//  show it in a div below