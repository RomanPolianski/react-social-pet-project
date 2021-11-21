import { connect } from "react-redux";
import Sidebar from "./Sidebar";

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
