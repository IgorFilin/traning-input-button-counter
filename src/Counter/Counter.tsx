import React, {useState} from 'react';
import s from './Counter.module.css'

export const Counter = () => {

    let [count,setCount]= useState<number>(1)


   const onClickHanderCount = ( ) => {
        setCount(count += 1)
   }

   const onClickClearHandler = () => {
        setCount(1)
   }

    return (
        <div className={s.counter}>
            {count}
            <div><button onClick={onClickHanderCount}>Count</button><button onClick={onClickClearHandler}>clear</button></div>

        </div>
    );
};

