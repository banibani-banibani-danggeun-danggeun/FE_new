import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../lib/axios";

const initialState = {
  posts: [],
  chats: [],
  isLoading: true,
  error: null,
};

export const __createRoom = createAsyncThunk(
  "createRoom",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.createRoom(payload);
      // const data = await axios.get(`http://localhost:3002/recipes/${payload}`);
      console.log("payload: ", payload); //id값이 숫자로 출력되야함
      console.log("creatRoom data: ", data);
      // const getId = data.data.filter((recipe) => recipe.id === payload)[0];
      return thunkAPI.fulfillWithValue(data);
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

// 채팅방 생성
export const __createChatRoom = createAsyncThunk(
  "createChatRoom",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.createRoom();
      console.log("payload: ", payload);
      console.log("data: ", data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      console.log(err);

      return thunkAPI.rejectWithValue(err);
    }
  }
);

// 채팅방 들어가기
export const __enterRoom = createAsyncThunk(
  "enterRoom",
  async (payload, thunkAPI) => {
    try {
      console.log("payload:::", payload);
      const data = await apis.enterRoom(payload);
      console.log("payload: ", payload);
      console.log("createPost::: ", data);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// 채팅방 조회
export const __findRoom = createAsyncThunk(
  "findRoom",
  async (payload, thunkAPI) => {
    try {
      console.log("payload: ", payload);
      const data = await apis.findRoom(payload);
      console.log("data: ", data.data);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
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
      state.chats = action.payload.data; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      // console.log("action.payload: ", action.payload);
      // console.log("state.posts: ", state.posts);
    },
    [__createRoom.rejected]: (state, action) => {
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

    // 채팅방 생성
    [__createChatRoom.pending]: (state) => {
      state.isLoading = true;
      // 네트워크 요청 시작-> 로딩 true 변경합니다.
    },
    [__createChatRoom.fulfilled]: (state, action) => {
      // action으로 받아온 객체를 store에 있는 값에 넣어준다
      state.isLoading = false;
      state.chats = action.payload;
    },
    [__createChatRoom.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // 에러 발생-> 네트워크 요청은 끝,false
      // catch 된 error 객체를 state.error에 넣습니다.
    },

    // 채팅방 들어가기
    [__enterRoom.pending]: (state) => {
      state.isLoading = true;
    },
    [__enterRoom.fulfilled]: (state, action) => {
      // 액션으로 받은 값 = payload 추가해준다.
      console.log("action: ", action.payload);
      state.isLoading = false;
      // state.posts = [...state.posts, action.payload];
      state.chats = action.payload;
      console.log("action:: ", action.payload);
    },
    [__enterRoom.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log(action.payload);
    },

    // 게시글 삭제 ------------------
    [__findRoom.pending]: (state) => {
      state.isLoading = true;
    },
    [__findRoom.fulfilled]: (state, action) => {
      // 미들웨어를 통해 받은 action값이 무엇인지 항상 확인한다
      console.log("action: ", action.payload);
      state.isLoading = false;
      state.chats = action.payload;
      console.log("action:: ", action.payload);
    },
    [__findRoom.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default chatSlice.reducer;
