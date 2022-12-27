import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../lib/axios";
// import axios from "axios";

const initialState = {
  posts: [],
  like: [],
  isLoading: true,
  error: null,
};

// 데이터 불러오기
export const __getPost = createAsyncThunk(
  "getPost",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.getPost();
      console.log("payload: ", payload);
      console.log("data: ", data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      console.log(err);

      return thunkAPI.rejectWithValue(err);
    }
  }
);

// 해당 아이디 값 데이터 불러오기 (안먹힘....)
export const __getIdPost = createAsyncThunk(
  "getIdPost",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.getIdPost(payload);
      // const data = await axios.get(`http://localhost:3002/recipes/${payload}`);
      console.log("payload: ", payload); //id값이 숫자로 출력되야함
      console.log("getIddata:: ", data);
      // const getId = data.data.filter((recipe) => recipe.id === payload)[0];
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// 데이터 추가
export const __addPost = createAsyncThunk(
  "addPost",
  async (payload, thunkAPI) => {
    try {
      console.log("payload:::", typeof payload.price);
      const data = await apis.createPost(payload);
      // const data = await axios.post("http://localhost:3002/recipes", payload);
      console.log("payload: ", payload);
      console.log("createPost::: ", data);
      return thunkAPI.fulfillWithValue(payload);
      // 추가했을 때 새로고침을 해야 내용이 제대로 들어감. -매니저님께 여쭤볼것2
      // data status 코드랑 message가 추가가 되고 새로고침하면 데이터가 제대로 들어감.
      // title 등이 아니라 message 등이 들어감..
      // 3. 추가할 때 새로고침을 해야만 id값이 생긴다.
      // 답: data에 title,content,....등이 안들어가고 msg와 status만 있었다. 형식이 잘못됨.
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// 데이터 삭제
export const __deletePost = createAsyncThunk(
  "deletePost",
  async (payload, thunkAPI) => {
    try {
      console.log("payload: ", payload);
      const data = await apis.deletePost(payload);
      // const data = await axios.delete(
      //   `http://localhost:3002/recipes/${payload}`
      // );
      console.log("data: ", data.data);
      // alert(data.data.msg);
      // if (data.data.statusCode === 400) {
      //   alert(data.data.msg);
      //   return;
      // }
      console.log("deletePost:", data);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      // console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// 데이터 수정
export const __editPost = createAsyncThunk(
  "editPost",
  async (payload, thunkAPI) => {
    try {
      const { id, newPost } = payload;
      console.log("payload:::::: ", payload);
      const data = await apis.editPost(id, newPost);
      // const data = await axios.patch(
      //   `http://localhost:3002/recipes/${recipeId}`,
      //   recipe
      // );

      console.log("data: ", data.data);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// export const __likeToggle = createAsyncThunk(
//   "likeToggle",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await apis.likeToggle(payload);
//       // const data = await axios.post("http://localhost:3002/recipes", payload);
//       console.log("payload: ", payload);
//       console.log("data: ", data.data);
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (err) {
//       console.log(err);
//       return thunkAPI.rejectWithValue(err);
//     }
//   }
// );

// // id 중복체크
// export const __checkUserName = createAsyncThunk(
//   "checkUserName",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await apis.checkUserName(payload);
//       // const data = await axios.post("http://localhost:3002/recipes", payload);
//       console.log("payload: ", payload);
//       console.log("data: ", data.data);
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (err) {
//       console.log(err);
//       return thunkAPI.rejectWithValue(err);
//     }
//   }
// );

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    // 리스트 불러오기 ---------------
    [__getPost.pending]: (state) => {
      state.isLoading = true;
      // 네트워크 요청 시작-> 로딩 true 변경합니다.
    },
    [__getPost.fulfilled]: (state, action) => {
      // action으로 받아온 객체를 store에 있는 값에 넣어준다
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // 에러 발생-> 네트워크 요청은 끝,false
      // catch 된 error 객체를 state.error에 넣습니다.
    },

    // top5 데이터 가져오기

    // [__topPost.pending]: (state) => {
    //   state.isLoading = true;
    //   // 네트워크 요청 시작-> 로딩 true 변경합니다.
    // },
    // [__topPost.fulfilled]: (state, action) => {
    //   // action으로 받아온 객체를 store에 있는 값에 넣어준다
    //   state.isLoading = false;
    //   state.posts = action.payload;
    // },
    // [__topPost.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    //   // 에러 발생-> 네트워크 요청은 끝,false
    //   // catch 된 error 객체를 state.error에 넣습니다.
    // },

    // 해당 id 리스트만 불러오기
    [__getIdPost.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getIdPost.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.posts = action.payload.data; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      // console.log("action.payload: ", action.payload);
      // console.log("state.posts: ", state.posts);
    },
    [__getIdPost.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload;
      console.log(action.payload);
      // catch 된 error 객체를 state.error에 넣습니다.
    },

    // 레시피 추가
    [__addPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__addPost.fulfilled]: (state, action) => {
      // 액션으로 받은 값 = payload 추가해준다.
      console.log("action: ", action.payload);
      state.isLoading = false;
      // state.posts = [...state.posts, action.payload];
      state.posts.push(action.payload);
      console.log("action:: ", action.payload);
    },
    [__addPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log(action.payload);
    },

    // 게시글 삭제 ------------------
    [__deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__deletePost.fulfilled]: (state, action) => {
      // 미들웨어를 통해 받은 action값이 무엇인지 항상 확인한다
      console.log("action: ", action.payload);
      state.isLoading = false;
      state.posts = Array.state.posts.filter(
        (post) => post.id !== action.payload
      );
      console.log("state------>", state.posts);
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 레시피 수정
    [__editPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__editPost.fulfilled]: (state, action) => {
      // console.log('state-store값',state.diary)
      console.log("action-서버값", action);
      state.isLoading = false;
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id
          ? {
              ...post,
              title: action.payload.data.title,
              content: action.payload.data.content,
              image: action.payload.data.image,
              location: action.payload.data.location,
              price: action.payload.data.price,
            }
          : post
      );
      // state.recipes = action.payload.recipe
      // const index = state.recipes.findIndex(
      //   (recipe) => recipe.id === action.payload[0]
      // );
      // state.recipes.splice(index, 1, action.payload[1]);
    },
    [__editPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // // 좋아요 토글
    // [__likeToggle.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__likeToggle.fulfilled]: (state, action) => {
    //   // 액션으로 받은 값 = payload 추가해준다.
    //   console.log("action: ", action.payload);
    //   state.isLoading = false;
    //   state.posts = action.payload;
    // },
    // [__likeToggle.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },

    // // 아이디 중복체크
    // [__checkUserName.pending]: (state) => {
    //   state.isLoading = true;
    //   // 네트워크 요청 시작-> 로딩 true 변경합니다.
    // },
    // [__checkUserName.fulfilled]: (state, action) => {
    //   // action으로 받아온 객체를 store에 있는 값에 넣어준다
    //   state.isLoading = false;
    //   state.posts = action.payload;
    // },
    // [__checkUserName.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    //   // 에러 발생-> 네트워크 요청은 끝,false
    //   // catch 된 error 객체를 state.error에 넣습니다.
    // },
  },
});

// export const {} = recipesSlice.actions;
export default postSlice.reducer;
