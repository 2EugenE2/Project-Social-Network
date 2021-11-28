import React from "react"
import { NavLink } from "react-router-dom"
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
    <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
}
const Message = (props) => {
    return (
    <div className={s.dialog}>{props.message}</div>)
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogItem name='Dimych' id='1' />
            <DialogItem name='Jenya' id='2' />
            <DialogItem name='Katya' id='3' />
            <DialogItem name='Vova' id='4' />
            <DialogItem name='Sergio' id='5' />
            <DialogItem name='Gary' id='6' />
        </div>
        <div className={s.messeges}>
            <Message message='Hey' />
            <Message message='How are you?' />
            <Message message='Yo-Yo' />
            <Message message='Have nice day' />
        </div>
        </div >
        )
}

export default Dialogs