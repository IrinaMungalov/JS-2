let jsonString = `
    {
        "person": {
                "firstname": "John",
                "lastname": "Smidt",
                "dob": "13/12/2000",
                "address": {
                    "country": "USA",
                    "city": "California",
                    "streetAddress": "13 Santa Monica St"
                },
                "contacts": {
                    "phones": [
                        "645-476-7090",
                        "947-614-3460"
                    ],
                    "socials": {
                        "FB": "@john_smidt",
                        "viber": "+6454767090",
                        "telegram": "@smidt_john"
                }
            }
        }
    }
    
`

let jsonData = JSON.parse(jsonString)

const firstname = jsonData.person.firstname
const lastname = jsonData.person.lastname
const streetAddress = jsonData.person.address.streetAddress

jsonData.person.job = "Developer"
jsonData.person.company = "Tech company"

const job = jsonData.person.job
const company = jsonData.person.company

console.log("Firstname:", firstname)
console.log("Lastname:", lastname)
console.log("Street:", streetAddress)

console.log("Job:", job)
console.log("Company:", company)

console.log( JSON.stringify(jsonData) )