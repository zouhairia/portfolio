document.addEventListener('DOMContentLoaded', function() {
    const crudForm = document.getElementById('crudForm');
    const usersList = document.getElementById('users');
    let usersData = JSON.parse(localStorage.getItem('usersData')) || [];

    function loadUsers() {
        usersList.innerHTML = '';
        usersData.forEach(user => {
            addUserToTable(user);
        });
    }

    function addUserToTable(user) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.number}</td>
            <td>${user.job}</td>
            <td class="action-buttons">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;
        usersList.appendChild(row);
        saveDataToLocalStorage();
    }

    function saveDataToLocalStorage() {
        localStorage.setItem('usersData', JSON.stringify(usersData));
    }

    loadUsers();

    crudForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const numberInput = document.getElementById('number');
        const jobInput = document.getElementById('job');

        const name = nameInput.value;
        const email = emailInput.value;
        const number = numberInput.value;
        const job = jobInput.value;

        if (name && email) {
            const newUser = { name, email, number, job };
            usersData.push(newUser);
            addUserToTable(newUser);
            nameInput.value = '';
            emailInput.value = '';
            numberInput.value = '';
            jobInput.value = '';
        }
    });

    usersList.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('edit-btn')) {
            editUser(target);
        } else if (target.classList.contains('delete-btn')) {
            deleteUser(target);
        }
    });

    function editUser(button) {
        const currentRow = button.closest('tr');
        const columns = currentRow.querySelectorAll('td');
        const name = columns[0].innerText;
        const email = columns[1].innerText;
        const number = columns[2].innerText;
        const job = columns[3].innerText;

        document.getElementById('name').value = name;
        document.getElementById('email').value = email;
        document.getElementById('number').value = number;
        document.getElementById('job').value = job;

        usersData = usersData.filter(user => user.email !== email);
        usersList.removeChild(currentRow);
        saveDataToLocalStorage();
    }

    function deleteUser(button) {
        const currentRow = button.closest('tr');
        const email = currentRow.querySelector('td:nth-child(2)').innerText;
        
        usersData = usersData.filter(user => user.email !== email);
        usersList.removeChild(currentRow);
        saveDataToLocalStorage();
    }
});
