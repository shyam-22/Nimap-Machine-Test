import React,{Component} from "react";
import SimpleReactValidator from "simple-react-validator";
import {history} from "../../COMPONENTS/History/history"
import "../../App.css";
class Login extends Component{
    constructor(){
        super()
        this.state = {
            userName : "",
            userPassword : ""
        }
        this.validator=new SimpleReactValidator({autoForceUpdate:this});
    };

    handleInput = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        if(this.validator.allValid())
        { 
                localStorage.setItem("userName",this.state.userName)
                localStorage.setItem("userPassword",this.state.userPassword)
        }
        else{
            this.validator.showMessages()
            this.forceUpdate()
        }
        let userName=localStorage.getItem("userName")
        let password=localStorage.getItem("userPassword")
        if(userName === this.state.userName && password === this.state.userPassword){
            history.push("/Menu")
            window.location.reload();
        }
        else{
            alert("Please Login First...!")
        }
    };
  render(){ 
        return(
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8">
                        <form onSubmit={this.handleFormSubmit}>
                             <h2>Please Login First...!</h2>
                                <div className="form-group">
                                    <label><b>Username</b></label><br/>
                                    <input type="text" className="form-control" placeholder="Enter Your Username"
                                    name="userName"  value={this.state.userName} onChange={this.handleInput}/>
                                    {this.validator.message("username",this.state.userName,"required|min:5|max:20")}
                                </div>

                                <div className="form-group">
                                    <label><b>Password</b></label><br/>
                                    <input type="password" className="form-control" placeholder="Enter Your Password"
                                    name="userPassword" value={this.state.userPassword} onChange={this.handleInput}/>
                                    {this.validator.message("Password",this.state.userPassword,"required|min:5|max:20")}
                                    </div>
                
                                <button className="btn btn-primary">Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
                )
            }
        };
export default Login