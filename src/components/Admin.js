import React from "react";
import { getJwt } from './helpers/jwt';

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthorized: true,
      serverUser: []
    };
  }

  componentWillMount() {
    localStorage.setItem('isLoggedIn', true);

  }



  componentDidMount() {
    const API_URL = "https://powerful-plateau-66121.herokuapp.com/admin" || "http://localhost:8080/admin";
    const jwt = getJwt();
    const bearer = 'Bearer ' + jwt;


    if (!jwt) {
      this.props.history.push('/login');
    }

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': bearer,
        'Content-Type': 'application/json'
      }

    })
      .then(res => res.json())
      .then(response => {
        console.log(response);
        this.setState({
          serverUser: response

        });
      });

    localStorage.removeItem('jwt');
  }

  render() {

    var users = this.state.serverUser;

    var newList = users.map((user, i) => {

      return (
        <div key={user._id} className="row admin-container">
          <div className="col-md-2 offset-md-1 text-right">
            <h4> {user._id} </h4>
          </div>
          <div className="col-md-2 mx-3 text-right">
            <h4> {user.name} </h4>
          </div>
          <div className="col-md-3 mx-3 text-right">
            <h4> {user.email} </h4>
          </div>
          <div className="col-md-2 mx-3 text-right">
            <h4> {user.password} </h4>
          </div>
        </div>
      )
    });

    return (
      <div>

        {
          this.state.isAuthorized

            ?

            <div>

              <div className="row admin-container">
                <div className="col-md-2 offset-md-1 table-heading">
                  <h4> ID </h4>
                </div>

                <div className="col-md-2 mx-3 table-heading">
                  <h4> Name </h4>
                </div>

                <div className="col-md-3 mx-3 table-heading">
                  <h4> Email </h4>
                </div>

                <div className="col-md-2 mx-3 table-heading">
                  <h4> Password </h4>
                </div>


              </div>


              {newList}


            </div>

            :

            <div>
              <h4> Loading ... </h4>
            </div>
        }
      </div>
    );
  }

}






export default Admin;
