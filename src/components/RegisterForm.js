import React, { Component } from 'react'
import Moment from 'moment';
// import { format } from 'date-fns';
import crudServices from '../Services/crudServices';
import { toast } from 'react-toastify';


const formatDate = Moment().format('YYYY-MM-DD')
const Services = new crudServices();

export default class RegisterForm extends Component {
  constructor() {
    super()
    this.state = {
      Username: "",
      setPassword: "",
      FirstName: "",
      LastName: "",
      MiddleName: "",
      Email: "",
      Company: "",
      Address: "",
      State: "",
      City: "",
      ZipCode: 111111,
      Gender: "Male",
      Dob: "01-01-2000",
      AllowNotification: 0,
      singleUserData: {}
    }
  }

  // componentWillMount(){
  //   console.log("Component has been Mouted")
  // }
  componentDidUpdate(prevProps) {
    console.log("Component Did Update")
    let person = this.props.data
    console.log(person.allowNotification, prevProps.data.username)
    if (Object.keys(person).length !== 0 && prevProps.data.username !== person.username) {
      this.saveValue(person)
      console.log(this.state.Username)
    }
  }

  saveValue = (data) => {
    console.log("This is saveValue func")
    if(data['AllowNotification']){
      this.setState({AllowNotification: 1})
    }else{
      this.setState({AllowNotification: 0})
    }
    this.setState({
      Username: data['username'],
      setPassword: data['password'],
      FirstName: data['firstName'],
      LastName: data['lastName'],
      MiddleName: data['middleName'],
      Email: data['email'],
      Company: data['company'],
      Address: data['address'],
      State: data['state'],
      City: data['city'],
      ZipCode: data['zipCode'],
      Gender: data['gender'],
      Dob: data['dob'],
      // AllowNotification: data['AllowNotification'],
    })
  }

  saveUser = (val) => {
    let allowNotificationValue = 0
    if(this.state.AllowNotification){
      allowNotificationValue = 1
    }
    else{
      allowNotificationValue = 0
    }
    console.log("Now Allow Notification value is "+allowNotificationValue)
    const dataOfUser = {
      username: this.state.Username,
      password: this.state.setPassword,
      email: this.state.Email,
      middleName: this.state.MiddleName,
      firstName: this.state.FirstName,
      LastName: this.state.LastName,
      company: this.state.Company,
      address: this.state.Address,
      city: this.state.City,
      state: this.state.State,
      zipCode: this.state.ZipCode,
      gender: this.state.Gender,
      dob: this.state.Dob,
      allowNotification: allowNotificationValue
    }
    if (val) {
      console.log("This is save User func")
      Services.SaveUserRecord(dataOfUser).then((data) => {
        console.log("Saving user data")
        console.log(data)
        toast("User data saved sucessfully")
      })
    }
    else {
      console.log("This is Edit User func")
      Services.UpdateUserRecord(dataOfUser).then((data) => {
        console.log(data)
        // console.log("User Updated Sucessfully");
        window.location.reload(false);
      });
    }

  }

  render() {
    return (
      <>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">User Registration <small>[Registration date={formatDate}]</small></h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="container">
            <table>
              <thead>
                <tr>
                  <th colSpan={3}>Username</th>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => this.setState({ Username: e.target.value })}
                      id="Username"
                      name="Username"
                      placeholder="Username"
                      value={this.state.Username}
                      disabled={this.props.appState}
                    />
                  </td>
                </tr>
                <tr>
                  <th colSpan={3}>Password</th>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) => this.setState({ setPassword: e.target.value })}
                      id="Password"
                      name="Password"
                      placeholder="Password"
                      value={this.state.setPassword}
                      disabled={this.props.btnState}
                    />
                  </td>
                </tr>
                <tr>
                  <th colSpan={3}>email</th>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <input
                      type="email"
                      className="form-control"
                      onChange={(e) => this.setState({ Email: e.target.value })}
                      id="email"
                      name="email"
                      placeholder="email"
                      value={this.state.Email}
                      disabled={this.props.btnState}
                    />
                  </td>
                </tr>
                <tr>
                  <th>First Name</th>
                  <th>Middle Name</th>
                  <th>Last Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => this.setState({ FirstName: e.target.value })}
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      value={this.state.FirstName}
                      disabled={this.props.btnState}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => this.setState({ MiddleName: e.target.value })}
                      id="middleName"
                      name="middleName"
                      placeholder="Middle Name"
                      value={this.state.MiddleName}
                      disabled={this.props.btnState}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => this.setState({ LastName: e.target.value })}
                      id="LastName"
                      name="LastName"
                      placeholder="Last Name"
                      value={this.state.LastName}
                      disabled={this.props.btnState}
                    />
                  </td>
                </tr>
                <tr>
                  <th colSpan={3}>Company</th>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => this.setState({ Company: e.target.value })}
                      id="Company"
                      name="Company"
                      placeholder="Company Name"
                      value={this.state.Company}
                      disabled={this.props.btnState}
                    />
                  </td>
                </tr>
                <tr>
                  <th colSpan={3}>Address</th>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <textarea
                      className="form-control"
                      id="Address"
                      name="Address"
                      onChange={(e) => this.setState({ Address: e.target.value })}
                      rows="3"
                      placeholder="Address"
                      value={this.state.Address}
                      disabled={this.props.btnState}
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <th>State</th>
                  <th>City</th>
                  <th>ZipCode</th>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      id="State"
                      name="state"
                      onChange={(e) => this.setState({ State: e.target.value })}
                      placeholder="State"
                      value={this.state.State}
                      disabled={this.props.btnState}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      id="City"
                      name="City"
                      onChange={(e) => this.setState({ City: e.target.value })}
                      placeholder="City"
                      value={this.state.City}
                      disabled={this.props.btnState}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      id="ZipCode"
                      name="ZipCode"
                      onChange={(e) => this.setState({ ZipCode: e.target.value })}
                      placeholder="ZipCode"
                      value={this.state.ZipCode}
                      disabled={this.props.btnState}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <th>DOB</th>
                </tr>
                <tr>
                  <td className="pl-30">
                    <input type="radio" disabled={this.props.btnState} checked={"Male" === this.state.Gender} id="male" onChange={(e) => this.setState({ Gender: e.target.value })} name="Gender" value="Male"></input>
                    &nbsp;Male<br />
                    <input type="radio" disabled={this.props.btnState} checked={"Female" === this.state.Gender} id="female" onChange={(e) => this.setState({ Gender: e.target.value })} name="Gender" value="Female" />
                    &nbsp;Female<br />
                    <input type="radio" disabled={this.props.btnState} checked={"Other" === this.state.Gender} id="other" onChange={(e) => this.setState({ Gender: e.target.value })} name="Gender" value="Other" />
                    &nbsp;Other<br />
                  </td>
                  <td>
                    <input
                      type="date"
                      className="form-control"
                      id="Dob"
                      name="Dob"
                      onChange={(e) => this.setState({ Dob: e.target.value })}
                      value={this.state.Dob}
                      disabled={this.props.btnState}
                      max={formatDate}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td colSpan={3}>
                  <input
                      type="checkbox"
                      className="form-control"
                      id="AllowNotification"
                      name="AllowNotification"
                      onChange={(e) => this.setState({ AllowNotification: e.target.value })}
                      value={this.state.AllowNotification}
                      // disabled={this.props.btnState}
                    ></input>&nbsp;Allow Notification?
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          { !this.props.appState ?
            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.saveUser(true)}>Save changes</button> :
            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.saveUser(false)}>Update changes</button>
          }
        </div>
      </>
    )
  }
}
