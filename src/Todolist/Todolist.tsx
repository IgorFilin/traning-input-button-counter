import React, {ChangeEvent, FC, useState} from 'react';
import classes from './Todolist.module.css'
import {FilterValueIsDoneType, StagesTypeProps} from "../App";


type TodolistTypeProps = {
    stages: StagesTypeProps
    setFilter: (name: FilterValueIsDoneType) => void
    FilterStatusStages: (e: boolean, id: string) => void
    DeleteStages: (id: string) => void
    filter: FilterValueIsDoneType
    setStateInput: (input: string) => void
    AddNewStages: () => void
    stateInput: string
    setError: (e: string) => void
    error: string
}

export const Todolist: React.FC<TodolistTypeProps> = (
    {
        stages,
        setFilter,
        FilterStatusStages,
        DeleteStages,
        filter,
        setStateInput,
        AddNewStages,
        stateInput,
        setError,
        error
    }
) => {

    const onClickFilterHandler = (name: FilterValueIsDoneType) => {
        setFilter(name)

    }

    const onChangeHandlerStatus = (e: ChangeEvent<HTMLInputElement>, id: string) => {
        FilterStatusStages(e.currentTarget.checked, id)
    }
    const onClickHandlerDelete = (id: string) => {
        DeleteStages(id)
    }

    const onChandeAddStagHandlet = (e: ChangeEvent<HTMLInputElement>) => {
        setStateInput(e.currentTarget.value)
        setError('')

    }
    const onClickInputChangeHandler = () => {
        if (stateInput.trim() !== '' && !Number(stateInput)) {
            AddNewStages()
        } else {
            setError('Title not found')
            setStateInput('')
        }
    }

    return (
        <div className={classes.todolist}>
            <div className={classes.inputBar}><input className={error? classes.errorInput: ""} value={stateInput} onChange={onChandeAddStagHandlet}/>
                <button onClick={onClickInputChangeHandler}>+</button>
                {error && <div className={classes.error}>{error}</div>}
            </div>
            <ul>
                {stages.map(s => {
                    return <li key={s.id} className={s.isDone === true ? classes.ActiveStages : ''}>
                        <button className={classes.button} onClick={() => onClickHandlerDelete(s.id)}>X</button>
                        <input type='checkbox' checked={s.isDone}
                               onChange={(e) => onChangeHandlerStatus(e, s.id)}/>{s.title}</li>
                })}
            </ul>
            <div className={classes.buttons}>
                <button onClick={() => onClickFilterHandler("All")}
                        className={filter === 'All' ? classes.buttonActive : ''}>All
                </button>
                <button onClick={() => onClickFilterHandler("Complite")}
                        className={filter === 'Complite' ? classes.buttonActive : ''}>Complite
                </button>
                <button onClick={() => onClickFilterHandler("inProcess")}
                        className={filter === 'inProcess' ? classes.buttonActive : ''}>inProcess
                </button>
            </div>
        </div>
    );
};

