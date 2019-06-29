import React from "react";

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {submitted: false,
                  isLoading: false,
                  isAuthentic: false
                };
    this.handleSubmit = this.handleSubmit.bind(this);
    localStorage.removeItem('isLoggedIn');
  }

  componentWillMount() {

    localStorage.removeItem('isLoggedIn');

  }

  handleSubmit(event){
    event.preventDefault();
    const API_URL = "https://powerful-plateau-66121.herokuapp.com/login"; //https://powerful-plateau-66121.herokuapp.com/login
    const data = new FormData(event.target);
    const email = data.get('email');
    const password = data.get('password');
    const form = "login";

    this.setState({
      isLoading: true
    })

    const user = {
      email,
      password,
      form
    };


    fetch(API_URL, {
      method:'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type' : 'application/json'
      }
    }).then(res => res.json())
      .then(data => {
            console.log(data);

            if(data.isAuthentic){
              this.setState({isLoading: false});
              localStorage.setItem('jwt', data.token );
              localStorage.setItem('isLoggedIn', true);
              this.props.history.push('/admin');

            }else{
              this.setState({isLoading: false});
              alert('Sorry! That is the wrong login');

            }

          });
  }


  render() {
    return (

      <div className = "row">
        <div className = "col-md-3 login-container">


      {

        this.state.isLoading

        ?

        <div><img src="./img/loading.gif"></img></div>

        :

          <div>
            <h3> Login </h3>
            <form id="loginForm" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" name="email"  aria-describedby="emailHelp" placeholder="Enter email" required></input>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" name="password" placeholder="Password" autoComplete="new-password" required></input>
              </div>
              <button type="submit" className="btn btn-primary">Log in</button>
            </form>
            </div>

      }
    </div>
  </div>




    );
  }
}

export default Form;
