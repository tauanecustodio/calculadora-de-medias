// --------- variables declaration ---------

const gradeForm = document.getElementById('grade-form');
const textResult = document.getElementById('result-average');
const statusResult = document.getElementById('result-status');

let countActivity = 0;
let averageGrade = 0;
let sumGrade = 0;

// inputs 
const activity = document.getElementById('activity-name');
const grade = document.getElementById('grade');

// table 

const tableBody = document.getElementById('table-body');
const tableFooter = document.getElementById('table-footer');

// --------- function declarations ---------

function statusImg(num) {
    if(num >= 7) {
        return '<img src="images/aprovado.png" alt="rosto com chapéu de comemoração">';
    } else {
        return '<img src="images/reprovado.png" alt="rosto triste">';
    }
}

function addRowToTable(activity, grade) {
    const newRow = document.createElement('tr');
    newRow.classList.add('grades-table__row');

    newRow.innerHTML = `
        <td class="grades-table__cell">${activity}</td>
        <td class="grades-table__cell">${grade}</td>
        <td class="grades-table__cell">${statusImg(grade)}</td>
    `;
    tableBody.appendChild(newRow);
}

function calcAverage(grade) {
    countActivity++;
    sumGrade += parseFloat(grade);
    averageGrade = sumGrade/countActivity;
    textResult.textContent = averageGrade.toFixed(2);
    statusResult.innerHTML = statusImg(averageGrade);
}

function clearForm() {
    activity.value = '';
    grade.value = '';
}

// --------- event listeners ---------

gradeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addRowToTable(activity.value, grade.value);
    calcAverage(grade.value);

    clearForm();
});