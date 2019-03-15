import React from "react";

class LogOut extends React.Component {


  constructor(props) {
    super(props);
    this.state = { timer: 3 };
    this.countDown = this.countDown.bind(this);


  }

  countDown() {

    if( this.state.timer === 1 ){
        this.props.history.push('/Login');

    } else {
        this.setState({ timer: this.state.timer - 1 });
    }


  }

  componentDidMount() {
    localStorage.removeItem('isLoggedIn');
    this.props.history.push('/Login');

  }


  render(){


    return (
      <div className = "row text-center">
        <div className = "col-md-3 login-container">
        <h3>You have succesfully logged out!</h3>
        <h3> Redirecting in....{this.state.timer}</h3>
        </div>
      </div>
    )

  };


}

export default LogOut;
