const saveFormData = (e) => {    
    e.preventDefault()
    
    let form = e.target
    let inputs = [...form.querySelectorAll('input')]    

    let data = inputs
        .filter( input => input.type != 'password')
        .reduce((acc, input) => {
            acc[input.id] = input.value
            return acc
        }, {})
        

    let jsonData = JSON.stringify(data)

    // store the data
    localStorage.setItem(`formData-${data.name}`, jsonData)    
}

const loadFormData = (e) => {
    let input = e.target
    // HW2: find the name "case insesitive"
    let name = input.value.toLowerCase()
    
    let foundKey = Object.keys(localStorage).find( 
        key => key.toLowerCase().startsWith("formData-") && key.toLowerCase().endsWith(name)
    )

    if (foundKey && name.length > 0) {
        let data = JSON.parse ( localStorage.getItem(foundKey) )        

        Object.keys(data).forEach( key => {
            let value = data[key]
            document.querySelector(`#${key}`).value = value
        } )
    } else {
        // HW1: clear every input
        document.querySelectorAll("input").forEach(input => {
            input.value = ""
        } )    
    }
}



//--------------------------------
document.forms[0].addEventListener('submit', saveFormData)
document.querySelector('form [id="name"]').addEventListener('change', loadFormData)