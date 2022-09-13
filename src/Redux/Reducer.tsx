/* eslint-disable no-fallthrough */
import * as types from './ActionType';

const initialState = {
    data:[],
    dat:{},
    loading:false
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dataReducers = (state = initialState,action:any) =>{
    switch(action.type){
        case types.GET_DATA:
            return{
                ...state,
                data:action.payload,
                loading:false
            }
        case types.DELETE_DATA:

        case types.ADD_CATOGARY: 
            return{
                ...state,
                data:action.payload,
                loading:false,
            }
        
        default:
            return state
    }
};

export default dataReducers;