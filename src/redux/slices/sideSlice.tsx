import { ISideParams } from '#/types/general'
import { createSlice } from '@reduxjs/toolkit'


export const initialState: ISideParams = {
  id: null, 
  uuid: '',
  text: null,
  top: null,
  left: null,
}


export const sideSlice = createSlice({
  name: 'sideParams',
  initialState,
  reducers: {
    addSideParams: (state, {payload}) => {
      state.id = payload.id
      state.uuid = payload.uuid
      state.text = payload.text
      state.top = payload.top
      state.left = payload.left
    },
    removeSideParams: state => {
      state.id = initialState.id
      state.uuid = initialState.uuid
      state.text = initialState.text
      state.top = initialState.top
      state.left = initialState.left
    },
  },
})

export const { addSideParams, removeSideParams } = sideSlice.actions
export default sideSlice.reducer
