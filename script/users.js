
const API_URL = "https://task4-back-ru6z.onrender.com/api/users";

document.getElementById("blockButton").addEventListener("click", async function (e) {
    usersEmail = getMarkedUsers();

    const response = await fetch(API_URL + "/block", {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: usersEmail,
    });

    if(response.ok){
        console.log("users Blocked");
    }else {
        console.log(response);
    }

});

function getMarkedUsers(){
    const EMAIL_COLUMN = 2;
    const table = document.getElementById("usersTable");
    const rows = table.querySelectorAll("tbody tr");
    const markedUsersEmail = [];
    
    rows.forEach(row => {
        const checkbox = row.querySelector("input[type='checkbox']");
        if (checkbox.checked) { 
        const email = row.cells[EMAIL_COLUMN].textContent; 
        markedUsersEmail.push({email}); 
        }
    });
    
    console.log(markedUsersEmail);
}

  