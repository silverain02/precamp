const submit_text=()=>{
    let input_text = document.getElementById("todo_text").value
    let t1 = document.getElementById("t1").innerText
    let t2 = document.getElementById("t2").innerText
    let t3 = document.getElementById("t3").innerText
    let t4 = document.getElementById("t4").innerText
    let t5 = document.getElementById("t5").innerText

    //t1부터 내림차순으로 비어있는 곳에 입력
    if(t1===""){
        document.getElementById("t1").innerText=input_text
    }else if(t2===""){
        document.getElementById("t2").innerText=input_text
    }else if(t3===""){
        document.getElementById("t3").innerText=input_text
    }else if(t4===""){
        document.getElementById("t4").innerText=input_text
    }else if(t5===""){
        document.getElementById("t5").innerText=input_text
    }
}