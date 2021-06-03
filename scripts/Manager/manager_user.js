window.onload=()=>{

    const user_area=document.getElementById('user-area')


    const user_1=document.getElementById('user-1')

    const delete_btn_1=document.getElementById('delete-btn-1')
    delete_btn_1.addEventListener('click',()=>{
        user_1.remove()
        if (!user_area.contains(user_4) && !user_area.contains(user_3)
        &&!user_area.contains(user_2) &&!user_area.contains(user_1) ){

            const empty_text=document.createElement('h2')
            empty_text.textContent='No Users in System'
            empty_text.className='text-center'
            user_area.appendChild(empty_text)
        }
    })

    const user_2=document.getElementById('user-2')

    const delete_btn_2=document.getElementById('delete-btn-2')
    delete_btn_2.addEventListener('click',()=>{
        user_2.remove()
        if (!user_area.contains(user_4) && !user_area.contains(user_3)
        &&!user_area.contains(user_2) &&!user_area.contains(user_1) ){

            const empty_text=document.createElement('h2')
            empty_text.textContent='No Users in System'
            empty_text.className='text-center'
            user_area.appendChild(empty_text)
        }
    })

    const user_3=document.getElementById('user-3')

    const delete_btn_3=document.getElementById('delete-btn-3')
    delete_btn_3.addEventListener('click',()=>{
        user_3.remove()
        if (!user_area.contains(user_4) && !user_area.contains(user_3)
        &&!user_area.contains(user_2) &&!user_area.contains(user_1) ){

            const empty_text=document.createElement('h2')
            empty_text.textContent='No Users in System'
            empty_text.className='text-center'
            console.log('done')
            user_area.appendChild(empty_text)
        }
    })
    
    const user_4=document.getElementById('user-4')

    const delete_btn_4=document.getElementById('delete-btn-4')
    delete_btn_4.addEventListener('click',()=>{
        user_4.remove()
        if (!user_area.contains(user_4) && !user_area.contains(user_3)
        &&!user_area.contains(user_2) &&!user_area.contains(user_1) ){

            const empty_text=document.createElement('h2')
            empty_text.textContent='No Users in System'
            empty_text.className='text-center'
            user_area.appendChild(empty_text)
        }

    })


    




    const clock=document.getElementById('clock')
    clock.value=moment(new Date()).format('YYYY-MM-DDTHH:mm')
    setInterval(()=>clock.value=moment(new Date()).format('YYYY-MM-DDTHH:mm'),1000)
}