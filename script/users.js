
document.getElementById("blockButton").addEventListener("click", async function (e) {
    e.preventDefault();
    console.log(getMarkedUsers());
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
        markedUsersEmail.push(JSON.stringify(email)); 
        }
    });
    
    console.log(markedUsersEmail);
}

  