import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface NFT {
  image: string;
}
const initialState = {
nftImage: [] as NFT[]

};


export const nftSlice = createSlice({
  name: 'nft',
  initialState,
  reducers: {
    setSelectedNft: (state, action: PayloadAction<NFT>) => {
      state.nftImage.push(action.payload);
    },
  },
})


export const {setSelectedNft } = nftSlice.actions

export default nftSlice.reducer