import * as types from './ActionType';
import axios from 'axios';

const getData = (data:any) =>({
    type:types.GET_DATA,
    payload:data,
});

const deleteData = () => ({
    type:types.DELETE_DATA
});
const Add_New = () =>({
    type:types.ADD_CATOGARY
})

export const loadData = () => {
    return function (dispatch: any){
        axios.get('http://localhost:5000/posts')
        .then((responce) => {
            dispatch(getData(responce.data))
        })
        .catch((error) => console.log(error))
    }
} 
export const deletData = (id:any) => {
    console.log(id)
    return function (dispatch: any){
        axios.delete(`http://localhost:5000/posts/${id}`)
        .then((responce) => {
            dispatch(deleteData());
            dispatch(loadData());
        })
        .catch((error) => console.log(error))
    }
} 
export const AddData = (values:any) => {
    console.log(values)
    return function (dispatch: any){
        axios.post('http://localhost:5000/posts',values)
        .then((responce) => {
            dispatch(Add_New());
        })
        .catch((error) => console.log(error))
    }
} 