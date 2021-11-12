const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

let initialState = {
  posts: [
    {
      id: "1",
      name: "Pasha",
      avatar:
        "http://v.bootstrapmb.com/2017/12/xj70323/images/profile/profile4.jpg",
      message: "Im doin' so well i cant lie",
      likeCount: 1,
      postimg:
        "https://imgix.bustle.com/2017/5/11/a088adaa-c586-42e2-a717-5b753ed57b7c.jpg",
    },
    {
      id: "2",
      name: "Sasha",
      avatar:
        "http://v.bootstrapmb.com/2017/12/xj70323/images/profile/profile5.jpg",
      message: "Why nobody loves me?",
      likeCount: 20,
      postimg:
        "https://www.banyanmentalhealth.com/wp-content/uploads/2019/08/depression.jpg",
    },
    {
      id: "3",
      name: "Boris",
      avatar:
        "http://v.bootstrapmb.com/2017/12/xj70323/images/profile/profile6.jpg",
      message: "I dont care im ballin nig!!!",
      likeCount: 212,
      postimg:
        "https://i.cbc.ca/1.5645636.1594411598!/fileImage/httpImage/elam-ending-071020.jpg",
    },
  ],

  newPostText: "it-kamasutra",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: "4",
        name: "Boris",
        avatar:
          "http://v.bootstrapmb.com/2017/12/xj70323/images/profile/profile6.jpg",
        message: state.newPostText,
        likeCount: 212,
        postimg:
          "https://i.cbc.ca/1.5645636.1594411598!/fileImage/httpImage/elam-ending-071020.jpg",
      };

      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;
