import React from "react"
import {NavLink} from "react-router-dom"
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
        <NavLink to='/dialogs/1'>Dimych</NavLink>
     </div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               <DialogItem name= 'Dimych' id='1'/>

                <div className={s.dialog}>
                <NavLink to='/dialogs/2'>Jenya</NavLink>
                  
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/3">Katya</NavLink>
                   
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/4">Vova</NavLink>
                
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/5">Serj</NavLink>
                
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/6">Gary</NavLink>
                  
                </div>
            </div>
            <div className={s.messeges}>
                <div className={s.dialog}> Hey</div>
                <div className={s.dialog}> How are you?</div>
                <div className={s.dialog}> I'm Mike</div>
            </div >
        </div >
    )
}

export default Dialogs