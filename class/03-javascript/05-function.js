let isStarted = false;

let transfer = () => {

    if(isStarted===false){
        // 타이머가 작동 x
        isStarted=true
        document.getElementById("complite").disabled=false
        const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        document.getElementById("num").innerText =token
        document.getElementById("num").style.color = "#"+token

        let time = 10
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
            }
        },1000)

    }else{
        // 타이머가 작동 중

    }

    

}

