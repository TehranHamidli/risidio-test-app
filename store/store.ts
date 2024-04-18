import nftReducer from '@/features/nftSlice';
import accountReducer from '@/features/accountSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    nft: nftReducer,
    account:accountReducer
    
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
