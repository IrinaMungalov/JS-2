








## DATA processing

    > JSON, XML        (формат хранения)
    > web storage      (механизмы хранилища)
    > ajax / fetch API (механизмы обмена данными)
    > modules & modern syntax








stote & send / receive DATA

    > JSON - native
    > XML  |
    > YAML | - parsers (библиотеки для преобразования структур)
    > CSV  |
    > ...  |

                            JSON

          JS (app)         <----->     EXTERNAL
                              |
        object & array        |        
                              |
                              |
                              |
                              |
                              |
                            





xmlDoc
  |
 children
  |
  +-- 0 -- order
             |
            children
             |
             +-- 0 -- item
                       |
                       |
                       +-- .textContent: "Pizza"


jsonData
   |
   +-- order
         |
         +-- item: "Pizza"









HW1:
 
  say we have next info:

   - firstname, lastname of a person
   - date of birth of this person
   - addres:
     - country
     - city
     - street address
   - contacts:
     - phones:
       - a few phone number
     - socials:
       - key-value pairs


* create the corresponding xml and json srting
* parse both
* find and print only the firstname, lastname, street address

** add to the parsed structure: job, company
** serialize both structure to string and print them
        