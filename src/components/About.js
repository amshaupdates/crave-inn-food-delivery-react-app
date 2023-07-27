import React from 'react';
import UserClass from './UserClass';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: "Dummy",
      }
    };
    console.log("parent constructor");
  }
  async componentDidMount () {
    console.log("parent component did mount.");

    const data = await fetch("https://api.github.com/users/amshaupdates");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userData: json
    });
  }

  componentDidUpdate () {
    console.log("parent component did update");
  }

  componentWillUnmount () {
    console.log("parent component will unmount");
  }

  render () {
    console.log("parent render method.")
    // console.log(this.state.userData);
    return (
      <div>
          <h1>About</h1>
          <UserClass name={this.state.userData.login} image={this.state.userData.avatar_url} />
      </div>
    )
  }
}


export default About;