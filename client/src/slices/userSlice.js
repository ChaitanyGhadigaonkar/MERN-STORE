import { createSlice } from "@reduxjs/toolkit"


const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
    },
    reducers: {
        setUserCredentials(state, action) {
            state.userInfo = action.payload
            localStorage.setItem("userInfo",JSON.stringify(action.payload))
        }
    }
})

export const { setUserCredentials } = userSlice.actions

export default userSlice.reducer