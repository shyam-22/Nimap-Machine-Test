import React,{Component} from "react";
import {history} from "../../COMPONENTS/History/history"

class User extends Component{
    constructor(){
        super();
        this.state={
            Password:localStorage.getItem("userPassword"),
            ButtonText:true
        }
    };
    changePassword = (e) => {
        e.preventDefault();
        this.setState({ButtonText : !this.state.ButtonText , Password :""})

        if(!this.state.ButtonText){
            localStorage.setItem("userPassword",this.state.Password);
            this.setState({ Password : this.state.Password})
            alert("Password Updated Successfully...!!!")
        }
    }

    logout = () => {
        localStorage.setItem("userName","")
        localStorage.setItem("userPassword","")
        history.push("/login")
        }

    render(){
        return(
            <div className="container mt-5">
                  <form>
                    <div className="form-group">
                        <label>UserName : </label>
                        {localStorage.getItem("userName")}
                    </div>
                       
                        <div className="form-group">
                        <label>Password :</label>
                            <input type="password" className="form-control" placeholder="Password"
                            name="Password" value={this.state.Password}
                            onChange={(e)=>{this.setState({Password:e.target.value})}}
                            />
                        </div>

                    <button type="submit" className="btn btn-success mr-5" onClick={this.changePassword}>
                        {this.state.ButtonText ? 'Change Password' : 'Save Password'}
                    </button>
                        
                    <button type="submit" className="btn btn-danger"onClick={this.logout}>Logout</button>
                     </form>
                  </div>
        );
    }
};
export default User;