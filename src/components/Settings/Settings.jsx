import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import React from "react";

class SettingsContainer extends React.Component {
    render(){
        return <Settings {...this.props} />
    }
}

const Settings = (props) => {
    return(
        <div>
            Settings
        </div>
    )
}

let withAuthSettings = withAuthRedirect(SettingsContainer)

export default withAuthSettings;