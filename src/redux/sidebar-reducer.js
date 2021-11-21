let initialState = {
    friends: [
      {
        name: "Masha",
        id: "1",
        avatar:
          "https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg",
      },
      {
        name: "Dasha",
        id: "2",
        avatar:
          "https://pbs.twimg.com/media/DtAGYO3W0AAr1v1.jpg",
      },
      {
        name: "Pasha",
        id: "3",
        avatar:
          "https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg",
      },
    ],
  };


const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;
