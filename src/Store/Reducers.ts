import {createSlice} from '@reduxjs/toolkit';

interface UserDetails {
  id: number;
  name: string;
  pass:string;
}

const initialState = {
  bookmark: [],
};


const globalSlice = createSlice({
  name: 'kabar',
  initialState,
  reducers: {
    setBookMark: (state, action: {payload: any}) => {
      state.bookmark.push(action.payload);
    },
    setRemoveBookmark: (state, action: {payload: string}) => {
      state.bookmark = state.bookmark.filter(
        item => item.url !== action.payload,
      );
    },
  },
});

export default globalSlice.reducer;
export const {setBookMark, setRemoveBookmark} = globalSlice.actions;