import * as React from "react";


export class Loading extends React.Component {
  render() {
    let {className} = this.props;

    return (
      <div className={"loading " + (className || "")}>
        <img src={require('./loading.gif')} alt="loading"/>
      </div>
    )
  }
}

export class LoadingLine extends React.Component {
  render() {
    let {className} = this.props;

    return (
      <img className={"loadingLine " + (className || "")}
           src={require('./loading.gif')}
           alt="loading"/>
    )
  }
}
