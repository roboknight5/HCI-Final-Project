
export default class line_control{

    constructor(yardData){
    
        this.yardData=yardData
        this.init(yardData.line_no,yardData.status,yardData.assigned_tech)
    }
    init(line_no,status,assigned_tech){
        let button_color
        this.icon=document.createElement('i')
    
            switch (status) {
                case 'Enabled':
                    button_color='btn-success'
                    this.icon.className='bi bi-check'
    
                    this.icon.style.fontSize='70px'
                    this.icon.style.position='relative'
                    this.icon.style.top='-5px'
                    break
                case 'Disabled':
                    button_color='btn-danger'
                    this.icon.className='bi bi-exclamation-triangle-fill'
    
                    this.icon.style.fontSize='40px'
                    this.icon.style.position='relative'
                    this.icon.style.top='-6px'
                    break
                case 'Requires Maintenance':
                    button_color='btn-warning'
                    this.icon.className='bi bi-x-octagon-fill'
    
                    this.icon.style.fontSize='40px'
                    this.icon.style.position='relative'
                    this.icon.style.top='-7px'
                    break
                default:
                    break;
            }
    
            const div_container=document.createElement('div')
            div_container.className='p-3 my-3 border rounded'
            
            this.line_label=document.createElement('h5')
            this.line_label.textContent=`Yard ${line_no} Control`
            div_container.appendChild(this.line_label)
    
            const info_container=document.createElement('div')
            info_container.style.display='flex'
            
            this.circle_container=document.createElement('div')
    
            this.circle_container.className=`btn ${button_color} circle`
            this.circle_container.appendChild(this.icon)
            info_container.appendChild(this.circle_container)
            
            const info_text_1=document.createElement('div')
            info_text_1.style.display='block'
            info_text_1.className='my-2'
    
            this.line_no_h6=document.createElement('h6')
            this.line_no_h6.className='py-1'
            this.line_no_h6.textContent=`Yard No: ${line_no}`
  
    
            this.status_h6=document.createElement('h6')
            this.status_h6.className='py-1'
            this.status_h6.textContent=`Status: ${status}`
    
            
            info_text_1.appendChild(this.line_no_h6)
            info_text_1.appendChild(this.status_h6)
    
            info_container.appendChild(info_text_1)
    
    
    

    
            this.assigned_tech_h6=document.createElement('h6')
            this.assigned_tech_h6.className='py-1'
            this.assigned_tech_h6.textContent=`Assigned Technician:${assigned_tech}`
    
            info_text_1.appendChild(this.assigned_tech_h6)
    
    
            this.enable_btn=document.createElement('button')
            this.enable_btn.className='btn btn-success mx-1'
            this.enable_btn.textContent='Enable'
            this.enable_btn.addEventListener('click',()=>this.changeStatus('Enabled'))
    
            this.disable_btn=document.createElement('button')
            this.disable_btn.className='btn btn-danger mx-1'
            this.disable_btn.textContent='Disabled'
            this.disable_btn.addEventListener('click',()=>this.changeStatus('Disabled'))
    
            this.maintenance_btn=document.createElement('button')
            this.maintenance_btn.className='btn btn-warning mx-1'
            this.maintenance_btn.textContent='Requires Maintenance'
            this.maintenance_btn.addEventListener('click',()=>this.changeStatus('Requires Maintenance'))
    
    
    
    
            div_container.appendChild(info_container)
            div_container.appendChild(this.enable_btn)
            div_container.appendChild(this.maintenance_btn)
    
            div_container.appendChild(this.disable_btn)
    
    
            const main=document.getElementById("main")
            main.appendChild(div_container)
    }

    changeStatus(status){
        let button_color
        switch (status) {
            case 'Enabled':
                button_color='btn-success'
                this.icon.className='bi bi-check'

                this.icon.style.fontSize='70px'
                this.icon.style.position='relative'
                this.icon.style.top='-5px'
                
                break
            case 'Disabled':
                button_color='btn-danger'
                this.icon.className='bi bi-exclamation-triangle-fill'

                this.icon.style.fontSize='40px'
                this.icon.style.position='relative'
                this.icon.style.top='-6px'
                break
            case 'Requires Maintenance':
                button_color='btn-warning'
                this.icon.className='bi bi-x-octagon-fill'

                this.icon.style.fontSize='40px'
                this.icon.style.position='relative'
                this.icon.style.top='-7px'
                break
            default:
                break;
        }
        this.circle_container.className=`btn ${button_color} circle`
        this.status_h6.textContent=`Status: ${status}`
        this.yardData.status=status
    }

    changeLineNo(line_no){
        this.line_no_h6.textContent=`Line No: ${line_no}`
        this.yardData.line_no=line_no
    }
    changeLineType(line_type){
        this.line_type_h6.textContent=`Line Type: ${line_type}`
        this.yardData.line_type=line_type

    }
    changeAssignedEng(assigned_eng){
        this.assigned_eng_h6.textContent=`Assigned Engineer: ${assigned_eng}`
        this.yardData.assigned_eng=assigned_eng

    }
    changeAssignedTech(assigned_tech){
        this.assigned_tech_h6.textContent=`Assigned Tech: ${assigned_tech}`
        this.yardData.assigned_tech=assigned_tech
    }

}

