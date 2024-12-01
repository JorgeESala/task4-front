


let blockFunction = async function (e, status){
    e.preventDefault();
    usersEmail = getMarkedUsers();
    console.log(JSON.stringify(usersEmail));
    const response = await fetch(API_URL + "/users/" + status, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(usersEmail),
    });

    if(response.ok){
        console.log("Users " + status == "block"? "blocked" : "unblocked");
    }else {
        console.log(response);
    }
}

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
    
    return markedUsersEmail;
}
document.getElementById("blockButton").addEventListener("click", async function (e) {
    blockFunction(e, "block");
});
document.getElementById("unblockButton").addEventListener("click", async function (e) {
    blockFunction(e, "unblock");
});
