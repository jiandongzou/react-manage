import {getMenuList} from "@/api/menu/index"
const menuAction=(data)=>({type:"SET_MENU",menuList:data})

const asyncMenuAction= ()=> async(dispatch)=>{
    const {data,code}=await getMenuList();
    console.log(data)
    dispatch(menuAction(data))
   
}
// export const getMenuListAction = () => async (dispatch: Dispatch<MenuProps>) => {
//    const data = await getMenuList()
//    dispatch({
//        type: types.SET_MENU_LIST,
//        menuList: (data as Menu.MenuOptions[]) ?? []
//    })
// }
export default asyncMenuAction


