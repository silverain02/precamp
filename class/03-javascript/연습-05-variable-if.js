// ������ Ÿ�� ������ �ǽ�

1 + 1
// 2
1+ "����"
// '1����'
1+"1"
// '11'
1-"1"
// 0
"�ڵ�"+"ķ��"
// '�ڵ�ķ��'
"123" == 123
// true
"123"===123
// false
true && true
// true
true && false
// false
false || true
// true
!false 
// true
!true
// false

//���ǹ� �ǽ� 1
if(1+1===2){
    console.log("����")
} else{
    console.log("Ʋ��")
}
// VM712:2 ����
// undefined
if(true){
    console.log("����")
} else{
    console.log("Ʋ��")
}
// VM780:2 ����
// undefined
if(0){
    console.log("����")
} else{
    console.log("Ʋ��")
}

//���ǹ� �ǽ�2
const profile = {
    name:"ö��",
    age: 12,
    school: "�ٶ�����"
}
if(profile.age>=20){
    console.log("����")
} else if(profile.age>=8){
    console.log("�л�")
} else {
    console.log("���")
}
// VM1595:4 �л�
if(profile.age>=20){
    console.log("����")
} else if(profile.age>=8){
    console.log("�л�")
} else if(profile.age>8){
    console.log("���")
}
else{
    console.log("�߸��Է�")
}