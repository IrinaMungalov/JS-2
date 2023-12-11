// producer's code

class Figure {
    constructor (title, url) {
        // hide the props

        // HW1: encapsulate title
        // HW2: validate the title so:
        //         - not empty
        //         - not contain dangerous scripts: </> - invalid symbols | String

        this.__title = title        
        this.__url   = url
    }

    render (selector) {
        let parent = document.querySelector(selector)
        parent.innerHTML = `
         <figure>
            <img src="${this.__url}"/>
            <figcaption>
                ${this.__title}
            </figcaption>
         </figure>
        `
    }

    get url () {
        return this.__url
    }

    set url (value) {
        if(value === undefined || value === "") {
            console.error("ERROR: figure cannot have empty URL")
        }else {
            this.__url = value
        }
        
    }

    // HW:
    get title () {
        return this.__title
    }

    set title (string) {
        if(string === "" || string === "<" || string === "/" || string === ">") {
            console.error("ERROR: figure cannot have empty TITLE")
        }else {
            this.__title = string
        }
        
    }
}

