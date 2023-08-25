import {produce} from 'immer'
let initState={
    meunList:[]
}
const menu_reducer=(state=initState,action)=>produce(state,(draftState)=>{
 
      switch(action.type){
         case 'SET_MENU':
            console.log(action.type)
         draftState.menuList=action.menuList;
         break;
         //return {menuList:action.menuList}
         default:
            return draftState
      }
   })

   // const menu_reducer=(state=initState,action)=>{
   //    switch(action.type){
   //       case 'SET_MENU':
   //       return {menuList:action.menuList}
   //       default:
   //         return {...state}
   //    }
   // }
   // const menu_reducer = (state=initState, action) =>produce(state, (draftState) => {
   //     switch (action.type) {
   //         case 'SET_MENU':
   //             draftState.menuList = action.menuList
   //             break
   //         default:
   //             return draftState
   //     }
   // })
export default menu_reducer