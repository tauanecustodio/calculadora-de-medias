// --------- variables declaration ---------

const gradeForm = document.getElementById('grade-form');

// inputs 
const activity = document.getElementById('activity-name');
const grade = document.getElementById('grade');

// table 

const tableBody = document.getElementById('table-body');
const tableFooter = document.getElementById('table-footer');

// --------- function declarations ---------

function addRowToTable(activity, grade) {
    const newRow = document.createElement('tr');
    newRow.classList.add('grades-table__row');

    newRow.innerHTML = `
        <td class="grades-table__cell">${activity}</td>
        <td class="grades-table__cell">${grade}</td>
        <td class="grades-table__cell"><img src="images/aprovado.png" alt="rosto com chapéu de comemoração"></td>
    `;
    tableBody.appendChild(newRow);
}



// --------- event listeners ---------

gradeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addRowToTable(activity.value, grade.value);

    activity.value = '';
    grade.value = '';
});