import React from "react";


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          display: {display: 'none'},
          isLoading: false,
          submitted: false,
          error_field: "",
          error: ""
        };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {

  }

  handleSubmit(event) {
    console.log("click");
    event.preventDefault();
    const API_URL= "https://powerful-plateau-66121.herokuapp.com/signup"; //"https://glacial-sierra-61756.herokuapp.com/"
    const data = new FormData(event.target);
    const name = data.get('name');
    const email = data.get('email');
    const username = data.get('username');
    const password = data.get('password');

    this.setState({
      isLoading: true
    });

    const user = {
      email,
      name,
      username,
      password
    };

    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type' : 'application/json'
      }
    }).then(response => response.json())
      .then(result => {
        console.log(result);



        if(result.isValidated){
          console.log("this works");
          this.setState({
            submitted: true,
            isLoading: false

          });
        } else {
          console.log("it doesnt work");
          this.setState({
            display: {display: 'inline'},
            error_field: result.error_field,
            error: result.message,
            isLoading: false
          });
        }
      });




  }

  render() {
    return (
      <div>
        <div className="container-fluid">
        <div className="row text-center">
        <div className="col-md-5 login-container">

        {
          this.state.isLoading

          ?

          <img src="./img/loading.gif"></img>

          :

           <div>

             {this.state.submitted ?
              <div>
              <h3>Sign Up Complete!</h3>
              <h3> You may now login!</h3>
              </div>
                                    :

                                    <form onSubmit={this.handleSubmit}>
                                      <div className="row text-center">
                                        <div className="col-md-12">
                                        <h3> Sign Up </h3>
                                        </div>
                                      </div>
                                      <div className="row input-row">
                                        <div className="col-md-2 offset-md-1 text-right">
                                          <div style={this.state.display}>
                                            { this.state.error_field === 'email' ?
                                              <i className="fa fa-times" aria-hidden="true"></i> :
                                              <i className="fa fa-check" aria-hidden="true"></i> }
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <input type="text" className="form-control" placeholder="Email" name="email" required/>
                                        </div>
                                      </div>
                                      <div className="row input-row">
                                        <div className="col-md-2 offset-md-1 text-right">
                                          <div style={this.state.display}>
                                          { this.state.error_field === 'name' ?
                                            <i className="fa fa-times" aria-hidden="true"></i> :
                                            <i className="fa fa-check" aria-hidden="true"></i> }
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <input type="text" className="form-control" placeholder="Name" name="name" required/>
                                        </div>
                                      </div>
                                      <div className="row input-row">
                                        <div className="col-md-2 offset-md-1 text-right">
                                        <div style={this.state.display}>
                                        { this.state.error_field === 'username' ?
                                          <i className="fa fa-times" aria-hidden="true"></i> :
                                          <i className="fa fa-check" aria-hidden="true"></i> }
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                          <input type="text" className="form-control" autoComplete="username" placeholder="Username" name="username" required/>
                                        </div>
                                      </div>
                                      <div className="row input-row">
                                        <div className="col-md-2 offset-md-1 text-right">
                                        <div style={this.state.display}>
                                        { this.state.error_field === 'password' ?
                                          <i className="fa fa-times" aria-hidden="true"></i> :
                                          <i className="fa fa-check" aria-hidden="true"></i> }
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                          <input type="password" autoComplete="new-password" className="form-control" placeholder="Password" name="password" required/>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-6 offset-md-3">
                                          <div className="col text-danger">{this.state.error}</div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-6 offset-md-3">
                                          <button className="btn btn-primary btn-block signup-btn" type="submit"> Sign Up </button>
                                        </div>
                                      </div>
                                      </form>}


           </div>
        }



        </div>
        </div>
        </div>
      </div>
    )
  }


}


export default SignUp;

/*<div className = "row text-center">
  <div className = "col-md-1"> <h3>New Col</h3></div>

  <div className = "col-md-6">


  {

  this.state.submitted

  ?

  <div>
   <h3>Sign Up Complete!</h3>
   <h3> You may now login!</h3>
   </div>

  :

  <div className="row">


  <form onSubmit={this.handleSubmit}>
  <div className="col-md-6">
  <h3>SignUp</h3>
  </div>
    <div className="form-group signup-form">
      <input type="text" className="form-control" placeholder="Email" name="email" required/>
      <input type="text" className="form-control" placeholder="Name" name="name" required/>
      <input type="text" className="form-control" autoComplete="username" placeholder="Username" name="username" required/>
      <input type="password" autoComplete="new-password" className="form-control" placeholder="Password" name="password" required/>
      <div className="col text-danger">{this.state.error} </div>
      <button className="btn btn-primary btn-block signup-btn" type="submit"> Sign Up </button>

    </div>
  </form>
  </div>

  }
  </div>

</div>*/
