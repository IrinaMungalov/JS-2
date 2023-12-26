DOM - Document Object Model
BOM - Browser Object Model




JS: navigate - DOM
        1) DOM tree
            shortcuts:
                document - root

                !!! - Object
                document.head
                document.body
                document.title

                !!! - HTMLCollection ~ Array
                document.images
                document.links
                document.forms

                !!! - ANY ELEMENT
                element.parentElement
                element.nextElementSibling
                element.previousElementSibling
                element.firstElementChild
                element.lastElementChild
                element.children

                !!! - ANY NODE
                node.parentNode
                node.nextSibling
                node.previousSibling
                node.firstChild
                node.lastChild
                node.childNodes
                
        2) DOM search functions



DOM

        h1 -> Object < HTMLHeadingElement   < | < HTMLElement  < Element
        p  -> Object < HTMLParagraphElement < | < HTMLElement  < Element


<!-- Attributes - standart: id, class, src, href, ... -->

element.id
element.className
element.src
element.href
element.style
element.value 

<!-- HTML Elements -->
element.innerHTML
element.innerText