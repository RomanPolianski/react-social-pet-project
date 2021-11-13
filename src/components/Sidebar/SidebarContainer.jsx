import Sidebar from "./Sidebar";

let SidebarContainer = (props) => {
  let state = props.store.getState();
  let friends = state.sidebar.friends;

  return <Sidebar friends={friends} />;
};

export default SidebarContainer;
