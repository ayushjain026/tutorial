import React, { Component } from "react";
import crudServices from "../Services/crudServices";
import RegisterForm from "./RegisterForm";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toast } from "react-toastify";

const Services = new crudServices();

export default class  Assignment extends Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      singlUserData: [],
      btnState:false,
      appState: false
    };
  }

  componentWillMount() {
    console.log("Getting user data")
    this.getUserdata()
  }
  // componentDidUpdate(prevProps){
  //   console.log("Updating component")
  //   this.getUserdata()
  // }

  getUserdata = () => {
    Services.GetUserRecord().then((data) => {
      console.log(data.data);
      this.setState({ userData: data.data });
    });
  }

  clickme1() {
    console.log("in click me");
    console.log(this.state.userData[0]);
  }

  viewUserData(index, btn_state) {
    if (btn_state){
      console.log("in view user")
      this.setState({ singlUserData: this.state.userData[index], btnState: true, appState: true })
      console.log(this.state.singlUserData)
    }
    else{
      console.log("This is edit button")
      this.setState({ singlUserData: this.state.userData[index], btnState: false, appState: true })
      console.log(this.state.appState)
    }
  };

  deleteUserData(index, username){
    console.log("In delete User")
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            Services.DeleteUserRecord(username).then((data) => {
            console.log(data)
            window.location.reload(false)
            toast("User Deleted")
          })}
        },
        {
          label: 'No',
          // onClick: () => alert('Click No')
        }
      ]
    });
  }

  newRegistration = () => {
    console.log("This is new reg")
    this.setState({ btnState: false , appState:false})
    this.setState({ singlUserData: {username: '',
                                    password: '',
                                    firstName: '',
                                    middleName: '',
                                    lastName: '',
                                    email: '',
                                    company: '',
                                    address: '',
                                    state: '',
                                    city: '',
                                    ZipCode: '',
                                    dob: '',
                                    gender: '',
                                    allowNotification: ''
                                  } 
                                })
    console.log(this.state.singlUserData)
    
  }


  render() {
    let self = this
    return (
      <>
        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <RegisterForm data={this.state.singlUserData} btnState={this.state.btnState} appState={this.state.appState} />
            </div>
          </div>
        </div>


        {/* <!-- Modal --> */}
        <div className="">
          <div className="d-flex flex-row bd-highlight mb-3 pt-5">
            <div className="bd-highlight">
              <h2>User List</h2>
            </div>
          </div>

          <div className="d-flex flex-row-reverse bd-highlight">
            <div className="bd-highlight mb-3">
              <button type="button" onClick={this.newRegistration} className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                New Registeration
              </button>
            </div>
          </div>

          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">email</th>
                <th scope="col">Full Name</th>
                <th scope="col">Address</th>
                <th scope="col">Zip Code</th>
                <th scope="col">Company</th>
                <th scope="col">Gender</th>
                <th scope="col">Allow Notification</th>
                <th scope="col" colSpan={3}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
              </tr>
              {this.state.userData.slice(0,).map(function (data, index) {
                return (
                  <tr key={data.username}>
                    <td>{index}</td>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>
                      {data.firstName}&nbsp;{data.middleName}&nbsp;
                      {data.lastName}
                    </td>
                    <td>
                      {data.address},&nbsp;{data.state},&nbsp;{data.city}
                    </td>
                    <td>{data.zipCode}</td>
                    <td>{data.company}</td>
                    <td>{data.gender}</td>
                    {data.allowNotification ? <td>Yes</td> : <td>No</td>}
                    {/* <td></td> */}
                    <td><button type="button" className="btn btn-primary" onClick={() => { self.viewUserData(index, true) }} data-toggle="modal" data-target="#exampleModal">
                      View User
                    </button></td>
                    {/* <td><button className="btn btn-primary" data-target="#exampleModal" onClick={() => { self.viewUserData(index) }}>View</button></td> */}
                      <td>
                        <button type="button" className="btn btn-success" onClick={() => { self.viewUserData(index, false) }} data-toggle="modal" data-target="#exampleModal">
                          Edit User
                        </button>
                      </td>
                    <td><button type="button" className="btn btn-danger" onClick={() => { self.deleteUserData(index, data.username) }}>Delete</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
