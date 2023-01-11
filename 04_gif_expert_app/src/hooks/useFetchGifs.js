import React,{useState} from 'react'

export const useFetchGifs = () => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    setTimeout( () => {
        setState({
            data: [1,2,3,4],
            loading:false,
        });
    },3000);
    return state; // {data:[], loading:true}
}
