import * as types from './ActionType';
import axios from 'axios';
import { AppDispatch } from './Store';


interface Editvalue {
    id:number | undefined,
    catogary:string | undefined,
    quantity:string |undefined,
    price:string | undefined,
    stock:string |undefined
}

const getData = (data:Editvalue) =>({
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

const getProduct = (dat: Editvalue) =>({
    type:types.GET_UPDATE_VALUE,
    payload:dat
})

export const loadData = () => {
    return function (dispatch:AppDispatch){
        console.log(process.env)
        axios.get(`${process.env.REACT_APP_PHARMACY_PRODUCT_API}`)
        .then((responce) => {
            console.log(responce)
            dispatch(getData(responce.data))
        })
        .catch((error) => console.log(error))
    }
} 

export const deletData = (id:number) => {

    return function (dispatch: AppDispatch){
        axios.delete(`${process.env.REACT_APP_PHARMACY_PRODUCT_API}/${id}`)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then((_responce) => {
            dispatch(deleteData());
            dispatch(loadData());
        })
        .catch((error) => console.log(error))
    }
} 
export const AddData = (values:Editvalue) => {
    return function (dispatch: AppDispatch){
        axios.post(`${process.env.REACT_APP_PHARMACY_PRODUCT_API}`,values)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then((_responce) => {
            dispatch(Add_New());
        })
        .catch((error) => console.log(error))
    }
} 

export const Update = (details:Editvalue,id:number) => {
    return function (dispatch: AppDispatch){
        axios.put(`${process.env.REACT_APP_PHARMACY_PRODUCT_API}/${id}`,details)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then((_responce) => {
            dispatch(Update_data());
        })
        .catch((error) => console.log(error))
    }
} 


export const getSingleUser = (updatevalue:Editvalue) => {
    console.log(updatevalue)
    return function (dispatch: AppDispatch){
        axios.put(`${process.env.REACT_APP_PHARMACY_PRODUCT_API}/${updatevalue.id}`,updatevalue)
        .then((responce) => {
            dispatch(getProduct(responce.data));
        })
        .catch((error) => console.log(error))
    }
} 