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



function changeAssignedTech(worker_input,tech_input,worker_output,tech_output,status_label,status,button,icon,progress_bar){
    console.log(worker_input)

    if (worker_input=='null' ){
        worker_input='Unassigned'
        if (status_label.textContent=='Enabled')
            changeStatus('Disabled',status_label,button,icon,progress_bar)
    }

    if (tech_input=='null'){
    tech_input='Unassigned'
    if (status_label.textContent=='Enabled')
        changeStatus('Disabled',status_label,button,icon,progress_bar)

    }

    if (status=='Enabled' || status=='Disabled'||status=='Requires Maintenance'){
    changeStatus(status,status_label,button,icon,progress_bar)
    }
    worker_output.textContent=worker_input
    tech_output.textContent=tech_input

}

window.onload=()=>{
    //yard 1 
    const assign_btn_1=document.getElementById('assign-btn-1')

    const worker_input_1=document.getElementById('worker-select-1')

    const technician_input_1=document.getElementById('technician-select-1')

    const worker_name_1=document.getElementById('worker-name-1')

    const technician_name_1=document.getElementById('technician-name-1')

    const status_1=document.getElementById('yard-status-1')

    const yard_button_1=document.getElementById('yard-button-1')
    const yard_icon_1=document.getElementById('yard-icon-1')

    const progress_bar_1=document.getElementById('progress-bar-1')

 

    assign_btn_1.addEventListener('click',()=>changeAssignedTech(worker_input_1.value,technician_input_1.value,worker_name_1,technician_name_1,status_1,'',yard_button_1,yard_icon_1,progress_bar_1))
    // technician_input_1.value=null
    // worker_input_1.value=null
    // changeAssignedTech(worker_input_1,technician_input_1 ,worker_name_1,technician_name_1,status_1,yard_button_1,yard_icon_1)

    technician_input_1.value=technician_name_1.textContent
    worker_input_1.value=worker_name_1.textContent
    technician_input_1.value='null'
    worker_input_1.value='null'
    changeAssignedTech(worker_input_1.value,technician_input_1.value ,worker_name_1,technician_name_1,status_1,'Requires Maintenance',yard_button_1,yard_icon_1,progress_bar_1)



    

    //yard 2
    
    const assign_btn_2=document.getElementById('assign-btn-2')

    const worker_input_2=document.getElementById('worker-select-2')

    const technician_input_2=document.getElementById('technician-select-2')

    const worker_name_2=document.getElementById('worker-name-2')

    const technician_name_2=document.getElementById('technician-name-2')

    const status_2=document.getElementById('yard-status-2')

    const yard_button_2=document.getElementById('yard-button-2')
    const yard_icon_2=document.getElementById('yard-icon-2')

    const progress_bar_2=document.getElementById('progress-bar-2')


    assign_btn_2.addEventListener('click',()=>changeAssignedTech(worker_input_2.value,technician_input_2.value,worker_name_2,technician_name_2,status_2,'',yard_button_2,yard_icon_2,progress_bar_2))

    technician_input_2.value=technician_name_2.textContent
    worker_input_2.value=worker_name_2.textContent



    // const assign_btn_2=document.getElementById('yard-enabled-btn-2')

    //yard 3

    const assign_btn_3=document.getElementById('assign-btn-3')

    const worker_input_3=document.getElementById('worker-select-3')

    const technician_input_3=document.getElementById('technician-select-3')

    const worker_name_3=document.getElementById('worker-name-3')

    const technician_name_3=document.getElementById('technician-name-3')

    const status_3=document.getElementById('yard-status-3')

    const yard_button_3=document.getElementById('yard-button-3')
    const yard_icon_3=document.getElementById('yard-icon-3')

    const progress_bar_3=document.getElementById('progress-bar-3')


    assign_btn_3.addEventListener('click',()=>changeAssignedTech(worker_input_3.value,technician_input_3.value,worker_name_3,technician_name_3,status_3,'',yard_button_3,yard_icon_3,progress_bar_3))

    technician_input_3.value=technician_name_3.textContent
    worker_input_3.value=worker_name_3.textContent



    // const assign_btn_3=document.getElementById('yard-enabled-btn-3')


    const clock=document.getElementById('clock')
    clock.value=moment(new Date()).format('YYYY-MM-DDTHH:mm')
    setInterval(()=>clock.value=moment(new Date()).format('YYYY-MM-DDTHH:mm'),1000)



}

