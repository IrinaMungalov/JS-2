


FORM   submit <--------- observer --------> JSON + webstorage
  |                                          - save
  +-- name                                   - autocomplete the form
  |
  +-- phone
  |
  +-- email
  |
  +-- address
  | 
  +-- password























  [
    input {id: "name", value: "John"},  ---------------+
                                                       |
                                                       v    
                                          ----> (acc, input ) => {}
    input {id: "phone", value: "phone"},          ^
                                                  |
    ...                                  +--------+
                                         |
  ].reduce( (..., input)=>{},  { } )     |
                                |        |
                                v        |
                            +--- accumulator ---+
                            |    {              |
                            |     name: "John"  |
                            |    }              |
                            +-------------------+