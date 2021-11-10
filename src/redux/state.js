let store = {
  _callSubscriber: function () {},

  _state: {
    profilePage: {
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
    },

    messagesPage: {
      dialogs: [
        {
          id: "1",
          name: "Masha",
          avatar:
            "http://v.bootstrapmb.com/2017/12/xj70323/images/profile/profile1.jpg",
        },
        {
          id: "2",
          name: "Dasha",
          avatar:
            "http://v.bootstrapmb.com/2017/12/xj70323/images/profile/profile2.jpg",
        },
        {
          id: "3",
          name: "Pasha",
          avatar:
            "http://v.bootstrapmb.com/2017/12/xj70323/images/profile/profile4.jpg",
        },
        {
          id: "4",
          name: "Sasha",
          avatar:
            "http://v.bootstrapmb.com/2017/12/xj70323/images/profile/profile5.jpg",
        },
        {
          id: "5",
          name: "Boris",
          avatar:
            "http://v.bootstrapmb.com/2017/12/xj70323/images/profile/profile6.jpg",
        },
      ],
      messages: [
        { message: "Hi how are u?" },
        { message: "Why nobody loves me?" },
        { message: "where r u? im gettin nervous shit!!" },
        { message: "i dont care" },
        { message: "Sounds niceee?" },
      ],

      newDialogUser: "Type the person you want to chat with",
    },

    sidebar: {
      friends: [
        {
          name: "Masha",
          id: "1",
          avatar:
            "http://v.bootstrapmb.com/2017/12/xj70323/images/profile/profile1.jpg",
        },
        {
          name: "Dasha",
          id: "2",
          avatar:
            "http://v.bootstrapmb.com/2017/12/xj70323/images/profile/profile2.jpg",
        },
        {
          name: "Pasha",
          id: "3",
          avatar:
            "http://v.bootstrapmb.com/2017/12/xj70323/images/profile/profile4.jpg",
        },
      ],
    },
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _addPost() {},
  _updateNewPostText(newText) {},

  _addDialog() {},

  _updateDialogs(newText) {},

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: "4",
        name: "Boris",
        avatar:
          "http://v.bootstrapmb.com/2017/12/xj70323/images/profile/profile6.jpg",
        message: this._state.profilePage.newPostText,
        likeCount: 212,
        postimg:
          "https://i.cbc.ca/1.5645636.1594411598!/fileImage/httpImage/elam-ending-071020.jpg",
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "ADD-DIALOG") {
      let newDialog = {
        id: "1",
        name: this._state.messagesPage.newDialogUser,
        avatar:
          "http://v.bootstrapmb.com/2017/12/xj70323/images/profile/profile1.jpg",
      };

      this._state.messagesPage.dialogs.push(newDialog);
      this._state.messagesPage.newDialogUser = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-DIALOGS") {
      this._state.messagesPage.newDialogUser = action.newText;
      this._callSubscriber(this._state);
    }
  },
};
export default store;
