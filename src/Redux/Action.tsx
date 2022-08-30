import * as types from './ActionType';
import axios from 'axios';

const getData = (data:any) =>({
    type:types.GET_DATA,
    payload:data,
});

export const loadData = () => {
    return function (dispatch: any){
        axios.get('http://localhost:5000/posts')
        .then((responce) => {
            dispatch(getData(responce.data))
        })
        .catch((error) => console.log(error))
    }
} 