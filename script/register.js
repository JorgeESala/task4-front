const API_URL = "https://task4-back-ru6z.onrender.com/api";
document.getElementById("registerForm").addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    register(name, email, password);
});

async function register (name, email, password) {
    const userData = JSON.stringify({name, email, password});
    const REGISTER_ENDPOINT = "/auth/register";

    const response = await fetch(API_URL + REGISTER_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: userData,
    });

    console.log(response)
    if(response.ok){
        alert("User registered");
    }else {
        alert("Email already in use");
    }
    
}