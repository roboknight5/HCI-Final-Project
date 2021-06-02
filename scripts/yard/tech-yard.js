function changeStatus(status,status_label,line_button,icon){

    let button_color
            switch (status) {
                case 'Enabled':
                    button_color='btn-success'
                    icon.className='bi bi-check'
    
                    icon.style.fontSize='70px'
                    icon.style.position='relative'
                    icon.style.top='-5px'
                    
                    break
                case 'Disabled':
                    button_color='btn-danger'
                    icon.className='bi bi-exclamation-triangle-fill'
    
                    icon.style.fontSize='40px'
                    icon.style.position='relative'
                    icon.style.top='-6px'
                    break
                case 'Requires Maintenance':
                    button_color='btn-warning'
                    icon.className='bi bi-x-octagon-fill'
    
                    icon.style.fontSize='40px'
                    icon.style.position='relative'
                    icon.style.top='-7px'
                    break
                default:
                    break;
            }
            line_button.className=`btn ${button_color} circle border border-dark`
            status_label.textContent=`${status}`


}



window.onload=()=>{
    //Line 1 
    const enable_btn_1=document.getElementById('line-enabled-btn-1')
    const rq_btn_1=document.getElementById('line-rq-btn-1')
    const disabled_btn_1=document.getElementById('line-disabled-btn-1')

    const status_1=document.getElementById('line-status-1')

    const line_button_1=document.getElementById('line-button-1')
    const line_icon_1=document.getElementById('line-icon-1')

    enable_btn_1.addEventListener('click',()=>changeStatus('Enabled',status_1,line_button_1,line_icon_1))
    rq_btn_1.addEventListener('click',()=>changeStatus('Requires Maintenance',status_1,line_button_1,line_icon_1))
    disabled_btn_1.addEventListener('click',()=>changeStatus('Disabled',status_1,line_button_1,line_icon_1))
    
    //Line 2
    const enable_btn_2=document.getElementById('line-enabled-btn-2')
    const rq_btn_2=document.getElementById('line-rq-btn-2')
    const disabled_btn_2=document.getElementById('line-disabled-btn-2')

    const status_2=document.getElementById('line-status-2')

    const line_button_2=document.getElementById('line-button-2')
    const line_icon_2=document.getElementById('line-icon-2')

    enable_btn_2.addEventListener('click',()=>changeStatus('Enabled',status_2,line_button_2,line_icon_2))
    rq_btn_2.addEventListener('click',()=>changeStatus('Requires Maintenance',status_2,line_button_2,line_icon_2))
    disabled_btn_2.addEventListener('click',()=>changeStatus('Disabled',status_2,line_button_2,line_icon_2))

    //Line 3
    const enable_btn_3=document.getElementById('line-enabled-btn-3')
    const rq_btn_3=document.getElementById('line-rq-btn-3')
    const disabled_btn_3=document.getElementById('line-disabled-btn-3')

    const status_3=document.getElementById('line-status-3')

    const line_button_3=document.getElementById('line-button-3')
    const line_icon_3=document.getElementById('line-icon-3')

    enable_btn_3.addEventListener('click',()=>changeStatus('Enabled',status_3,line_button_3,line_icon_3))
    rq_btn_3.addEventListener('click',()=>changeStatus('Requires Maintenance',status_3,line_button_3,line_icon_3))
    disabled_btn_3.addEventListener('click',()=>changeStatus('Disabled',status_3,line_button_3,line_icon_3))

}