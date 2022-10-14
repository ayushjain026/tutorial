import configuration from "../Configurations/configuration"
import Axios from "./AxiosService"

const axios = new Axios();
// const config = new configuration(); 

export default class crudServices {

    CreateRecord(data){
        console.log("data : ", data, " Url : ", configuration.createCountryRecords)
        return axios.postData(configuration.createCountryRecords, data, false)
    }

    GetRecord(){
        console.log("Url : " + configuration.getCountryRecords);
        return axios.getData(configuration.getCountryRecords, false)
    }

    GetCountryData(id){
        console.log("Id: ", id,"Url : ", configuration.getCountryRecord+id)
        return axios.getData(configuration.getCountryRecord+id, false)
    }

    UpdateCountry(data){
        console.log("Updating user")
        return axios.putData(configuration.updateCountryRecord, data, false)
    }

    deleteCountry(id){
        console.log("In delete Country Event")
        return axios.deleteData(configuration.deleteCountryRecord, id, false)
    }

    GetUserRecord(){
        console.log("Getting User details with URL : ", configuration.getUserRecord)
        return axios.getUserData(configuration.getUserRecord, false)
    }

    SaveUserRecord(data){
        console.log("Saving user Information with url : ", configuration.saveUserRecord)
        return axios.SaveUserData(configuration.saveUserRecord, data, false)
    }

    UpdateUserRecord(data){
        console.log("Updating existing user", configuration.updateCountryRecord)
        return axios.updateUserData(configuration.updateUserRecord + data.username, data, false)
    }

    DeleteUserRecord(username){
        console.log("In delete func")
        return axios.deleteUserData(configuration.deleteUserRecord + username, false)
    }

}
