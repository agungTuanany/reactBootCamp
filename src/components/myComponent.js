import React, {Component} from 'react'

class Profile extends Component {
  render() {
    return (
      <div>
        <h1> this is A childred component</h1>
        <h1>Passing a props from App component to profile component</h1>
        <p>{this.props.title}</p>
        <p>{this.props.company}</p>
      </div>
    )
  }
}

export default Profile
