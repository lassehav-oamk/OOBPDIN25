class Person {
    name: string;
    dateOfBirth: string;
    email: string;
    address: string;
    personId: number;

    constructor(name: string, dob: string, email: string, address: string) {
        this.name = name;
        this.dateOfBirth = dob;
        this.email = email;
        this.address = address;
        this.personId = Math.round( Math.random() * 10000000 );
    }

    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Date of Birth: ${this.dateOfBirth}`);
        console.log(`Email: ${this.email}`);
        console.log(`Address: ${this.address}`);
        console.log(`Person ID: ${this.personId}`);
    }
}

interface CourseGrade {
    courseName: string;
    courseId: string;
    grade: number;
}

class Student extends Person {
    classIdentifier: string;
    dateOfAdmission: string;
    completedCourses: CourseGrade[];

    constructor(
        name: string, 
        dob: string, 
        email: string, 
        address: string, 
        classId: string, 
        doa: string
    ) {
        super(name, dob, email, address);
        this.classIdentifier = classId;
        this.dateOfAdmission = doa;
        this.completedCourses = [];
    }

    displayInfo(): void {
        // super.displayInfo();
        // console.log(`Class Identifier: ${this.classIdentifier}`);
        // console.log(`Date of Admission: ${this.dateOfAdmission}`);
        // console.log(`Completed Courses: ${this.completedCourses.length}`);
        console.log('This is overridden method from Person class');
    }

    addCompletedCourse(courseName: string, courseId: string, grade: number) {
        let newCourseGrade: CourseGrade = {
            courseName: courseName,
            courseId: courseId,
            grade: grade
        }
        this.completedCourses.push(newCourseGrade);
    }
}

let test = new Student("John Doe", "1.1.2000", "john@school.com", "Demo Road 1", "DIN25SP", "1.8.2025");
test.displayInfo();
console.log(test);

test.addCompletedCourse("Mathematics", "YY001-1001", 4);
console.log(test);