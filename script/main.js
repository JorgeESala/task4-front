const API_URL = "https://task4-back-ru6z.onrender.com/api";
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
        headers: {
            'Content-Type': "application/json",
        },
        body: credentials,
    });

    if(response.ok){
        alert("Logged in");
        window.location.href = "./pages/dashboard.html";
    }else {
        alert("bad credentials");
    }

}