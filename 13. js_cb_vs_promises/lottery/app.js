const breakCaptcha = ( captcha ) => {  
    //                 solve_f, err_f 
    //                   v         v
    return new Promise(( resolve, reject )=>{

        if (typeof captcha !== 'string')
            return reject('Wrong captcha format')

        // breaking
        setTimeout(()=> {
            let solution = captcha.split("")
            resolve (solution)
        }, 1000) 
            
    })
               
}

const renderResult = ( solution ) => {
    result.innerHTML = `${solution.join(' ')}`
}
const renderError = ( err ) => {
    result.innerHTML = `${err}`
}

//-----------------------------
breakCaptcha(null)
    .then(renderResult)
    .catch(renderError)









