import user from "./modules/user/reducer"
import menu from "./modules/menu/reducer"
import theme from "./modules/theme/reducer"
import { combineReducers } from "redux";
import {legacy_createStore as createStore,applyMiddleware} from "redux"
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// 引入 redux-thunk，用于支持异步 action
import thunk from 'redux-thunk'



const reducer=combineReducers({
    user,
    menu,
    theme
})
// 定义持久化配置 
const persistConfig = {
     key: 'root',// 标识存储在本地存储中的数据
    storage, //持久化存储引擎，默认是localStorage
    whitelist: ['user','theme'],//白名单
    blacklist: ['counter'],//黑名单
 }; 
// 创建持久化reducer 
const persistedReducer = persistReducer(persistConfig, reducer); 
const store=createStore(persistedReducer,applyMiddleware(thunk));
const persistor = persistStore(store);
export {
    store,
    persistor
}
