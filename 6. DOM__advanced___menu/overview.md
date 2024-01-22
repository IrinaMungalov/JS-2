


# DYNAMIC FORM
    - to order food & drinks

        > HTML
        > CSS

        > JS
            - Array & String processing
            - OOP (static, non-static, encapsulation)
            - DOM advanced:
                - Traversing
                - Manipulation
                - Data storage
                - Events
                - Pattern validation











 MULTI TIER (new: Micro Services)

 -------------------------------------------------------------------               
            UI (HTML+CSS)

--------------------------------------------------------------------
                        - render
            LOGIC (JS)  - interaction, validation
                        - get / set, process data, decision making
--------------------------------------------------------------------

            DATA (JS)



1. create the fragment in memory
2. append the fragment to the DOM

rootElement (section#content)     


form 
|
|
+--- label
|       |
|       +-------- input
|       |               
|       +-------- #text: Pizza
|
+--- label
|        |
|        +-------- input
|
+--- label
        |
        +-------- input








INHERITANCE


MenuItem
 ^    ^
Food Drink






                        adapter (callback)
                          /  
                         /
menu.food.forEach( renderMenuItem )
                        |
                        |                                        |
                        v                                        v
                    ( foodData ) =>  renderMenuItem ( foodData, form)






renderMenuItem (...., handler)    LOSE COUPLING
    |                    |
    v                    |
    .                    |
    .                    +------------+ 
    .                                 v
  input.addEventListener('change', handler)
                                            




DOM events bubbling

      form      < -------- when click event gets here
        |                                \
        |                                 +-- default browser handler -> submit form
    fieldset
        |
        +-- label
        |    |
        |    +-- input[type="checkbox"]
        |    |      \
        |    |       +--- change ---- toggleMenuItemHandler ( event )
        |    |
        |    +-- #text: Pizza ...
        |
        +-- div
             |
             +-- button: -
             |       \
             |        +----- click ------ decHandler( event )
             |                                event.preventDefault()
             +-- input
             |
             +-- button: +
             |       \
             |        +----- click ------ incHandler( event )
             |                                event.preventDefault()








OBSERVER PATTERN (event handler, pub-sub)


<element on[eventname]="eventHandler()">
   ^
   |
  elementVariable.addEventListener('eventname', eventHandler)
                                                      |
                                                      v
                                                  eventHandler () {
                                                    ...
                                                  }








      DOM
       |
       v
                              +----- Observer -------+
                              |                      |
                              |                      |
                              |  'click'             +----------- > eventHandler ( e ) {
                              |                      |               ...           ^
      parentElement           +-----+----------------+             }               |
       |                            |                                              |
       .                            |                                              |
       |                            v                                              |
+------------- <element> -------------+                                            |
|                                     |  dispatch                                  |
|                                     |<-------                                    |
|                                     +---- event {...} ---------------------------+
|                                     |       ^
+-------------------------------------+       |
                      ^                       |
                      |                       |
                    action -------------------+
                      |
                    user (also: op. system, agent, ...)






!!! TODO: clone + immutable

let data = {
    menu: {
        food: [
            new Food("Pizza", "images/pizza.jpg", 100), <----+
            new Food("Salad", "images/salad.jpg", 50),       |
            new Food("Soup", "images/soup.jpeg",  25),       |
        ],                                                   |
        drinks: [                                            |
            // HW1: do the same for drinks                   |
            new Food("Black Tea", "", 50),                   |
            new Food("Green Tea", "", 45),                   |
            new Food("Water",     "", 15),                   |
        ]                                                    |
    },                                                       |
    order: {        +----------------------------------------+
        items: [
        { itemRef: ..., quantity: 1 }
        ]           |
    }               |
}                   v
            new Food("Pizza", "images/pizza.jpg", 100)
------------------------------------------------------------------------------
data.order.items.push(
        {itemRef: data.menu.food[0], quantity: 1}
)














<button data-size="10" data-style="dark" daat-effect="fade"> 
</button>
                 |
                 |
                 v
     element.dataset ---> {   }