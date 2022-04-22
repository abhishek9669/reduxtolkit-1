import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    value:1000,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{

        addAmounts:(state,action)=>{
            //console.log(state)
            //console.log(action)
            state.value = state.value + parseInt(action.payload) 

        },
        withDrows:(state,action)=>{
            //console.log(action)
            state.value = state.value - parseInt(action.payload)
        }

    }

})

export const {addAmounts,withDrows} =counterSlice.actions;
export const rootReducerFunction = counterSlice.reducer  