class Gamemap {

    constructor() {

        
        let e = new Empty() 

        this.grid = [
            [e, e, e, e, e, e, e, e, e, e,],
            [e, e, e, e, e, e, e, e, e, e,],
            [e, e, e, e, e, e, e, e, e, e,],
            [e, e, e, e, e, e, e, e, e, e,],
            [e, e, e, e, e, e, e, e, e, e,],
            [e, e, e, e, e, e, e, e, e, e,],
            [e, e, e, e, e, e, e, e, e, e,],
            [e, e, e, e, e, e, e, e, e, e,],
            [e, e, e, e, e, e, e, e, e, e,],
            [e, e, e, e, e, e, e, e, e, e,],
        ]
        
    }

    render(rootElement) {
        this.rootElement = rootElement
        
        let divParent = $('<div>', 'map')
        for (let ri = 0; ri < 10; ri++) { // rowIndex
            for (let ci = 0; ci < 10; ci++) {  // columnIndex
                 this.grid[ri][ci].render(divParent)                
            }
        }
        this.rootElement.innerHTML =''
        this.rootElement.appendChild(divParent)
    }

    save() {
        let cache = []
        let json = JSON.stringify(this, (key, value) => {
            if (typeof value === 'object' && value !== null) {
                if( value instanceof Bomb ) {
                    value.type = "Bomb"
                }
                // Dublicate reference found, discard key
                if (cache.includes(value))
                return
                // Store value in our collection                
                cache.push(value)
            }
            return value
        })
        cache = null // Enable garbage collection
        localStorage.setItem( "game", json)    
    }

}


