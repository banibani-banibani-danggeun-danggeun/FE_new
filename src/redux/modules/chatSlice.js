import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../lib/axios";

const initialState = {
  posts: [],
  chats: [],
  messages: [],
  isLoading: true,
  error: null,
};

// 채팅방 생성
export const __createRoom = createAsyncThunk(
  "createRoom",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.createRoom(payload);
      // const data = await axios.get(`http://localhost:3002/recipes/${payload}`);
      console.log("payload: ", payload); //id값이 숫자로 출력되야함
      console.log("creatRoom data: ", data);
      // const getId = data.data.filter((recipe) => recipe.id === payload)[0];
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// 메세지 리스트 조회

export const __getMessage = createAsyncThunk(
  "getMessage",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.getMessage(payload);
      // const data = await axios.get(`http://localhost:3002/recipes/${payload}`);
      console.log("payload: ", payload); //id값이 숫자로 출력되야함
      console.log("getMessage data: ", data);
      // const getId = data.data.filter((recipe) => recipe.id === payload)[0];
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// 채팅방 목록 조회
export const __getChatRoom = createAsyncThunk(
  "getChatRoom",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.getChatRoom(payload);
      // const data = await axios.get(`http://localhost:3002/recipes/${payload}`);
      console.log("payload: ", payload); //id값이 숫자로 출력되야함
      console.log("getIddata:: ", data);
      // const getId = data.data.filter((recipe) => recipe.id === payload)[0];
      return thunkAPI.fulfillWithValue(data.data); // 필요한 최소한의 정보만 넣어줘야함
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.error.message);
    }
  }
);

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: {
    // 채팅방 생성
    [__createRoom.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__createRoom.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.chats = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      // console.log("action.payload: ", action.payload);
      // console.log("state.posts: ", state.posts);
    },
    [__createRoom.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload;
      console.log(action.payload);
      // catch 된 error 객체를 state.error에 넣습니다.
    },

    // 메세지 리스트 조회
    [__getMessage.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getMessage.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.messages = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      // console.log("action.payload: ", action.payload);
      // console.log("state.posts: ", state.posts);
    },
    [__getMessage.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload;
      console.log(action.payload);
      // catch 된 error 객체를 state.error에 넣습니다.
    },

    // 채팅방 목록 조회
    [__getChatRoom.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getChatRoom.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.chats = action.payload.data; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      // console.log("action.payload: ", action.payload);
      // console.log("state.posts: ", state.posts);
    },
    [__getChatRoom.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload;
      console.log(action.payload);
      // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export default chatSlice.reducer;
