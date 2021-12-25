import React from "react"
import s from './Dialogs.module.css'
 

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Jenya' },
        { id: 3, name: 'Katya' },
        { id: 4, name: 'Masha' },
        { id: 5, name: 'Sergio' },
        { id: 6, name: 'Gary' }
    ]

    let messagesData = [
        { id: 1, message: 'Hey' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo-Yo' },
        { id: 4, message: 'Have nice day' }
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {
                    
                }
                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} /> */}
                {/* <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} /> */}
                {/* <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} /> */}
            </div>
            <div className={s.messages}>
                {/* <Message message={messagesData[0].message}/>
            <Message message={messagesData[1].message}/> */}

            </div>
        </div >
    )
}

export default Dialogs