import React from "react";
import Wrapper from "../../hoc/Wrapper";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {

    state = {
        showSideDrawer: false,
    };

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false,
        })
    };

    toggleSideDrawerHandler = () => {
        //safe way of changing the state when new state depends on old state
        this.setState( ( prevState ) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        })
    };

    render() {
      return (
        <Wrapper>
            <Toolbar toggleSideDrawer={this.toggleSideDrawerHandler} />
            <SideDrawer closeSideDrawer={this.sideDrawerClosedHandler} open={this.state.showSideDrawer} />
            <main className={classes.content}>
                {this.props.children}
            </main>
        </Wrapper>
      )

    }
}

export default Layout;
