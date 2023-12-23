let menu = new Menu([
    new MenuItem("/", "BRAND", "bi-dribbble"),
    new MenuItem("tel:+123456789", "+123456789", "bi-telephone"),
    new MenuItem("/our-services", "Services"),
    new MenuItem("/our-team", "Team"),
    new MenuItem("/our-contacts", "Contacts", "bi-person-lines-fill"),    
])


let headerTop = document.querySelector('.top')
headerTop.innerHTML = menu.render()