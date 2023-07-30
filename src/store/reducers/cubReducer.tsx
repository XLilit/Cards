import {createSlice,  PayloadAction} from "@reduxjs/toolkit";
import {ICubStateType } from "../../model/cubReducer.model";

const initialState: ICubStateType = {
    data: []
}

export const cubSlice = createSlice({
    name: "cub",
    initialState,
    reducers: {
        addCard: (state, action: PayloadAction<number>) => {
            state.data.push({
                id:Math.random().toString(36).substr(2,9),
                num:action.payload
            })
        },
        deleteCard: (state , action:PayloadAction<number | string>) => {
            state.data = state.data.filter(card => card.id !== action.payload)
        },
        sortCards: (state) => {
          state.data = state.data.sort((a, b) => a.num > b.num ? 1 : -1);
        },
        deleteAll: (state) => {
          state.data = []
        }
    },


});

export const {addCard ,deleteCard  ,sortCards , deleteAll} = cubSlice.actions;

export default cubSlice.reducer;
