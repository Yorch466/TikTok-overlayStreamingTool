// *Tenés el siguiente arreglo de objetos que representan estudiantes:

/*

Crear una función que reciba este arreglo.

Clasificar cada estudiante como "Reprobado" o "Aprobado" (60 o más es aprobado).

Crear un nuevo arreglo de objetos que contenga:

name → nombre del estudiante

status → "Aprobado" o "Reprobado"

Solo devolver los estudiantes aprobados.

*/

const students = [
  { name: "Ana", score: 45 },
  { name: "Luis", score: 82 },
  { name: "Sofia", score: 67 },
  { name: "Pedro", score: 38 },
  { name: "Jorge", score: 90 }
];


const studentsFilter = (students) => {
    const studentsComparator = students.map(student => ({
        name: student.name,
        status: (student.score >= 60 ? "Aprobado" : "Reprobado" )
    }));

    const aproovedStudents = studentsComparator.filter(student => student.status === "Aprobado")

    return aproovedStudents;
}

console.log(studentsFilter(students))