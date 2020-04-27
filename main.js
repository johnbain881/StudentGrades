const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    f: 0
} // You'll need to change this line of code

for (let i = 0; i < scores.length; i++) {
    switch(scores[i]) {
        case 100:
        case 99:
        case 98:
        case 97:
        case 96:
        case 95:
        case 94:
        case 93:
        case 92:
        case 91:
            grades.a++;
            break;
        case 90:
        case 89:
        case 88:
        case 87:
        case 86:
        case 85:
        case 84:
        case 83:
        case 82:
        case 81:
            grades.b++;
            break;
        case 80:
        case 79:
        case 78:
        case 77:
        case 76:
        case 75:
        case 74:
        case 73:
        case 72:
        case 71:
            grades.c++;
            break;
        case 70:
        case 69:
        case 68:
        case 67:
        case 66:
        case 65:
        case 64:
        case 63:
        case 62:
        case 61:
            grades.d++;
            break;
        case 60:
        case 59:
        case 58:
        case 57:
        case 56:
        case 55:
        case 54:
        case 53:
        case 52:
        case 51:
        case 50:
            grades.f++;
            break;
        default:
            console.log("error")
            break;
    }
}
console.log(grades)
scores.sort()
console.log(scores[0])
console.log(scores[scores.length - 1])
let currentGradeCount = grades.a;
let mostScoredGrades = []
keys = Object.keys(grades)
for (let i = 0; i < keys.length; i++) {
    if (currentGradeCount < grades[keys[i]]) {
        currentGradeCount = grades[keys[i]]
        mostScoredGrades = [keys[i]]
    } else if (currentGradeCount === grades[keys[i]]){
        mostScoredGrades.push(keys[i])
    }
    console.log(currentGradeCount)
    console.log(mostScoredGrades)
}
let leastScoredGrades = []
for (let i = 0; i < keys.length; i++) {
    if (currentGradeCount > grades[keys[i]]) {
        currentGradeCount = grades[keys[i]]
        leastScoredGrades = [keys[i]]
    } else if (currentGradeCount === grades[keys[i]]){
        leastScoredGrades.push(keys[i])
    }
    console.log(currentGradeCount)
    console.log(leastScoredGrades)
}