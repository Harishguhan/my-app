import * as types from './ActionType';
import axios from 'axios';
import { AppDispatch } from './Store';


interface editvalue {
    id:number | undefined,
    catogary:string | undefined,
    quantity:string |undefined,
    price:string | undefined,
    stock:string |undefined
}

const getData = (data:editvalue) =>({
    type:types.GET_DATA,
    payload:data,
});

const deleteData = () => ({
    type:types.DELETE_DATA
});
const Add_New = () =>({
    type:types.ADD_CATOGARY,
    
})
const Update_data = () =>({
    type:types.UPDATE_DATA
})

const getProduct = (dat: editvalue) =>({
    type:types.GET_UPDATE_VALUE,
    payload:dat
})

export const loadData = () => {
    return function (dispatch:AppDispatch){
        axios.get('http://localhost:7000/posts')
        .then((responce) => {
            dispatch(getData(responce.data))
        })
        .catch((error) => console.log(error))
    }
} 
export const deletData = (id:number) => {

    return function (dispatch: AppDispatch){
        axios.delete(`http://localhost:7000/posts/${id}`)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then((_responce) => {
            dispatch(deleteData());
            dispatch(loadData());
        })
        .catch((error) => console.log(error))
    }
} 
export const AddData = (values:editvalue) => {
    return function (dispatch: AppDispatch){
        axios.post('http://localhost:7000/posts',values)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then((_responce) => {
            dispatch(Add_New());
        })
        .catch((error) => console.log(error))
    }
} 

export const Update = (details:editvalue,id:number) => {
    return function (dispatch: AppDispatch){
        axios.put(`http://localhost:7000/posts/${id}`,details)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then((_responce) => {
            dispatch(Update_data());
        })
        .catch((error) => console.log(error))
    }
} 


export const getSingleUser = (updatevalue:editvalue) => {
    console.log(updatevalue)
    return function (dispatch: AppDispatch){
        axios.put(`http://localhost:7000/posts/${updatevalue.id}`,updatevalue)
        .then((responce) => {
            dispatch(getProduct(responce.data));
        })
        .catch((error) => console.log(error))
    }
} 