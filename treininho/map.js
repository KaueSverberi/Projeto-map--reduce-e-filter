const students = [
    { name: 'Rodolfo', testGrade: 7},
    { name: 'Maria', testGrade: 5},
    { name: 'Joao', testGrade: 8},
    { name: 'Bruno', testGrade: 9},
    { name: 'Carla', testGrade: 3},
    { name: 'Ana', testGrade: 2},
    { name: 'Julio', testGrade: 10}
]

const newStudents = students.map( item => {
    const approval = {
        name: item.name,
        testGrade: item.testGrade,
        result: item.testGrade >= 6 ? 'Aprovado' : 'Reprovado'
    }

    return approval
})

console.log(newStudents)