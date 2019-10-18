const findIdLetter = () => {

    let letters = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
    let dni = document.getElementById('dni').value
    let userLetter = document.getElementById('id-letter').value

    if (validateFields(dni, userLetter) ){
        let position = dni%23
        
        let theIdLetter = document.getElementById('letter-found')
        theIdLetter.innerHTML = letters[position]
        validateLett(userLetter, letters[position])

    }

    clear(document.getElementById('dni'))
    clear(document.getElementById('id-letter'))

}

const validateFields = (dni, letter) => {
    if (!dni || letter.trim().length === 0) {
        alert("No puede dejar campos vacíos")
        return false
    }
    else if (dni.toString().length != 8){
        alert("El dni tiene que tener 8 dígitos y estar comprendidos entre 0 y 99999999")
        return false
    }
    else return true
}

const validateLett = (userLetter, foundLetter ) => {
    let result = document.getElementById("result") 
    if (userLetter.toUpperCase() === foundLetter){
        result.innerHTML = "La letra introducida es correcta"
        result.classList.remove('red')
        result.classList.add('green')

    } else {
        result.innerHTML = "La letra introducida es incorrecta"
        result.classList.add('red')
        result.classList.remove('green')
    }
}

const clear = (tag) => {
    console.log("Me ejecuto")
    console.log(tag.value)
    tag.value = ""
}

const handleEvent = () => {
    if(event.keyCode === 13){
        event.preventDefault()
        findIdLetter()
    }
    
}