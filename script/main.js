const API_URL = "https://task4-back-ru6z.onrender.com/api";
console.log(document.getElementById("loginForm"));
document.getElementById("loginForm").addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    login(email, password);
});


async function login (email, password) {
    const credentials = JSON.stringify({email, password});
    const LOGIN_ENDPOINT = "/auth/login";

    const response = await fetch(API_URL + LOGIN_ENDPOINT, {
        method: 'POST',
        mode: "no-cors",
        headers: {
            'Content-Type': "application/json",
        },
        body: credentials,
    });

    const data = await response.json();

    if(response.ok){
        alert("Logged in");
    }else {
        alert('Error: ' +  data.message);
    }
}