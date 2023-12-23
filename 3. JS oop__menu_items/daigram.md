menu<Menu> <---------- decisions
      |
      +--- item<Array> = [
        0 - <MenuItem />
               |
               +-- title: "account"
               |
               +-- url: "/account"
               |
               +-- icon

        1 - <MenuItem />
        2 - <MenuItem />
        ...
        n - <MenuItem />
      ]









      to boolean
        |
        v
if ( condition ) {

}


                        +--- true ---->
                        |
----- condition --------+
                        |
                        +--- false --->


HW1: add icon to constructor
HW2: refactor render() -> to show the icon if it exists
HW3: validate the formula for a bootstrap icon - regex

MenuItem ( url, title, icon = null )
new MenuItem ("/schedule", "Shedule", '<i class="bi bi-calendar"></i>')



