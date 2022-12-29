import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../lib/axios";
import Swal from "sweetalert2";

const initialState = {
  posts: [],
  like: [],
  isLoading: true,
  error: null,
  detail: {
    id: 0,
    title: "",
    content: "",
    price: "",
    location: "",
    image: "",
    nickname: "",
  },
  // posts는 배열 형태로 initialstate인데 console에서는 객체 형태로 되어있어서 type error가 떴음.
  // 그래서 detail로 새로운 객체형태를 만들어서 안에 값을 넣어줌.
};

// 데이터 불러오기
export const __getPost = createAsyncThunk(
  "getPost",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.getPost();
      // console.log("payload: ", payload);
      console.log("data: ", data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      console.log(err);

      return thunkAPI.rejectWithValue(err);
    }
  }
);

// 해당 아이디 값 데이터 불러오기
export const __getIdPost = createAsyncThunk(
  "getIdPost",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.getIdPost(payload);
      // const data = await axios.get(`http://localhost:3002/recipes/${payload}`);
      console.log("payload: ", payload); //id값이 숫자로 출력되야함
      console.log("getIddata:: ", data);
      // const getId = data.data.filter((recipe) => recipe.id === payload)[0];
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.response.data);
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
      if (data.status === 200) {
        Swal.fire(data.msg, "게시물 작성이 완료되었습니다!", "success");
      }
      return thunkAPI.fulfillWithValue(data.data.data);
      // 추가했을 때 새로고침을 해야 내용이 제대로 들어감. -매니저님께 여쭤볼것2
      // data status 코드랑 message가 추가가 되고 새로고침하면 데이터가 제대로 들어감.
      // title 등이 아니라 message 등이 들어감..
      // 3. 추가할 때 새로고침을 해야만 id값이 생긴다.
      // 답: data에 title,content,....등이 안들어가고 msg와 status만 있었다. 형식이 잘못됨.
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.response.data);
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
      console.log(err.response.data);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

// 데이터 수정
export const __editPost = createAsyncThunk(
  "editPost",
  async (payload, thunkAPI) => {
    try {
      const [newPost, id] = payload;
      // 배열이기 때문에 순서가 같아야함. editpost의 45번줄.
      console.log("payload:::::: ", payload);
      const data = await apis.editPost(id, newPost);
      console.log(data);
      // const data = await axios.patch(
      //   `http://localhost:3002/recipes/${recipeId}`,
      //   recipe
      // );
      thunkAPI.dispatch(__editPost());
      //순서를 보장해줌. 렌더링이 더 빨리되서 수정된 값이 보이지 않음 -> 순서를 보장해서 렌더링이 더 늦게 되게함.
      console.log("data: ", data.data);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.response.data);
      // err만 넣으면 err의 data가 너무 크기 때문에 그 안에 내가 필요한 것만 가져와야함.
      // err만 넣을시 non-seralization..? 에러가 뜸
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
      console.log("action.payload: ", action.payload);
      state.detail = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      // console.log("state.posts: ", state.posts);
      //state.posts는 배열인데 action.payload는 객체
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
      state.posts.unshift(action.payload);
      // push는 맨 뒤에 붙게하는 메소드. 내림차순이라서 맞물림. 메소드 바꾸기.
      // unshift :  배열의 요소를 추가하고, 배열의 새로운 길이를 반환한다는 점에서 push 메서드와 동일하지만,
      //배열의 맨 끝이 아닌 맨 앞에 요소를 추가한다는 점에서 push 메서드와 반대이다.

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
      // console.log(state.posts);
      // console.log(typeof action.payload);
      const a = state.posts.filter((post) => post.id !== action.payload);
      console.log(a);
      state.posts = state.posts.filter((post) => post.id !== +action.payload);
      // post.id는 number고 action.payload는 string , 같지 않아서 바로 삭제가 안됨.+ 붙임.
      console.log("state------>", state.posts);
      state.detail = {
        id: 0,
        title: "",
        content: "",
        image: "",
        price: "",
        location: "",
        nickname: "",
      };
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
      state.detail = {
        title: action.payload.data.title,
        //action.payload에 title이 있는지 확인!
        content: action.payload.data.content,
        image: action.payload.data.image,
        location: action.payload.data.location,
        price: action.payload.data.price,
      };
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
