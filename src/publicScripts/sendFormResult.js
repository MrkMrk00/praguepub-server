function loadResult() {
    const uNameElement = document.getElementById('username')
    const pswElement = document.getElementById('password')

    const httpResponseField = document.getElementById('http-feedback')

    //načtení jména a hesla z inputů
    const userInput = {
        username: uNameElement.value,
        password: pswElement.value
    }
    uNameElement.value = ''
    pswElement.value = ''

    //odeslání POST requestu na passwordPostRouter se jménem a heslem
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInput)
    }).then((res) => {
        res.text().then((text) => {
            const resJson = JSON.parse(text)
            console.log(text)
            console.log(resJson)
            httpResponseField.innerHTML = 
                resJson.message
                + ': '
                + userInput.username
        })

    })
}

//přidává onClick listener na tlačítko
document.getElementById('send-button')
    .addEventListener('click', loadResult)
