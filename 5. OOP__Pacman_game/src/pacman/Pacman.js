class Pacman {

    constructor(r,c, grid) {
        this.r = r
        this.c = c
        this.grid = grid
        this.grid[r][c] = this
        this.status = "alive"
    }

    moveDown() {
        if (this.r < 9) {
            this.grid[this.r++][this.c] = new Empty()
            this.collisionUpdate()
        }
    }

    moveUp() {
        if (this.r > 0) {
            this.grid[this.r--][this.c] = new Empty()
            this.collisionUpdate()
        }
    }

    moveRight() {
        if (this.c < 9) {
            this.grid[this.r][this.c++] = new Empty()
            this.collisionUpdate()
        }
    }

    moveLeft() {
        if (this.c > 0) {
            this.grid[this.r][this.c--] = new Empty()
            this.collisionUpdate()            
        }   
    }

    collisionUpdate() {

        if(this.grid[this.r][this.c] instanceof Bomb) {
            this.status = "exploding"
        }
        if(this.grid[this.r][this.c] instanceof Coin) {
            alert("YEEE!")
        }
        this.grid[this.r][this.c] = this
    }

    render(rootElement) {
        this.rootElement = rootElement
        let div = $( '<div>', `pacman ${this.status}` )       
        this.rootElement.appendChild(div)           
    }



}
