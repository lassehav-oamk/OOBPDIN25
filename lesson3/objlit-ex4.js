let student = {
    name: "Joe",
    studentId: "AB12345",
    grades: [
        1, 4, 5, 2, 3
    ]
}

let student2 = {
    name: "Max",
    studentId: "CC0000",
    grades: [5, 4]
}


// print the average of grades of the student
function calculateAverage(arrayOfNumbers)
{
    let sum = 0;
    for(let i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
    }

    let avg = sum / arrayOfNumbers.length;
    return avg;
}

function printStudentGPAInfo(studentToProcess) {
    let avg = calculateAverage(studentToProcess.grades);
    console.log(studentToProcess.name + ' (ID: ' + studentToProcess.studentId + ') has GPA of ' + avg);
}

printStudentGPAInfo(student)
printStudentGPAInfo(student2)