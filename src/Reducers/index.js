import {combineReducers} from "redux";

import books from './Books'
import curt from './Curt'
import sort from './Sorting'

export default combineReducers({
    books, curt, sort,
})
