import * as React from "react";

class ComponentByUser extends React.Component {

  UNSAFE_UNSAFE_componentWillMount(){

  }

  render() {
    let {Component, props={}} = this.props;

    return (
      <Component {...props}/>
    );
  }
}

export default ComponentByUser;
