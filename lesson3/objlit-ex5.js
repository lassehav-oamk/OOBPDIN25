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

const arrayOfStudents = [
    student, 
    student2,
    {
        name: "John",
        studentId: "AA11111",
        grades: [1, 2, 1, 1]
    }
];

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

function printStudentsGPAInfo(students) {
    //printStudentGPAInfo(students[0])
    //printStudentGPAInfo(students[1])
    //printStudentGPAInfo(students[2])
    for(let i = 0; i < students.length; i++) {
        printStudentGPAInfo(students[i])
    }
}

printStudentsGPAInfo(arrayOfStudents);