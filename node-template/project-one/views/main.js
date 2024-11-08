document.addEventListener('DOMContentLoaded',()=>{
    alert('workin')
    const button = document.getElementById('button')
    const displayText = document.getElementById('demo')

    button.addEventListener('click',()=>{
        displayText.innerText='Clicked'
    })
})