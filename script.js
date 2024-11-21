// Function to set a cookie
function setCookie() {
    const name = document.getElementById("username").value;
    if (name) {
        const d = new Date();
        d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000)); // Cookie valid for 7 days
        const expires = "expires=" + d.toUTCString();
        document.cookie = "username=" + name + ";" + expires + ";path=/";
        document.getElementById("message").innerHTML = "Cookie has been saved!";
    } else {
        document.getElementById("message").innerHTML = "Please enter your name.";
    }
}

// Function to get a cookie by name
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const c = cookies[i].trim();
        if (c.indexOf(name + "=") == 0) {
            return c.substring(name.length + 1);
        }
    }
    return "";
}

// Display the cookie on page load
window.onload = function () {
    const username = getCookie("username");
    if (username) {
        document.getElementById("message").innerHTML = "Welcome back, " + username + "!";
    } else {
        document.getElementById("message").innerHTML = "No cookie found. Please enter your name.";
    }
};