
function insertTask(){
    const description=document.getElementById('description-table').value

    const date=document.getElementById('date-table').value

    const line_yard_no_val=document.getElementById('number-table').value

    const notes=document.getElementById('notes-table').value

    const assigned_to_val=document.getElementById('assigned-to-select').value

    if (assigned_to_val=='Select Technician') return

    var tbodyRef = document.getElementById('task-table').getElementsByTagName('tbody')[0];
    const row=tbodyRef.insertRow()
    let count =tbodyRef.rows.length
    

    const task_number=document.createElement('th')
    task_number.innerHTML=count
    task_number.scope='row'

    row.appendChild(task_number)

    const task_description=row.insertCell()
    const description_text=document.createElement('div')
    description_text.style.maxWidth='500px'
    description_text.style.maxHeight='100px'
    description_text.style.overflowY='auto   '
    description_text.textContent=description
    task_description.appendChild(description_text)

    const task_due_date=row.insertCell()
    task_due_date.innerHTML=date

    const task_notes=row.insertCell()
    const note_text=document.createElement('div')
    note_text.style.maxWidth='300px'
    note_text.style.maxHeight='100px'
    note_text.style.overflowY='auto   '
    note_text.textContent=notes
    task_notes.appendChild(note_text)

    const assigned_to=row.insertCell()
    assigned_to.style.maxWidth='40px'
    assigned_to.style.overflow='auto'
    assigned_to.style.whiteSpace='nowrap'
    assigned_to.textContent=assigned_to_val

    const line_yard_no=row.insertCell()
    line_yard_no.style.maxWidth='40px'
    line_yard_no.style.overflow='auto'
    line_yard_no.style.whiteSpace='nowrap'
    line_yard_no.textContent=line_yard_no_val
    
    const status=row.insertCell()
    status.textContent="In Progress"


    // cell2.innerHTML='5050500000000'
}


window.onload=()=>{


    const date=document.getElementById('date-table')
    date.min=new Date().toISOString().split("T")[0];



    const task_form=document.getElementById('task-form')
    task_form.addEventListener('submit',(e)=>{e.preventDefault(); insertTask()})

    const progress_text=document.getElementById('progress-1')
    const progress_btn=document.getElementById('progress-btn-1')
    progress_btn.addEventListener('click',()=>{
        progress_text.textContent='Complete'

    })

    const progress_text_2=document.getElementById('progress-2')
    const progress_btn_2=document.getElementById('progress-btn-2')
    progress_btn_2.addEventListener('click',()=>{
        progress_text_2.textContent='Complete'

    })


    const clock=document.getElementById('clock')
    clock.value=moment(new Date()).format('YYYY-MM-DDTHH:mm')
    setInterval(()=>clock.value=moment(new Date()).format('YYYY-MM-DDTHH:mm'),1000)

    

}