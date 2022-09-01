import * as types from './ActionType';

const initialState = {
    data:[],
    singledata:{},
    loading:false
}

const dataReducers = (state = initialState,action:any) =>{
    switch(action.type){
        case types.GET_DATA:
            return{
                ...state,
                data:action.payload,
                loading:false
            }
        case types.DELETE_DATA:
            return{
                ...state,
                data:action.payload,
                loading:false,
            }
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