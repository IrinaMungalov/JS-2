class MenuItem {
    constructor (url, title, icon) {
        this.title = title

        if( url.match(/^[a-z#-\/:0-9]+$/) !== null ) {
            this.url = url
        } else{
            console.error("ERROR: wrong url format")
        }

        if (icon && icon.match(/^bi-[a-z-]+$/) !== null) {
            this.icon = icon
        } else if (icon) {
            console.error("ERROR: wrong icon Bootstrap format")
        } else {
            this.icon = null
        }
    }

    render () {
        let result = `<a class="nav-link" href="${this.url}">${this.title}`

        if (this.icon) {
            result += ` <span class="bi ${this.icon}"></span>`
        }

        result += `</a>`

        return result        
                            // return `
                            //  <a href="${this.url}">${this.title}</a>
                            // `
    }
}

// HoC
class Menu {
    constructor (items) {
        this.items = items
    }

    render () {
                    // let html = `<nav>`
                    // for(let i=0; i<this.items.length; i++) {
                        // html += this.items[i].render()
                    // }
                    // html += `</nav>`
        
        return `<nav class="nav flex-column">` + this.items.map( item => item.render() ).join("") + `</nav>`
    }
}











// for() -> array -> Array.map()



// 0  - new MenuItem("BRAND", "/") ---> map ---> <a href="/">BRAND</a>