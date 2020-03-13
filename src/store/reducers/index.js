import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'


// 引入reducer函数
import User from './user';
import Modules from './module'
import Newcorpusstore from './newcorpus'
// 合并reducer函数
const rootReducer = combineReducers({
    User,
    Modules,
    Newcorpusstore,
    routing: routerReducer
});

export default rootReducer
