let xmlString = `
    <order>
        <item>Pizza</item>
    </order>
`

let jsonString = `
    {
        "order": {
            "item": "Pizza"
        }
    }
`

//----------------------------------------------------------

// string structured data ---> parse ---> structure

let xmlParser = new DOMParser()
let xmlDoc = xmlParser.parseFromString(xmlString, 'text/xml')
console.log(xmlDoc.children[0].children[0].textContent)
console.log( new XMLSerializer().serializeToString(xmlDoc))

let jsonData = JSON.parse(jsonString)
console.log(jsonData.order.item)
console.log( JSON.stringify(jsonData) )