import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../../features/counter/counterSlice'

export default configureStore({
    reducer: {
        counter: counterReducer // เปลี่ยนชื่อ import ใหม่
    }
})

