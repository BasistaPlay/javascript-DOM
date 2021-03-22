
document.addEventListener('DOMContentLoaded', function () {

    const button = document.querySelector('#button')
    const elements = document.querySelectorAll('.toggle_me')


    var toggleStatus = false
    button.addEventListener('click', function(e) {
        if (toggleStatus == false)
        {
            elements.forEach(function(element) {
                toggleStatus = true
                element.style.display = 'initial'
            })
        }
        else
        {
            elements.forEach(function (element) {
                toggleStatus = false
                element.style.display = 'none'
            })
        }
    })

})