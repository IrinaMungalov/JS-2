


## JS / MODERN ES6+ OOP

                                   +---- yes ----> literal object
                                  /             
creste an object: - simple object ?                let obj = {...}
                                  \
                                   \
                                    \
                                     \
                                      +--- no ---> class temlate
                                       
                                                   class SomeType {
                                                    ...
                                                   }

                                                   let obj = new SomeType()




```js






// wrapper for gifts    

// define the type/class
class Gift {
    constructor (color, type, message) {
        console.log("Gift custom constructor was invoked")
        this.color = color
        this.type = type
        this.message = message     
    }
}

// create a few Gift instances
let myGift = new Gift("green", "paper", "HBTY")
let parentsGift = new Gift("yeloow", "crystal", "HBTY")







```

Gift
  \
+--x---------------------------+
|                              |
|              .prototype      |
|          +----------------+  |
|          |                |  |
|          | .constructor() |  ----------> Object
|          |                |  |
|          +----------------+  |
|                              |
+---------------^--------------+
                |
                |
                |
myGift ---->+---x----+
            |        |
            +--------+




new Gift()
       |
    1. search id
       |
       v
    +--<Gift>----------+
    |                  |
    | 2. invoke        |
    | .constructor() { |
    |                  | 3. delegate construction  +--------<Object>-------+
    |      super()  --------------------------------->  .constructor()  {  | 
    |    this ?        |                           |    ...                |
    | }   ^         <---------------------------------- }                  |                 
    +-----|------------+                           +-----------------------+
          |
     Gift { base object specific logic}                                             