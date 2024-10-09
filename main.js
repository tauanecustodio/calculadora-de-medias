// --------- variables declaration ---------

const minGrade = parseFloat(prompt("Qual a nota mínima?"));

let averageGrade = 0;
const activityArr = [];
const gradeArr = [];

// form 
const gradeForm = document.getElementById('grade-form');
const activity = document.getElementById('activity-name');
const grade = document.getElementById('grade');
const alertCamp = document.getElementById('alert');

// table 

const tableBody = document.getElementById('table-body');
const tableFooter = document.getElementById('table-footer');
const textResult = document.getElementById('result-average');
const statusResult = document.getElementById('result-status');

// --------- function declarations ---------

function validateInputs(activityName, gradeValue) {
    if(activityName === '' || gradeValue === '') {
        return 'Todos os campos são obrigatórios.';
    } else if(!/^\d+(\.\d+)?$/.test(gradeValue) || gradeValue < 0 || gradeValue > 10) {
        return 'A nota precisa ser um número entre 0 e 10.';
    } else if(activityArr.includes(activityName)) {
        return 'Atividade já adicionada.';
    }
    return true;
}


function statusImg(num) {
    if(num >= minGrade) {
        return '<img src="images/aprovado.png" alt="rosto com chapéu de comemoração" role="img" aria-label="Aprovado">';
    } else {
        return '<img src="images/reprovado.png" alt="rosto triste" role="img" aria-label="Reprovado">';
    }
}

function statusText(num) {
    statusResult.style.color = 'white';
    if(num >= minGrade) {
        statusResult.style.background = 'green';
        return 'Aprovado';
    } else {
        statusResult.style.background = 'red';
        return 'Reprovado';
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

function calcAverage() {
    let sumGrade = gradeArr.reduce((acc, cur) => acc + cur, 0);
    averageGrade = sumGrade / gradeArr.length;
    textResult.textContent = averageGrade.toFixed(2);
    statusResult.innerHTML = statusText(averageGrade);
}

function clearForm() {
    activity.value = '';
    grade.value = '';
    alertCamp.textContent = '';
}

// --------- event listeners ---------

gradeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const activityName = activity.value.trim().toLowerCase();
    const gradeValue = parseFloat(grade.value);
    
    const validationResult = validateInputs(activityName, gradeValue);
    if(validationResult !== true) {
        alertCamp.textContent = validationResult;
        return;
    }

    activityArr.push(activityName);
    gradeArr.push(gradeValue);

    addRowToTable(activityName, gradeValue);
    calcAverage();

    clearForm();
});