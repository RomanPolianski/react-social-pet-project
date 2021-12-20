import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import React from "react";

class NewsContainer extends React.Component {
  render() {
    return <News />;
  }
}

const News = (props) => {
  return <div>News</div>;
};

let withAuthNews = withAuthRedirect(NewsContainer);

export default withAuthNews;
