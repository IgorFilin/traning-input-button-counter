import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./Counter/Counter";
import {Todolist} from "./Todolist/Todolist";
import {v1} from "uuid";

export type StagesTypeProps = Array<{ id: string, title: string, isDone: boolean }>
export type FilterValueIsDoneType = "All" | "Complite" | "inProcess"

function App() {
    let stages: StagesTypeProps = [
        {id: v1(), title: 'Monday', isDone: true},
        {id: v1(), title: 'Tuesday ', isDone: false},
        {id: v1(), title: 'Wednesday ', isDone: false},
        {id: v1(), title: 'Thursday ', isDone: false},
        {id: v1(), title: 'Friday ', isDone: false},
        {id: v1(), title: 'Saturday  ', isDone: false}
    ]
    const [stagesState, useStagesState] = useState<StagesTypeProps>(stages)
    const [filter, setFilter] = useState<FilterValueIsDoneType>('All')


    let filterStagesState = [...stagesState]


    const filterStatus = (): StagesTypeProps => {

        if (filter === "Complite") {
            return filterStagesState = filterStagesState.filter(s => s.isDone === true)
        } else if (filter === "inProcess") {
            return filterStagesState = filterStagesState.filter(s => s.isDone === false)
        } else if (filter === "All") {
            return filterStagesState
        }
        return filterStagesState
    }
    filterStatus()

    const FilterStatusStages = (status: boolean, id: string) => {
        let NewStatusTask = filterStagesState.find(s => s.id === id)
        if (NewStatusTask) {
            NewStatusTask["isDone"] = status
        }
        return useStagesState([...filterStagesState])
    }

    const DeleteStages = (id:string) => {
        let newStages = filterStagesState.filter(s => s.id !== id)
        useStagesState(newStages)
    }



return (
    <div className="App">
        <Counter/>
        <Todolist stages={filterStagesState}
                  setFilter={setFilter}
                  FilterStatusStages={FilterStatusStages}
                  DeleteStages={DeleteStages}
                  filter={filter}
        />
    </div>
);
}

export default App;
