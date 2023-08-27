import {produce} from 'immer'
let initSate={
    name:'',
    auth:'',
    token:'',
    permissons:[]
}
const userReducer = (state=initSate, action) =>produce(state, (draftState) => {
    switch (action.type) {
        case 'SET_TOKEN':
            draftState.token = action.token
            break
        case 'SET_NAME':
            draftState.name = action.name
            break
        case 'SET_PERMISSIONS':
            draftState.permissions = action.permissions
            break
        case 'CLEAR_INFO':
            draftState.name = ''
            draftState.auth = ''
            draftState.token = ''
            break
        default:
            return draftState
    }
})
// const userReducer=(state=initSate,action)=>{
//     switch(action.type){
//        case 'SET_NAME':
//            alert(action.type)
//          return  Object.assign({...state},{name:action.name});
//        case 'SET_TOKEN':
//          return  Object.assign({...state},{token:action.token});
//         case 'SET_ PERMISSIONS':
//          return Object.assign({...state},{permisssons:action.permisssons});
//          case 'CLEAR_INFO':
//             return {
//                 name:'',
//                 auth:'',
//                 token:'',
//                 permisssons:[]
//             };
//         default:
//            return {...state}

//     }
     
// }
export default userReducer