import {store} from '@/redux/index'
const Authbtn=(props)=>{

  const {authority}=props;
  const permissons=store.getState().user.permissions;
  console.log(authority);
  console.log(permissons)
  const hasAuth=permissons.some((item)=>item==authority);
    if(hasAuth){
        return props.children
    }
}
export default Authbtn