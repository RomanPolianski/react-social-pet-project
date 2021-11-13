import StoreContext from "../../storeContext";
import Sidebar from "./Sidebar";

let SidebarContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let friends = state.sidebar.friends;
        return <Sidebar friends={friends} />;
      }}
    </StoreContext.Consumer>
  );
};

export default SidebarContainer;
