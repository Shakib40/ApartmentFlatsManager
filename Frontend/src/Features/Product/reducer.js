import { 
    ALL_PRODUCT_LOADING,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    PRODUCT_DETAILS_LOADING,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERROR
} 
from "./actionType"

const initialState = { 
    flats: [], 
    loading: true,
    flatsCount: 0,
};

export const productReducer = ( state = initialState, action) =>{
     
    switch(action.type){
        case ALL_PRODUCT_LOADING:
        return{
                loading : true,
                flats : [],
                flatsCount: 0,
        }
        case ALL_PRODUCT_SUCCESS : 
        return{  
              loading : false,
              flats : action.payload.flats,
              flatsCount: action.payload.flatsCount,
              resultPerPage:action.payload.resultPerPage,
        }
        case ALL_PRODUCT_FAIL : 
        return{
             loading : false,
             error : action.payload,
        }
        case CLEAR_ERROR : 
        return{
             ...state,
             error : null,
        }

        default: 
         return{
            state
         }

    }
};

const initialState1 = { 
    product: {}, 
    loading: true,
};

export const productDetailsReducer = ( state = initialState1, action) =>{
     
    switch(action.type){
        case PRODUCT_DETAILS_LOADING:
        return{
                loading : true,
                ...state
        }
        case PRODUCT_DETAILS_SUCCESS : 
        return{
             
              loading : false,
              product : action.payload,
        }
        case PRODUCT_DETAILS_FAIL : 
        return{
             loading : false,
             error : action.payload,
        }
        case CLEAR_ERROR : 
        return{
             ...state,
             error : null,
        }

        default: 
         return{
            state
         }

    }
}