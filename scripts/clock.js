window.onload=()=>{

    const clock=document.getElementById('clock')
    clock.value=moment(new Date()).format('YYYY-MM-DDTHH:mm')
    setInterval(()=>clock.value=moment(new Date()).format('YYYY-MM-DDTHH:mm'),1000)
}