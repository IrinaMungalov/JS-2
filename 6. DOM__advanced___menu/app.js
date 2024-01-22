// DATA SCHEMA
class MenuItem {
    constructor (id, name, image, price) {
        this.id = id
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
            new Food(1, "Pizza", "images/pizza.jpg", 100),
            new Food(2, "Salad", "images/salad.jpg", 50),
            new Food(3, "Soup", "images/soup.jpeg",  25),
        ],
        drinks: [           
            new Drink(4, "Black Tea", "images/blackTea.jpg", 50),
            new Drink(5, "Green Tea", "images/greenTea.jpg", 45),
            new Drink(6, "Water",     "images/water.jpg", 15),
        ]
    },
    order: {
        items: [],
        total: 0
    },
    promotions: {
        freeDeliveryLimit: {
            limit: 200,
            cost: 0,
            deliveryCost: 50,
        },
        discount: {
            limit: 5,
            cost: 0.9
        }
    }
}


const addItemToOrder = (id) => {
    let selectedItem = data.menu.food.find( 
        item => item.id === id
    )
    data.order.items.push(
        {itemRef: selectedItem, quantity: 1}
    )
    data.order.total += selectedItem.price
    renderOrder(footerSection, data.order)
}

const removeItemFromOrder = (id) => {
    const itemsCount = data.order.items.length

    for (let i = 0; i < itemsCount; i++) {
        if (data.order.items[i].itemRef.id === id) {
            data.order.items.splice(i, 1)
            return
        }
    }
}





// RENDER
const renderMenuItem = (menuItem, parentElement, handler) => {
        let label = document.createElement('label')
        let input = document.createElement('input')       
            input.setAttribute("type", "checkbox")
            input.setAttribute('data-id', menuItem.id)
        let labelText = document.createTextNode(`${menuItem.name} ${menuItem.price}`)

        let img = document.createElement('img')
        img.src = menuItem.image

        label.appendChild(input)
        label.appendChild(img)
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
    menu.drinks.forEach( drinkData => renderMenuItem(drinkData, drinkSet, toggleMenuItemHandler))

    form.appendChild(foodSet)    
    form.appendChild(drinkSet)

    rootElement.appendChild(form)    
}

const renderMenuItemQuantity = (id, decHandler, incHandler) => {
    let div = document.createElement('div')
    let btnDec = document.createElement('button')
        btnDec.addEventListener('click', decHandler)
        btnDec.innerText = "-"
        btnDec.setAttribute('data-id', id)
    let inputQ = document.createElement('input')
        inputQ.value = 1
        inputQ.type = "text"
        inputQ.setAttribute('data-id', id)
    let btnInc = document.createElement('button')
        btnInc.addEventListener('click', incHandler)
        btnInc.innerText = "+"
        btnInc.setAttribute('data-id', id)

    div.appendChild(btnDec)
    div.appendChild(inputQ)
    div.appendChild(btnInc)

    return div
}

const renderOrder = (rootElement, order) => {    
    if (rootElement.children.length > 0) {
    rootElement.removeChild(rootElement.firstElementChild)    
    }
    // HW*: render in better format

    let div = document.createElement('div')
    let totalText = `Total: ${order.total} €`

    if (order.total > data.promotions.freeDeliveryLimit.limit) {
        totalText += ` ( Free Delivery )`
    } else {
        totalText += ` ( + ${data.promotions.freeDeliveryLimit.deliveryCost} € Delivery )`
        order.total += data.promotions.freeDeliveryLimit.deliveryCost
    }

    let discountText = ''

    if (order.items.length >= data.promotions.discount.limit) {        
        const totalDiscount = order.total * data.promotions.discount.cost
        const discountedTotal = order.total - totalDiscount

        discountText = `<br>Discount: ${totalDiscount} € 
                        <br>Discounted Total: ${discountedTotal} €`
    } else {
        discountText += `<br>Order Total Cost: ${order.total} €`
    }

    div.innerHTML = totalText + discountText    
    rootElement.appendChild(div)
}

// EVENTS
const toggleMenuItemHandler = ( event ) => {
    let toggledInput = event.target
    let label = toggledInput.parentElement
    let id = +toggledInput.dataset.id

    if ( toggledInput.checked) {        
        let menuItemQuantity = renderMenuItemQuantity(id, decQuantityHandler, incQuantityHandler)
        
        label.after(menuItemQuantity)

        addItemToOrder( +id )

    } else {
        removeItemFromOrder(id)
        label.parentElement.removeChild(label.nextElementSibling)
    }         
       
}

// HW*: optimize this code

const updateQuantityHandler = (event) => {
    let btnElement = event.target
    let id = +btnElement.dataset.id
    let selected = data.order.items.find(
        item => item.itemRef.id === id
    )
    return { id, selected }
}

// HW*: update and render the total

const updateTotal = () => {
    let total = data.order.items.reduce((acc, item) => acc + item.quantity * item.itemRef.price, 0)
    data.order.total = total

    renderOrder(footerSection, data.order)
}

const decQuantityHandler = ( event) => {
    event.preventDefault()    
    
    let { id, selected } = updateQuantityHandler(event)      
    // HW*: try use ternary operator, try to use and/or operator

    // selected.quantity = selected.quantity > 1 ? selected.quantity - 1 : selected.quantity
    // selected.quantity > 1 && (selected.quantity -= 1)

    if (selected.quantity > 1) {
        selected.quantity--
    }

    let input = document.querySelector(`input[data-id="${id}"][type="text"]`)
    input.value = selected.quantity

    updateTotal()    
}

const incQuantityHandler = ( event) => {
    event.preventDefault()   
    
    let { id, selected } = updateQuantityHandler(event)
    // HW*: try use ternary operator, try to use and/or operator

    // selected.quantity = selected.quantity < 5 ? selected.quantity + 1 : selected.quantity
    // selected.quantity < 5 && (selected.quantity += 1)

    if (selected.quantity < 5 ) {
        selected.quantity++
    }

    let input = document.querySelector(`input[data-id="${id}"][type="text"]`)
    input.value = selected.quantity    
      
    updateTotal()
}


//--------------------------------------------------
const contentSection = document.getElementById("content") // HW*: use another way ----> const contentSection = document.querySelector("#content")
const footerSection = document.getElementsByTagName("footer")[0]

renderMenuForm(contentSection, data.menu)
renderOrder(footerSection, data.order)

