import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import React from "react";
class MusicContainer extends React.Component {
  render() {
    return <Music {...this.props} />;
  }
}

const Music = (props) => {
  return <div>Music</div>;
};

let withAuthMusic = withAuthRedirect(MusicContainer);

export default withAuthMusic;
