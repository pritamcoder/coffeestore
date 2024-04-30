import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:0,
  id:[]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    addid: (state,action) => {
      state.id.push(action.payload)
     
    },
    removeid: (state,action) => {
      state.value-=1
     const removei=state.id.filter((item)=>item.id!=action.payload)
     state.id=removei
     
    
    },


  },
})

// Action creators are generated for each case reducer function
export const { increment,addid,removeid} = counterSlice.actions

export default counterSlice.reducer