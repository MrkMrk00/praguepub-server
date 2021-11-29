function loadResult() {
    const result = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    }

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(result)
    })
}

document.getElementById('send-button')
    .addEventListener('click', loadResult)
