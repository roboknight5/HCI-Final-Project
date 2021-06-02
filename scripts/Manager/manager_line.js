
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


function changeAssignedTech(eng_input,tech_input,eng_output,tech_output,status_label,status,button,icon,progress_bar){
    if (eng_input=='null'){
        eng_input='Unassigned'
        if (status_label.textContent=='Enabled')
            changeStatus('Disabled',status_label,button,icon,progress_bar)
    }

    if (tech_input=='null'){
    tech_input='Unassigned'
    if (status_label.textContent=='Enabled')
        changeStatus('Disabled',status_label,button,icon,progress_bar)
    }

    if (status=='Enabled' || status=='Disabled'||status=='Requires Maintenance')
    changeStatus(status,status_label,button,icon,progress_bar)
    eng_output.textContent=eng_input
    tech_output.textContent=tech_input

}

window.onload=()=>{
    //Line 1 
    const assign_btn_1=document.getElementById('assign-btn-1')

    const engineer_input_1=document.getElementById('engineer-select-1')

    const technician_input_1=document.getElementById('technician-select-1')

    const engineer_name_1=document.getElementById('engineer-name-1')

    const technician_name_1=document.getElementById('technician-name-1')

    const status_1=document.getElementById('line-status-1')

    const line_button_1=document.getElementById('line-button-1')
    const line_icon_1=document.getElementById('line-icon-1')

    const progress_bar_1=document.getElementById('progress-bar-1')


    assign_btn_1.addEventListener('click',()=>changeAssignedTech(engineer_input_1.value,technician_input_1.value,engineer_name_1,technician_name_1,status_1,'',line_button_1,line_icon_1,progress_bar_1))

    engineer_input_1.value=engineer_name_1.textContent
    technician_input_1.value=technician_name_1.textContent


    engineer_input_1.value='null'
    technician_input_1.value='null'
    changeAssignedTech(engineer_input_1.value,technician_input_1.value,engineer_name_1,technician_name_1,status_1,'',line_button_1,line_icon_1,progress_bar_1)
    
    

    //Line 2
    
    const assign_btn_2=document.getElementById('assign-btn-2')

    const engineer_input_2=document.getElementById('engineer-select-2')

    const technician_input_2=document.getElementById('technician-select-2')

    const engineer_name_2=document.getElementById('engineer-name-2')

    const technician_name_2=document.getElementById('technician-name-2')

    const status_2=document.getElementById('line-status-2')

    const line_button_2=document.getElementById('line-button-2')
    const line_icon_2=document.getElementById('line-icon-2')

    const progress_bar_2=document.getElementById('progress-bar-2')

    assign_btn_2.addEventListener('click',()=>changeAssignedTech(engineer_input_2.value,technician_input_2.value,engineer_name_2,technician_name_2,status_2,'',line_button_2,line_icon_2,progress_bar_2))

    engineer_input_2.value=engineer_name_2.textContent
    technician_input_2.value=technician_name_2.textContent
    // const assign_btn_2=document.getElementById('line-enabled-btn-2')

    //Line 3

    const assign_btn_3=document.getElementById('assign-btn-3')

    const engineer_input_3=document.getElementById('engineer-select-3')

    const technician_input_3=document.getElementById('technician-select-3')

    const engineer_name_3=document.getElementById('engineer-name-3')

    const technician_name_3=document.getElementById('technician-name-3')

    const status_3=document.getElementById('line-status-3')

    const line_button_3=document.getElementById('line-button-3')
    const line_icon_3=document.getElementById('line-icon-3')

    const progress_bar_3=document.getElementById('progress-bar-3')


    assign_btn_3.addEventListener('click',()=>changeAssignedTech(engineer_input_3.value,technician_input_3.value,engineer_name_3,technician_name_3,status_3,'',line_button_3,line_icon_3,progress_bar_3))

    engineer_input_3.value=engineer_name_3.textContent
    technician_input_3.value=technician_name_3.textContent




    // const assign_btn_3=document.getElementById('line-enabled-btn-3')




    const clock=document.getElementById('clock')
    clock.value=moment(new Date()).format('YYYY-MM-DDTHH:mm')
    setInterval(()=>clock.value=moment(new Date()).format('YYYY-MM-DDTHH:mm'),1000)
    

}

