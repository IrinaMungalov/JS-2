// DATA SCHEMA
class MenuItem {
    constructor (name, image, price) {
        this.name = name
        this.image = image
        this.price = price
    }
}

class Food extends MenuItem {    
}

class Drink extends MenuItem {    
}


// DATA
let data = {
    menu: {
        food: [
            new Food("Pizza", "images/pizza.jpg", 100),
            new Food("Salad", "images/salad.jpg", 50),
            new Food("Soup", "images/soup.jpeg",  25),
        ],
        drinks: [
            // HW1: do the same for drinks
            new Food("Black Tea", "", 50),
            new Food("Green Tea", "", 45),
            new Food("Water",     "", 15),
        ]
    }
}


// RENDER
const renderMenuItem = (menuItem, parentElement, handler) => {
        let label = document.createElement('label')
        let input = document.createElement('input')       
            input.setAttribute("type", "checkbox")
        let labelText = document.createTextNode(`${menuItem.name} ${menuItem.price}`)

        label.appendChild(input)
        label.appendChild(labelText)
        parentElement.appendChild(label)

        // bind event handling
        input.addEventListener('change', handler )
}

const renderItemSet = (title)=> {
    let fieldset = document.createElement('fieldset')
    let legend = document.createElement('legend')
    let labelText = document.createTextNode(title)

    legend.appendChild(labelText)
    fieldset.appendChild(legend)
    return fieldset

}


//                       parent element
//                          |        food & drinks data
//                          v         v
const renderMenuForm = (rootElement, menu) => {
    // 0. create the form
    let form = document.createElement('form') // Factory Pattern
    let foodSet = renderItemSet('Food')
    let drinkSet = renderItemSet('Drinks')

    menu.food.forEach( foodData => renderMenuItem(foodData, foodSet, toggleMenuItemHandler))
    menu.food.forEach( foodData => renderMenuItem(foodData, drinkSet, toggleMenuItemHandler))

    form.appendChild(foodSet)    
    form.appendChild(drinkSet)

    rootElement.appendChild(form)    
}

const renderMenuQuantity = (decHandler, incHandler) => {
    let div = document.createElement('div')
    let btnDec = document.createElement('button')
        btnDec.addEventListener('click', decHandler)
        btnDec.innerText = "-"
    let inputQ = document.createElement('input')
        inputQ.value = 1
    let btnInc = document.createElement('button')
        btnInc.addEventListener('click', incHandler)
        btnInc.innerText = "+"

    div.appendChild(btnDec)
    div.appendChild(inputQ)
    div.appendChild(btnInc)

    return div
}

// EVENTS
const toggleMenuItemHandler = ( event ) => {
    let toggledInput = event.target
    let label = toggledInput.parentElement

    if ( toggledInput.checked) {        
        let menuItemQuantity = renderMenuQuantity(decQuantityHandler, incQuantityHandler)
        // label.parentElement.insertBefore(div, label.nextElementSibling)
        label.after(menuItemQuantity)
    } else {
        label.parentElement.removeChild(label.nextElementSibling)
    }         
       
}

const decQuantityHandler = ( event) => {
    event.preventDefault()
    alert()
}

const incQuantityHandler = ( event) => {
    event.preventDefault()
    alert()
}







//--------------------------------------------------
const contentSection = document.getElementById("content") // HW*: use another way ----> const contentSection = document.querySelector("#content")

renderMenuForm(contentSection, data.menu)