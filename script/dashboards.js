
const API_URL = "https://task4-back-ru6z.onrender.com/api";
const USERS_ENDPOINT = "/users";
fillTable();
async function fillTable(){
    const tableBody = document.querySelector("#usersTable tbody");
    const users = await fetchUsers();

    users.sort((a, b) => new Date(b.lastLogin) - new Date(a.lastLogin));

    users.forEach(user => {
        const userDate = new Date(user.lastLogin);
        const tr = document.createElement("tr");
        const tdName =  document.createElement("td");
        const tdEmail = document.createElement("td"); 
        const tdLastLogin = document.createElement("td");
        const tdBlocked= document.createElement("td");
        const tdCheckbox= document.createElement("td");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "form-check-input";
        tdCheckbox.appendChild(checkbox);
        tdName.textContent = user.name;
        tdEmail.textContent = user.email;
        tdLastLogin.textContent =`${userDate.toLocaleDateString('en-US')} ${userDate.toLocaleTimeString('en-US')}`;
        tdBlocked.textContent = user.blocked? "Blocked" : "Active";
        tr.appendChild(tdCheckbox)
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
    const data = await response.json();
    console.log(data);
    return data;
    
} 
