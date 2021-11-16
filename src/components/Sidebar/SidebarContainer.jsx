import { connect } from "react-redux";
import Sidebar from "./Sidebar";

// let SidebarContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();
//         let friends = state.sidebar.friends;
//         return <Sidebar friends={friends} />;
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    friends: state.sidebar.friends,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const SidebarConatiner = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarConatiner;
