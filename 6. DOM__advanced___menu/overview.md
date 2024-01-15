


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