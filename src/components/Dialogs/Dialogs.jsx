import React from "react"
import s from './Dialogs.module.css'


const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Jenya' },
        { id: 3, name: 'Katya' },
        { id: 4, name: 'Masha' },
        { id: 5, name: 'Sergio' },
        { id: 6, name: 'Gary' }
    ]
    let messages = [
        { id: 1, message: 'Hey' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo-Yo' },
        { id: 4, message: 'Have nice day' }
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map( m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}> 
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;