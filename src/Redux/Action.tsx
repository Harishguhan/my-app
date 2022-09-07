import * as types from './ActionType';
import axios from 'axios';


interface editvalue {
    id:number | undefined,
    catogary:string | undefined,
    quantity:string |undefined,
    price:string | undefined,
    stock:string |undefined
}

const getData = (data:any) =>({
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

const getProduct = (dat: any) =>({
    type:types.GET_UPDATE_VALUE,
    payload:dat
})

export const loadData = () => {
    return function (dispatch: any){
        axios.get('http://localhost:7000/posts')
        .then((responce) => {
            dispatch(getData(responce.data))
        })
        .catch((error) => console.log(error))
    }
} 
export const deletData = (id:number) => {

    return function (dispatch: any){
        axios.delete(`http://localhost:7000/posts/${id}`)
        .then((responce) => {
            dispatch(deleteData());
            dispatch(loadData());
        })
        .catch((error) => console.log(error))
    }
} 
export const AddData = (values:editvalue) => {
    return function (dispatch: any){
        axios.post('http://localhost:7000/posts',values)
        .then((responce) => {
            dispatch(Add_New());
        })
        .catch((error) => console.log(error))
    }
} 

export const Update = (details:any,id:any) => {
    return function (dispatch: any){
        axios.put(`http://localhost:7000/posts/${id}`,details)
        .then((responce) => {
            dispatch(Update_data());
        })
        .catch((error) => console.log(error))
    }
} 


export const getSingleUser = (updatevalue:editvalue) => {
    console.log(updatevalue)
    return function (dispatch: any){
        axios.put(`http://localhost:7000/posts/${updatevalue.id}`,updatevalue)
        .then((responce) => {
            dispatch(getProduct(responce.data));
        })
        .catch((error) => console.log(error))
    }
} 