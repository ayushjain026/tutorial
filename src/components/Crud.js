import React, { Component } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import crudServices from '../Services/crudServices';


const Service = new crudServices();

export default class Crud extends Component {

    constructor() {
        super()
        this.state = {
            countryCode: "",
            countryName: "",
            countryId: "",
            mode: 0,
            countryData: []
        }

    }
    handleRemoveExtraSpaces = () => {
        if (this.countryName === '') {
            toast("Please Enter data")
        }
        else {
            let newText = this.state.countryName.split(/[ ]+/);
            this.setState({ countryName: newText.join(' ') })
            toast("Extra spaces removed")
        }
    }

    componentWillMount() {
        console.log("Component will be monting")
        this.ReadRecord()
    }

    ReadRecord = () => {
        console.log("Reading records")
        Service.GetRecord().then((data) => {
            console.log(data.data)
            this.setState({ countryData: data.data })
        }).catch((error) => {
            console.log(error)
        })
    }

    handleSubmit = () => {

        // Send data to API
        if (this.state.countryName === '' && this.state.countryCode === '') {
            console.log("Invalid");
            toast("please enter valid data")
            return;
        }
        console.log("Data : ", this.state);
        this.handleRemoveExtraSpaces()
        const data = {
            countryName: this.state.countryName,
            countryCode: this.state.countryCode
        }
        Service.CreateRecord(data).then((data) => {
            this.ReadRecord()
        }).catch((error) => {
            toast(error)
            console.log(error);
        })
        toast("Data Saved")
        console.log("Data Saved")

        this.setState({ countryName: '', countryCode: '' })
    }

    viewCountry = (id) => {
        if (id === '') {
            toast("Something went wrong")
        }
        else {
            console.log("https://localhost:7163/api/Country?Id=" + id)
            Service.GetCountryData(id).then((data) => {
                console.log(data.data.id)
                this.setState({ countryName: data.data.countryName, countryCode: data.data.countryCode, countryId:data.data.id })
                this.setState({ mode: 1 })
                console.log("Mode : " + this.state.mode)

            }).catch((error) => {
                console.log(error)
            })
        }
    }
    AddCountry = () => {
        this.setState({ mode: 2, countryName: '', countryCode: '' })
    }

    ShowCountry = (id) => {
        this.viewCountry(id)
        if (id === '') {
            toast("Something went wrong")
        }
        else {
            console.log("https://localhost:7163/api/Country?Id=" + id)
            Service.GetCountryData(id).then((data) => {
                console.log(data.data.id)
                this.setState({ countryName: data.data.countryName, countryCode: data.data.countryCode })
                this.setState({ mode: 2 })
                console.log("Mode : " + this.state.mode)

            }).catch((error) => {
                console.log(error)
            })
        }
        console.log("Mode : ",this.state.mode)
    }

    updateCountry = () => {
        this.setState({mode: 0})
        const data = {
            id:this.state.countryId,
            countryName: this.state.countryName,
            countryCode: this.state.countryCode
        }
        Service.UpdateCountry(data).then((data)=>{
            this.ReadRecord()
            console.log(data)
            toast("Data Updated Sucessfully")
            this.ReadRecord()
            this.AddCountry()
        })
    }
    deleteCountry = (id) => {
        Service.deleteCountry(id).then((data => {
            toast("Data Updated Sucessfully")
        }))
    }


    render() {
        let self = this
        return (
            <>
                <ToastContainer />

                <div className="container my-5">
                    <div className=''>
                        <button className='btn btn-primary' onClick={this.AddCountry}>Add Country</button>
                    </div>
                    <div className="form-group">
                        <p>Country Name</p>
                        {this.state.mode === 1 ?
                            <input type="text" disabled className="form-control" value={this.state.countryName} onChange={(e) => { this.setState({ countryName: e.target.value }) }} id="countryName" name='countryName' placeholder="Enter Country Name" /> :
                            <input type="text" className="form-control" value={this.state.countryName} onChange={(e) => { this.setState({ countryName: e.target.value }) }} id="countryName" name='countryName' placeholder="Enter Country Name" />}
                    </div>
                    <div className="form-group">
                        <label>Country Code</label>
                        {this.state.mode === 1 ?
                            <input type="text" disabled className="form-control" value={this.state.countryCode} onChange={(e) => { this.setState({ countryCode: e.target.value }) }} id="countryCode" name='countryCode' placeholder="Enter Country code" /> :
                            <input type="text" className="form-control" value={this.state.countryCode} onChange={(e) => { this.setState({ countryCode: e.target.value }) }} id="countryCode" name='countryCode' placeholder="Enter Country code" />}
                    </div>
                    {this.state.mode === 2?
                        <button type="submit" onClick={this.updateCountry} className="btn btn-primary">Update</button>:
                        <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
                    }
                    </div>


                <table border={1} className="table my-5 container">
                    <thead>
                        <tr><th colSpan={6}>Total Records = {this.state.countryData.length}, Mode={this.state.mode}</th></tr>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Country Name</th>
                            <th scope="col">Country code</th>
                            <th scope='col' style={{ textAlign: "center" }} colSpan={3}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(this.state.countryData) && this.state.countryData.length > 0 ?
                                this.state.countryData.map(function (data, index) {
                                    return (
                                        <tr key={data.id}>
                                            <td>{data.id}</td>
                                            <td>{data.countryName}</td>
                                            <td>{data.countryCode}</td>
                                            <td>
                                                <button onClick={() => { self.viewCountry(data.id) }} className="btn btn-info btn-lg">
                                                    <span className="glyphicon glyphicon-edit"></span> View
                                                </button>
                                            </td>
                                            <td>
                                                <a onClick={() => {self.ShowCountry(data.id)}} className="btn btn-success btn-lg">
                                                    <span className="glyphicon glyphicon-edit"></span> Edit
                                                </a>
                                            </td>
                                            <td>
                                                <a onClick={() => {self.deleteCountry(data.id)}} className="btn btn-danger btn-lg">
                                                    <span className="glyphicon glyphicon-edit"></span> Delete
                                                </a>
                                            </td>
                                        </tr>
                                    )
                                }) :
                                <tr>No Data</tr>
                        }
                    </tbody>
                </table>
            </>
        )
    }
}
