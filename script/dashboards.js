
const API_URL = "https://task4-back-ru6z.onrender.com/api";
const USERS_ENDPOINT = "/users";
fillTable();
async function fillTable(){
    const tableBody = document.querySelector("#usersTable tbody");
    const users = await fetchUsers();
    const data = await users.json();
    console.log(data);
    users.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
    users.array.forEach(user => {
        const tr = document.createElement("tr");
        const tdName =  document.createElement("td");
        const tdEmail = document.createElement("td"); 
        const tdLastLogin = document.createElement("td");
        const tdBlocked= document.createElement("td");
        const checkbock = document.createElement("input");
        checkbock.type = "checkbox";
        tdName.textContent = user.name;
        tdEmail.textContent = user.email;
        tdLastLogin.textContent = user.last_login;
        tdBlocked.textContent = user.blocked? "Blocked" : "Active";
        tr.appendChild(checkbock)
        tr.appendChild(tdName)
        tr.appendChild(tdEmail)
        tr.appendChild(tdLastLogin)
        tr.appendChild(tdBlocked)
        tableBody.appendChild(tr);

    });
    console.log(users);
}

async function fetchUsers(){
    const response = await fetch(API_URL + USERS_ENDPOINT, {
        method: 'GET',
        credentials: 'include' 
    });
    console.log(response);
    const data = await response.json();
    return data;
    
} 
