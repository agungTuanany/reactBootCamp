import React, {Component} from 'react'

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleChildren: "Children Component Title",
      authorChildren: "Children Component Author"

    }
    this.childOnClick = this.childOnClick.bind(this);
  }
    childOnClick() {
      this.setState ({
        titleChildren: "changed",
        authorChildren: "CHANGED"

      })
    }
  render() {
    return (
      <div>
        <h1> this is A childred component</h1>
        <h1>Passing a props from App component to profile component</h1>
        <p>Children component title: {this.state.titleChildren}</p>
        <p>Children component Author: {this.state.authorChildren}</p>
        <h1 onClick={this.childOnClick}>HIT-ME</h1>
      </div>
    )
  }
}

export default Profile
