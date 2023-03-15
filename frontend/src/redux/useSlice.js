import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        name:"Tran Van Hung",
        age:"22",
        about:"Im a software engineer",
        avaUrl:"https://preview.redd.it/26s9eejm8vz51.png?auto=webp&s=e38d32ee0ffa0666fade2abd62ed59037c119990",
        themeColor: "#ff9051",
        pending:false,
        error:false
    },
    reducers:{
        updateStart:(state)=>{
            state.pending = true;
        },
        updateError:(state)=>{
            state.error = true;
            state.pending = false;
        },
        updateSuccess:(state,action)=>{
            state.pending = false;
            state.error = false;
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.about = action.payload.about;
            state.avaUrl = action.payload.avaUrl;
            state.themeColor = action.payload.themeColor;
        }
        // update:(state,action)=>{
        //     state.name = action.payload.name;
        //     state.age = action.payload.age;
        //     state.about = action.payload.about;
        //     state.avaUrl = action.payload.avaUrl;
        //     state.themeColor = action.payload.themeColor; 
        // }
    }
})

export const {updateStart,upsdateError,updateSuccess} = userSlice.actions;
export default userSlice.reducer;