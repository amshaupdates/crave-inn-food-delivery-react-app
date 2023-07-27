import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("child constructor");

    this.state = {};
  }

  componentDidMount () {
    console.log("Children component did mount.")
  }

  componentDidUpdate () {
    console.log("Children component did update");
  }

  componentWillUnmount () {
    console.log("children component will unmount");
  }
  render() {
    const { image, name } = this.props;
    console.log("chlildren render method.");
    return (
      <div className="user-card">
        <img src={image} alt="avtar" />
        <h2>Name: {name}</h2>
        <h3>Location: Gurugram</h3>
        <h4>Contact: @theamitjangra</h4>
      </div>
    );
  }
}

export default UserClass;
