import React, { useEffect } from "react";
import { useState } from "react";
import crudServices from "../Services/crudServices";
import getUserdata from "./Assignment";
import Moment from 'moment';


const Services = new crudServices();

export default function RegistrationForm({ data, btnState, appState }) {

  const formatDate = Moment().format('DD-MM-YYYY')

  const [Username, setUsername] = useState();
  const [Password, setPassword] = useState();
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [MiddleName, setMiddleName] = useState();
  const [Email, setEmail] = useState();
  const [Company, setCompany] = useState();
  const [Address, setAddress] = useState();
  const [State, setStates] = useState();
  const [City, setCity] = useState();
  const [ZipCode, setZipCode] = useState(232323);
  const [Gender, setGender] = useState("Male");
  const [Dob, setDob] = useState();
  const [AllowNotification, setAllowNotification] = useState();
  
  setUsername(data.username);
  setEmail(data.email)

  
  useEffect(() => {
    setUsername(data.username);
    setEmail(data.email)
  });

  const saveUser = (event, val) => {
    console.log("Save User"+val);
    const userData = {
      username: Username,
      password: Password,
      firstName: FirstName,
      middleName: MiddleName,
      lastName: LastName,
      email: Email,
      company: Company,
      address: Address,
      state: State,
      city: City,
      ZipCode: ZipCode,
      dob: Dob,
      gender: Gender,
      allowNotification: AllowNotification
    }
    console.log(userData)
    Services.SaveUserRecord(userData).then((op) => {
      console.log(op)
      getUserdata()
    })

  }

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
                <th colSpan={3}>Username{appState}</th>
              </tr>
              <tr>
                <td colSpan={3}>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setUsername(e.target.value)}
                    id="Username"
                    name="Username"
                    placeholder="Username"
                    value={Username}
                    disabled={appState}
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
                    onChange={(e) => setPassword(e.target.value)}
                    id="Password"
                    name="Password"
                    placeholder="Password"
                    value={Password}
                    disabled={btnState}
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
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    placeholder="email"
                    value={Email}
                    disabled={btnState}
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
                    onChange={(e) => setFirstName(e.target.value)}
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={data.firstName}
                    disabled={btnState}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setMiddleName(e.target.value)}
                    id="middleName"
                    name="middleName"
                    placeholder="Middle Name"
                    value={data.middleName}
                    disabled={btnState}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setLastName(e.target.value)}
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={data.lastName}
                    disabled={btnState}
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
                    onChange={(e) => setCompany(e.target.value)}
                    id="Company"
                    name="Company"
                    placeholder="Company Name"
                    value={data.company}
                    disabled={btnState}
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
                    onChange={(e) => setAddress(e.target.value)}
                    rows="3"
                    placeholder="Address"
                    value={data.address}
                    disabled={btnState}
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
                    onChange={(e) => setStates(e.target.value)}
                    placeholder="State"
                    value={data.state}
                    disabled={btnState}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="City"
                    name="City"
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                    value={data.city}
                    disabled={btnState}
                  ></input>
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    id="ZipCode"
                    name="ZipCode"
                    onChange={(e) => setZipCode(e.target.value)}
                    placeholder="ZipCode"
                    value={data.zipCode}
                    disabled={btnState}
                  ></input>
                </td>
              </tr>
              <tr>
                <th>Gender</th>
                <th>DOB{data.dob}</th>
              </tr>
              <tr>
                <td className="pl-30">
                  <input type="radio" disabled={btnState} checked={"Male" === data.gender} id="male" onChange={(e) => setGender(e.target.value)} name="Gender" value="Male"></input>
                  &nbsp;Male<br />
                  <input type="radio" disabled={btnState} checked={"Female" === data.gender} id="female" onChange={(e) => setGender(e.target.value)} name="Gender" value="Female" />
                  &nbsp;Female<br />
                  <input type="radio" disabled={btnState} checked={"Other" === data.gender} id="other" onChange={(e) => setGender(e.target.value)} name="Gender" value="Other" />
                  &nbsp;Other<br />
                </td>
                <td>
                  <input
                    type="date"
                    className="form-control"
                    id="Dob"
                    name="Dob"
                    onChange={(e) => setDob(e.target.value)}
                    // value={data.dob}
                    disabled={btnState}
                  ></input>
                </td>
              </tr>
              <tr>
                <th className="pl-3" colSpan={3}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="AllowNotification"
                    name="AllowNotification"
                    onChange={(e) => setAllowNotification(e.target.value)}
                    value={data.allowNotification}
                    checked={data.allowNotification}
                    disabled={btnState}
                  ></input>&nbsp;Allow Notification?
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        { !appState ?
          <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => saveUser(true)}>Save changes</button>:
          <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => saveUser(false)}>Update changes</button>
        }
        </div>
    </>
  );
}
