let persons = [
    {name:"ö��",age: 17},
    {name:"����",age: 22},
    {name:"����",age: 1},
    {name:"�����",age: 50},
    {name:"�����",age: 1}
]
// undefined
for(let count=0; count<persons.length; count++){
    if(persons[count].age>=19){
        console.log("����")
    } else {
        console.log("����")
    }
}
// VM3010:5 ����
// VM3010:3 ����
// VM3010:5 ����
// VM3010:3 ����
// VM3010:5 ����
undefined
for(let count=0; count<persons.length; count++){
    if(persons[count].age>=19){
        console.log(persons[count].name+"���� ����")
    } else {
        console.log(persons[count].name+"���� ����")
    }
}
// VM3193:5 ö������ ����
// VM3193:3 ������� ����
// VM3193:5 ������� ����
// VM3193:3 ����ʴ��� ����
// VM3193:5 ����Ĵ��� ����