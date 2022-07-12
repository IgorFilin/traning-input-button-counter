import React, {FC, useState} from 'react';
import classes from './Todolist.module.css'
import {FilterValueIsDoneType, StagesTypeProps} from "../App";


type TodolistTypeProps = {
    stages: StagesTypeProps
    setFilter: (name: FilterValueIsDoneType) => void

}

export const Todolist: React.FC<TodolistTypeProps> = ({stages, setFilter}) => {

    const onClickFilterHandler = (name: FilterValueIsDoneType) => {
        setFilter(name)

    }


    return (
        <div className={classes.todolist}>
            <ul>
                {stages.map(s => {
                    return <li key={s.id}>
                        <button className={classes.button}>X</button>
                        <input type='checkbox' checked={s.isDone}/>{s.title}</li>
                })}
            </ul>
            <div className={classes.buttons}>
                <button onClick={() => onClickFilterHandler("All")}>All</button>
                <button onClick={() => onClickFilterHandler("Complite")}>Complite</button>
                <button onClick={() => onClickFilterHandler("inProcess")}>inProcess</button>
            </div>
        </div>
    );
};

