import { Navigate,useRoutes} from 'react-router-dom'
import Error403 from '@/page/error/403/index'
import Error404 from '@/page/error/404/index'
import Login from '@/page/login/index'
import Home from '@/page/home/index'
import Layout  from  "@/components/Layout/index"
import Auth from "@/router/Auth"
import { lazy,Suspense } from 'react';
import LazyLoad from './LazyLoad'
const viteModule = import.meta.glob('/src/page/**');
const LayoutIndex=()=>(<Layout></Layout>);
const Com=(Component)=>(
   <Suspense fallback={<div>loading</div>}>
    
     <Component></Component> 
   </Suspense>
   
)

 const router=[
    {
        path: '/',
        element: <Navigate to="/home"/>
    },
    // {
    //     path: '/error/403',
    //     element: <Error403 />
    // },
    // {
    //     path: '/error/404',
    //     element: <Error404 />
    // },
    {
        path: 'login',
        element: <Login></Login>
    }
]

export const formatRouter=(routerList=[])=>{
    const routes=[]
    routerList.forEach((item)=>{
         const route={};
        if(item.element=="Layout"){
            route.element=<LayoutIndex />;
        }else{
            const URL = `/src/page/${item.element}.jsx`
            const module=viteModule[URL]?LazyLoad(lazy(viteModule[URL])):LazyLoad(lazy(viteModule['/src/page/error/404/index.jsx']));
            const el=item.meta?.auth ? <Auth>{module}</Auth> : module
            route.element=item.element ? el : null;
            route.path=item.path;
        }
        if(item.children && item.children.length>0){
            route.children=formatRouter(item.children)
        }
        routes.push(route);
       
    })
    return routes
};
export const useLazy=(routerList)=>{
    let temp=formatRouter(routerList);
    console.log(temp)
    router.push(...temp);
    router.push({
        path: '*',
        element: <Navigate to="/error/404" />
    })

}
export const Router=()=>{
    const routers= useRoutes(router)
    return routers
}

