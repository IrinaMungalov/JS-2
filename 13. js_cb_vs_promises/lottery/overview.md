



------------> "ab123" ----------+
                                |               
                                v               
                breakCaptcha ( captcha )  
                                |                                       ^
                            typeof captcha === 'string' ? ---+          |
                                |                            |          |
                              true                         false        |
                                |                            |          |
                                |                            v          |
                            return captcha.split()    throw new TypeError("This ...)  
                                |                             
                                |                             
                                v
                            ["a","b","1",...]
      |                                       
      v                                       
    Error     








             ^
             |
context (solverCaptcha(...))
  |          ^
  |          | throw Error
  |          |
  +-- breakCaptcha(null)



                                                                                                    
                                                                                                +--> if (err) result.innerHTML = `${err}`      
                                                                                               /       
context (console)                                                                             /
  |                                                                                          /
  |                             +--------------------------------  render = ( solution, err )
  |                             |                                                            \
  +---- breakCaptcha( captcha, cb)                                                            \
            |                                                                                  \   
            |                                                                                   +--> else result.innerHTML = `${solution.join(' ')}`
            |
            +--- setTimeout(()=>{ }, 1000)
            |          ^         .
  +---------+          |         .
  |                    |         .                                          ^
  v                    |         .                                          |
  x                    |         .                                          |
undefined              |         .                                          |
                       |         x start                                    |
                       |         |                                          |
                       |         +-- solution = captcha.split("")           |
                       |         +-- cb( solution )                         |
                       |         |    |                                     |
                       ----------+    +--------------------------------------
                                