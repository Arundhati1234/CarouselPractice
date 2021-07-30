const panels = document.querySelectorAll('.panel'); //gives an array of elements with class of panel

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}