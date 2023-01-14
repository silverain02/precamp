// 데이터 타입 연산자 실습

1 + 1
// 2
1+ "만원"
// '1만원'
1+"1"
// '11'
1-"1"
// 0
"코드"+"캠프"
// '코드캠프'
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

//조건문 실습 1
if(1+1===2){
    console.log("정답")
} else{
    console.log("틀림")
}
// VM712:2 정답
// undefined
if(true){
    console.log("정답")
} else{
    console.log("틀림")
}
// VM780:2 정답
// undefined
if(0){
    console.log("정답")
} else{
    console.log("틀림")
}

//조건문 실습2
const profile = {
    name:"철수",
    age: 12,
    school: "다람쥐초"
}
if(profile.age>=20){
    console.log("성인")
} else if(profile.age>=8){
    console.log("학생")
} else {
    console.log("어린이")
}
// VM1595:4 학생
if(profile.age>=20){
    console.log("성인")
} else if(profile.age>=8){
    console.log("학생")
} else if(profile.age>8){
    console.log("어린이")
}
else{
    console.log("잘못입력")
}