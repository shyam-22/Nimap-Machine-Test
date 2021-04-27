import React,{Component} from "react";
class Information extends Component{
     constructor(props){
        super(props);
        this.state = {
            Nepal:"Nepal",
            India:"India",
            Bhutan:"Bhutan",
            Canada:"Canada",
            USA : "USA"
            }
      };
    render(){
        let val=this.props.capital;
        if(val===this.state.India){
            return( <div className="container">                
                        <h3>Capital Is New-Delhi</h3>  
                    </div>
               );
           }
           else if(val===this.state.Nepal){
            return( <div className="container">                
                        <h3>Capital Is Kathmandu </h3>  
                    </div>
               );
           }
           else if(val===this.state.Bhutan){
            return( <div className="container">                
                        <h3>Capital Is Thimpu</h3>  
                    </div>
               );
            }
            else if(val===this.state.Canada){
                return( <div className="container">                
                            <h3>Capital Is Ottawa</h3>  
                        </div>
                   );
                }
            else if(val===this.state.USA){
                return( <div className="container">                
                                <h3>Capital Is Washington DC</h3>  
                            </div>
                       );
                    }
           else{
               return ""
               }
       }
};
export default Information
