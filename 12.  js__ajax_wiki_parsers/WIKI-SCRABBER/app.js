const getProgrammingLanguagesList = () => {
    let xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://en.wikipedia.org/wiki/List_of_programming_languages')
    xhr.onload = () => {
        let response = xhr.responseText
        let parser = new DOMParser()
        let doc = parser.parseFromString(response, "text/html")

        let anchors = doc.querySelectorAll('div.div-col ul li a')
        anchors.forEach( a => {
            console.log(a.innerHTML)
        })
        console.log(anchors)
    }
    xhr.send()
}