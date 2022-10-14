const Axios = require('axios').default


export default class AxiosService {

    postData(url, data, IsRequired = false, Header){
        return Axios.post(url, data, Header)
    }

    getData(url, IsRequired = false, Header){
        console.log("In axios services")
        return Axios.get(url, IsRequired&&Header);
    }

    putData(url, data, IsRequired=false, Header){
        console.log("In put data Service");
        return Axios.put(url, data, Header)
    }

    deleteData(url, id, IsRequired=false, Header){
        console.log("In delete data Service");
        return Axios.delete(url, id, Header)
    }

    getUserData(url, Header){
        return Axios.get(url, Header)
    }

    SaveUserData(url, data, IsRequired=false, Header){
        console.log("In save user data Service");
        return Axios.post(url, data, Header)
    }

    updateUserData(url, data, IsRequired=false, Header){
        console.log("This is Update User Services")
        console.log(data)
        return Axios.put(url, data, Header)
    }

    deleteUserData(url, Header){
        console.log("Deleting User")
        return Axios.delete(url, Header)
    }
    
}
