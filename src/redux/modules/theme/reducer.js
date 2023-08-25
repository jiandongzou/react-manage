
import {produce} from 'immer'
 const theme={
    status:false
 };//true 白天主题 //false 夜晚主题
const theme_reducer=(state=theme,action)=>produce(state,(draftState)=>{
    switch(action.type){
        case 'SET_THEME':
            console.log(action.data)
            draftState.status=action.data;
            break
        default:
            return draftState

    }
})
export default theme_reducer