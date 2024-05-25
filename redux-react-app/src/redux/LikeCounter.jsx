import React from "react";
import { incrementLike,decrementLike } from "./Action";
import {createStore} from 'redux'
import reducer from './Reducer'

const store = createStore(reducer);


const LikeCounter = ()=>{

    const[likes,setLike] = React.useState(store.getState().likes)

    function handleLike(){
        store.dispatch(incrementLike())

    }
    function handleUnlike(){
        store.dispatch(decrementLike())
    }

    React.useEffect(()=>{
        const subscribe = store.subscribe(()=>setLike(store.getState().likes));
        return subscribe;
    },[])
    return(
        <div>
            <h1>{store.getState().likes}</h1>
            <button onClick={handleLike}>Like</button>
            <button onClick={handleUnlike}>Unlike</button>
        </div>
    )
}
export default LikeCounter;