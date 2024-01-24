let xmlString = `
    <person>
            <firstname>
                John
            </firstname>
            <lastname>
                Smidt
            </lastname>
            <birthDate>
                13/12/2000
            </birthDate>
            <address>
                <country>
                    USA
                </country>
                <city>
                    California
                </city>
                <streetAddress>
                    13 Santa Monica St
                </streetAddress>
            </address>
            <contacts>
                <phones>
                    <phone>
                        645-476-7090
                    </phone>
                    <phone>
                        947-614-3460
                    </phone>
                </phones>
                <socials>
                    <social key="FB">
                        @john_smidt
                    </social>
                    <social key="viber">
                        +6454767090
                    </social>
                    <social key="telegram">
                        @smidt_john
                    </social>
                </socials>
            </contacts>
    </person>   
`

const parser = new DOMParser()
const xmlDoc = parser.parseFromString(xmlString, "text/xml")

const personEl = xmlDoc.querySelector('person')

const firstname = personEl.querySelector('firstname').textContent
const lastname = personEl.querySelector('lastname').textContent

const addressEl = personEl.querySelector('address')
const streetAddress = addressEl.querySelector('streetAddress').textContent

const jobEl = xmlDoc.createElement('job')
jobEl.textContent = 'Developer'

const companyEl = xmlDoc.createElement('company')
companyEl.textContent = 'Tech company'

console.log("Firstname:", firstname)
console.log("Lastname:", lastname)
console.log("Street:", streetAddress)

console.log("Job:", jobEl)
console.log("Company:", companyEl)

personEl.appendChild(jobEl)
personEl.appendChild(companyEl)

console.log( new XMLSerializer().serializeToString(xmlDoc) )








