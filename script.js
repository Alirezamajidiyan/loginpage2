let usernameEl = document.getElementById("user")
let passwordEl = document.getElementById("input")
let username = []
let password = []
let membersNumber = 0

function signup() {
    let currentUsername = usernameEl.value
    let currentPassword = passwordEl.value
    let i
    if (currentUsername != "" && currentPassword != "") {
        for (i = 0; i < membersNumber; i++) {
            if (currentUsername == username[i]) {
                alert("Signup unsuccessful, please try again!")
                return
            }
        }
    }
    else {
        alert("Signup unsuccessful, please try again!")
        return
    }
    username[i] = currentUsername
    password[i] = currentPassword
    membersNumber++
    alert("Acount: " + username[i] + " with password: " + password[i] + " Created!")
}

function login() {
    let currentUsername = usernameEl.value
    let currentPassword = passwordEl.value
    if (currentUsername != "" && currentPassword != "") {
        for (let i = 0; i <= membersNumber; i++) {
            if (currentUsername == username[i] && currentPassword == password[i]) {
                loadProfile(username[i])
                return
            }
        }
    }
    alert("Login unsuccessful, please try again!")
}

function loadProfile(profile) {
    alert("Logged in account: " + profile)
}