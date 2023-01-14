//휴대전화 입력 : 3-4-4, 입력완료 시 커서 이동
const changeFocus1 = () => {
    let phone1 = document.getElementById("p1").value
    if(phone1.length ===3){
        document.getElementById("p2").focus()
    }
}

const changeFocus2 = () => {
    let phone2 = document.getElementById("p2").value
    if(phone2.length ===4){
        document.getElementById("p3").focus()
    }
}

//인증번호 전송 버튼 
const activate_trans_button=()=>{
    let phone3 = document.getElementById("p3").value
    if(phone3.length===4){
        document.getElementById("trans_button").disabled=false;
    }
}

let isStarted = false;

let transfer = () => {

    if(isStarted===false){
        // 타이머가 작동 x
        isStarted=true
        original_token=document.getElementById("trans_num").innerText
        document.getElementById("complite").disabled=false
        const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        document.getElementById("trans_num").innerText =token
        document.getElementById("trans_num").style.color = "#"+token

        let time = 2
        let timer
        timer = setInterval(function(){
            if(time>=0){
                let min = Math.floor(time/60)
                let sec = String(time%60).padStart(2,"0")
                document.getElementById("timer").innerText = min+":"+sec            
                time = time-1
            } else{
                document.getElementById("complite").disabled=true
                isStarted=false
                clearInterval(timer)
                document.getElementById("trans_num").innerText=original_token
                document.getElementById("trans_num").style.color="#0068FF"
            }
        },1000)

    }else{
        // 타이머가 작동 중
    }
}

//인증완료
const submit = () => {
    alert("인증이 완료되었습니다");
    //join버튼 활성화
    document.getElementById("trans_button").disabled=true;
    document.getElementById("complite").disabled=true
    document.getElementById("join_button").disabled=false
}

//가입하기
const join = () => {
    /*
    입력창 모두 입력인지 확인 내림차순으로=> 입력 오류시 오류 메시지
    */

    let validation = true

    //이메일 입력여부, @포함 여부 확인
    let email = document.getElementById("email").value
    if(email === "" || !email.includes('@')){
        document.getElementById("email_error").innerText="이메일이 올바르지 않습니다."
        validation = false
    }else{
        document.getElementById("email_error").innerText=""
    }

    //이름 입력 여부 확인
    let name = document.getElementById("name").value
    if(name === ""){
        document.getElementById("name_error").innerText="이름이 올바르지 않습니다."
        validation = false
    }else{
        document.getElementById("name_error").innerText=""
    }

    //pw1입력여부 확인 => pw2입력여부 확인
    let pw1 = document.getElementById("pw1").value
    if(pw1 === ""){
        document.getElementById("pw1_error").innerText="비밀번호를 입력해주세요."
        validation = false
    }else{
        document.getElementById("pw1_error").innerText=""
    }
    let pw2 = document.getElementById("pw2").value
    if(pw2 === ""){
        document.getElementById("pw2_error").innerText="비밀번호를 입력해주세요."
        validation = false
    }else{
        document.getElementById("pw2_error").innerText=""
    }

    //pw1===pw2 확인
    if(pw1 !== pw2){
        document.getElementById("pw2_error").innerText="비밀번호가 일치하지 않습니다."
        validation = false
    }else{
        document.getElementById("pw2_error").innerText=""
    }

    //지역 선택 여부 확인
    let location = document.getElementById("location").value
    if(location !== "서울"&&location !== "경기"&&location !== "인천"){
        document.getElementById("location_error").innerText="장소를 선택해주세요."
        validation = false
    }else{
        document.getElementById("location_error").innerText=""
    }

    //성별 선택여부 확인
    if(!document.getElementById("female").checked && !document.getElementById("male").checked){
        document.getElementById("gender_error").innerText="성별을 선택해주세요."
        validation = false
    }else{
        document.getElementById("gender_error").innerText=""
    } 

    if(validation){
        //입력 조건 충족
        alert("회원가입이 완료되었습니다!")
    }
}