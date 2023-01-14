let persons = [
    {name:"철수",age: 17},
    {name:"영희",age: 22},
    {name:"은비",age: 1},
    {name:"도우너",age: 50},
    {name:"배고파",age: 1}
]
// undefined
for(let count=0; count<persons.length; count++){
    if(persons[count].age>=19){
        console.log("성인")
    } else {
        console.log("미자")
    }
}
// VM3010:5 미자
// VM3010:3 성인
// VM3010:5 미자
// VM3010:3 성인
// VM3010:5 미자
undefined
for(let count=0; count<persons.length; count++){
    if(persons[count].age>=19){
        console.log(persons[count].name+"님은 성인")
    } else {
        console.log(persons[count].name+"님은 미자")
    }
}
// VM3193:5 철수님은 미자
// VM3193:3 영희님은 성인
// VM3193:5 은비님은 미자
// VM3193:3 도우너님은 성인
// VM3193:5 배고파님은 미자