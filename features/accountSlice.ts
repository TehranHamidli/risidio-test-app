import Account from '@/components/Account';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
account:false

};


export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<boolean>) => {
      state.account = action.payload
    },
  },
})


export const {setAccount } = accountSlice.actions

export default accountSlice.reducer