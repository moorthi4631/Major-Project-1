import {createStore,combineReducers,applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import { 
productCreateReducers, 
productDeleteReducers, 
productDetailsReducers, 
productListReducers,
productUpdateReducers
 } from './reducers/productReducers';
import { 
    userDeleteReducer, 
    userDetailsReducer, 
    userListReducer, 
    userLoginReducers, 
    userSignupReducers, 
    userUpdateProfileReducer, 
    userUpdateReducer
 } from './reducers/userReducers';
import { cartReducers } from './reducers/cartReducers';
import { orderCreateReducer, orderDeliverReducer, orderDetailsReducer, orderListMyReducer, orderListReducers } from './reducers/orderReducers';

const reducer=combineReducers({
    productsList:productListReducers,
    productDetails:productDetailsReducers,
    userSignup:userSignupReducers,
    userLogin:userLoginReducers,
    cart:cartReducers,
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderDeliver:orderDeliverReducer,

//     // admin
    productCreate:productCreateReducers,
    productUpdate:productUpdateReducers,
    productDelete:productDeleteReducers,
    orderList:orderListReducers,
    userList:userListReducer,
    userDelete:userDeleteReducer,
    userUpdate:userUpdateReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    orderMyList:orderListMyReducer,



})

const userInfoFromStorage=localStorage.getItem('userInfo')?
JSON.parse(localStorage.getItem('userInfo')):[]

const cartItemsFromStorage = localStorage.getItem('cartItems')?
JSON.parse(localStorage.getItem('cartItems')):[]


const shippingAddressFromStorage=localStorage.getItem('shippingAddress')?
JSON.parse(localStorage.getItem('shippingAddress')):{}


const initialState={
    cart:{cartItems:cartItemsFromStorage,shippingAddress:shippingAddressFromStorage},
    userLogin:{userInfo:userInfoFromStorage}
}
const middleware=[thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store;