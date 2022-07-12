import React, {ChangeEvent, FC, useState} from 'react';
import classes from './Todolist.module.css'
import {FilterValueIsDoneType, StagesTypeProps} from "../App";


type TodolistTypeProps = {
    stages: StagesTypeProps
    setFilter: (name: FilterValueIsDoneType) => void
    FilterStatusStages:(e:boolean,id:string)=> void
    DeleteStages:(id:string)=> void
    filter:FilterValueIsDoneType

}

export const Todolist: React.FC<TodolistTypeProps> = (
    {stages, setFilter,FilterStatusStages,DeleteStages,filter}

) => {

    const onClickFilterHandler = (name: FilterValueIsDoneType) => {
        setFilter(name)

    }

    const onChangeHandlerStatus = (e:ChangeEvent<HTMLInputElement>,id:string) => {
        FilterStatusStages(e.currentTarget.checked,id)
    }
    const onClickHandlerDelete = (id:string) => {
        DeleteStages(id)
    }

    return (
        <div className={classes.todolist}>
            <ul>
                {stages.map(s => {
                    return <li key={s.id} className={s.isDone === true? classes.ActiveStages:''}>
                        <button className={classes.button} onClick={()=>onClickHandlerDelete(s.id)}>X</button>
                        <input type='checkbox' checked={s.isDone} onChange={(e)=>onChangeHandlerStatus(e,s.id)}/>{s.title}</li>
                })}
            </ul>
            <div className={classes.buttons}>
                <button onClick={() => onClickFilterHandler("All")} className={filter === 'All'? classes.buttonActive: ''}>All</button>
                <button onClick={() => onClickFilterHandler("Complite")} className={filter === 'Complite'? classes.buttonActive: ''}>Complite</button>
                <button onClick={() => onClickFilterHandler("inProcess")} className={filter === 'inProcess'? classes.buttonActive: ''}>inProcess</button>
            </div>
        </div>
    );
};

