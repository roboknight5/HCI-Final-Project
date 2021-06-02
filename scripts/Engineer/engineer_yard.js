function changeStatus(status,status_label,line_button,icon,progress_bar){

    let button_color
    let progess_color
    switch (status) {
        case 'Enabled':
            button_color='btn-success'
            progess_color='bg-success'
            icon.className='bi bi-check'

            icon.style.fontSize='110px'
            icon.style.position='relative'
            icon.style.top='-5px'
            icon.style.left='-18px'

            
            break
        case 'Disabled':
            button_color='btn-danger'
            progess_color='bg-danger'

            icon.className='bi bi-exclamation-triangle-fill'

            icon.style.fontSize='70px'
            icon.style.position='relative'
            icon.style.top='-12px'
            icon.style.left='0px'

            break
        case 'Requires Maintenance':
            button_color='btn-warning'
            progess_color='bg-warning'

            icon.className='bi bi-x-octagon-fill'

            icon.style.fontSize='70px'
            icon.style.position='relative'
            icon.style.top='-7px'
            icon.style.left='0px'

            break
        default:
            break;
    }
            line_button.className=`btn ${button_color} circle border border-dark`
            progress_bar.className=`progress-bar progress-bar-animated ${progess_color} progress-bar-striped`
            status_label.textContent=`${status}`
}



window.onload=()=>{
    //Line 1 
    const enable_btn_1=document.getElementById('yard-enabled-btn-1')
    const rq_btn_1=document.getElementById('yard-rq-btn-1')
    const disabled_btn_1=document.getElementById('yard-disabled-btn-1')

    const status_1=document.getElementById('yard-status-1')

    const line_button_1=document.getElementById('yard-button-1')
    const line_icon_1=document.getElementById('yard-icon-1')

    const progress_bar_1=document.getElementById('progress-bar-1')

    enable_btn_1.addEventListener('click',()=>changeStatus('Enabled',status_1,line_button_1,line_icon_1,progress_bar_1))
    rq_btn_1.addEventListener('click',()=>changeStatus('Requires Maintenance',status_1,line_button_1,line_icon_1,progress_bar_1))
    disabled_btn_1.addEventListener('click',()=>changeStatus('Disabled',status_1,line_button_1,line_icon_1,progress_bar_1))
    
    //Line 2
    const enable_btn_2=document.getElementById('yard-enabled-btn-2')
    const rq_btn_2=document.getElementById('yard-rq-btn-2')
    const disabled_btn_2=document.getElementById('yard-disabled-btn-2')

    const status_2=document.getElementById('yard-status-2')

    const line_button_2=document.getElementById('yard-button-2')
    const line_icon_2=document.getElementById('yard-icon-2')

    const progress_bar_2=document.getElementById('progress-bar-2')


    enable_btn_2.addEventListener('click',()=>changeStatus('Enabled',status_2,line_button_2,line_icon_2,progress_bar_2))
    rq_btn_2.addEventListener('click',()=>changeStatus('Requires Maintenance',status_2,line_button_2,line_icon_2,progress_bar_2))
    disabled_btn_2.addEventListener('click',()=>changeStatus('Disabled',status_2,line_button_2,line_icon_2,progress_bar_2))

    //Line 3
    const enable_btn_3=document.getElementById('yard-enabled-btn-3')
    const rq_btn_3=document.getElementById('yard-rq-btn-3')
    const disabled_btn_3=document.getElementById('yard-disabled-btn-3')

    const status_3=document.getElementById('yard-status-3')

    const line_button_3=document.getElementById('yard-button-3')
    const line_icon_3=document.getElementById('yard-icon-3')

    const progress_bar_3=document.getElementById('progress-bar-3')


    enable_btn_3.addEventListener('click',()=>changeStatus('Enabled',status_3,line_button_3,line_icon_3,progress_bar_3))
    rq_btn_3.addEventListener('click',()=>changeStatus('Requires Maintenance',status_3,line_button_3,line_icon_3,progress_bar_3))
    disabled_btn_3.addEventListener('click',()=>changeStatus('Disabled',status_3,line_button_3,line_icon_3,progress_bar_3))


    const clock=document.getElementById('clock')
    clock.value=moment(new Date()).format('YYYY-MM-DDTHH:mm')
    setInterval(()=>clock.value=moment(new Date()).format('YYYY-MM-DDTHH:mm'),1000)
}

