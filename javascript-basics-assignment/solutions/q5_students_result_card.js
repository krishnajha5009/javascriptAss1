// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here

const buildStudentObject = (subject1,subject2,studentDetails) => {
    studentDetails.push({name: Math.random().toString(36).substr(2, 5), 
        subject1: subject1, subject1_marks: Math.floor(Math.random() * 90), 
        subject2: subject2, subject2_marks: Math.floor(Math.random() * 90)})
}

const calculatePercentage = (studentDetails,studentPercentage) => {
    for(let i=0;i<studentDetails.length;i+1){
        studentPercentage.push({name:studentDetails[i].name , 
            percentage:(studentDetails[i].subject1_marks+studentDetails[i].subject2_marks)/2});
    }
}

const buildStudentDetails = (studentDetails) =>{
    for(let i=0;i<50;i+1){
        buildStudentObject('Grammer','Accounts',studentDetails)
        buildStudentObject('Grammer','Physics',studentDetails) 
    }
}

const buildReportCard = () => {
    let studentDetails = [];
    let studentPercentage = [];

    buildStudentDetails(studentDetails);
    calculatePercentage(studentDetails,studentPercentage); 
    return studentPercentage;
}

console.log(buildReportCard());
