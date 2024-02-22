const breakCaptcha = ( captcha, cb ) => {  

    if (typeof captcha !== 'string') 
        cb( null, 'Wrong captcha format' )
    //throw new TypeError("This function accepts only STRING captchas!")
    
    // breaking
    setTimeout(()=> {
        let solution = captcha.split("")
        cb (solution)
    }, 1000) 
    
            
}

const render = ( solution, err ) => {
    if (err)
        result.innerHTML = `${err}`
    else
        result.innerHTML = `${solution.join(' ')}`
}

//-----------------------------
breakCaptcha('abc' , render)




    // HW1: find out how to add the error handling
    // HW2: finish the diagram

