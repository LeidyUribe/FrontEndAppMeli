import React from "react";

class Button extends React.Component {
render () {
  return (
      <button
        id={this.props.id}
        type={this.props.type}
        disabled={this.props.disabled}
        variant={this.props.variant}
      >
        {this.props.children}
      </button>
  );
}
}
export default Button;
