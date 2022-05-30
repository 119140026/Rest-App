import {
    GET_LIST,
    GET_DETAIL,
} from './action'

const initialState = {
    dataList : [],
    dataDetail: [],
    imageData : 'https://restaurant-api.dicoding.dev/images/medium/',
}

function userReducer(state = initialState, action){
    switch (action.type){
        case  GET_LIST :
            return { ...state, dataList: action.payload}
        case  GET_DETAIL :
            return { ...state, dataDetail: action.payload}
        default:
            return state
    }
}

export default userReducer