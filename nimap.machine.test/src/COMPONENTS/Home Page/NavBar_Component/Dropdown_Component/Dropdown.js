import React,{Component} from "react";
import Information from "../Information_Component/Information";

class Dropdown extends Component{
    constructor() {
        super();
        this.state = {
          selectValue: "" 
        }
      };

    handleOnChange = e => {
        this.setState({selectValue:e.target.value});
      }

    handleFormSubmit = e => {
        e.preventDefault();
      }
    render(){
        return(
            <React.Fragment>
                     <form onSubmit={this.handleFormSubmit}>
                            <h5><select onChange={this.handleOnChange}>
                                <option value="India">India</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Canada">Canada</option>
                                <option value="USA">USA</option>
                            </select></h5>
                        </form>
                      <Information capital={this.state.selectValue}/>
            </React.Fragment>          
                       
                   
                
                
                  
              
        );
    }
};
export default Dropdown;