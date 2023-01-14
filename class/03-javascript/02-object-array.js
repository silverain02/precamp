const fruits =[
    {number:1, title:"������"},
    {number:2, title:"���θӽ�Ĺ"},
    {number:3, title:"��û����"},
    {number:4, title:"�Ѷ��"},
    {number:5, title:"���"},
    {number:6, title:"���ø���"},
    {number:7, title:"����"},
    {number:8, title:"õ����"},
    {number:9, title:"���ϼ�����Ʈ"},
    {number:10, title:"��"}
]
// undefined
fruits[0].number+" "+fruits[0].title
// '1 ������'
fruits[1].number+" "+fruits[1].title
// '2 ���θӽ�Ĺ'

for(let i=0; i<fruits.length;i++){
    console.log(fruits[i].number+" "+fruits[i].title);
}

for(let i=0; i<fruits.length;i++){
    console.log(`${fruits[i].number} ${fruits[i].title}`);
}
// VM3797:2 1 ������
// VM3797:2 2 ���θӽ�Ĺ
// VM3797:2 3 ��û����
// VM3797:2 4 �Ѷ��
// VM3797:2 5 ���
// VM3797:2 6 ���ø���
// VM3797:2 7 ����
// VM3797:2 8 õ����
// VM3797:2 9 ���ϼ�����Ʈ
// VM3797:2 10 ��