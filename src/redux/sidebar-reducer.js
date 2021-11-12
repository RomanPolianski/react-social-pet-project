let initialState = {
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
  };


const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;
