import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
    user: {},
    token: ""
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            console.log(action.payload)
            state.user = Object.assign({}, action.payload.user)
            state.token = action.payload.token
        },
        logout(state) {
            state.user = {}
            state.token = ""
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.auth,
            };
        },
    }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer