import React , {Component} from 'react';

class Form extends Component{
    constructor(){
        super()
        this.state = {
            name : "",
            emailId : "",
            nameOfHotel : "",
        }
    }
    handleChangeEmail(){
        console.log("Name :" + this.state.name);
        console.log("emailId :" + this.state.emailId);
        console.log("Hotel name :" + this.state.nameOfHotel);

        var nameOne = this.state.name;
        var email = this.state.emailId;
        var hotelName = this.state.nameOfHotel;

        var regexName = /^([a-zA-Z])+(a-zA-Z])+$/gi;
        var resultName = nameOne.match(regexName);

        if(this.state.name == resultName && this.state.name != ""){
            console.log("name has been entered sucessfull");
        }

        var regexEmail = /((w|\D)+@+(w|\D)+\.+com ?|in)/gi;
        var resultEmail = email.match(regexEmail);

        if(this.state.emailId == resultEmail && this.state.emailId != ""){
            console.log("Email has been entered sucessfull");
        }

        var regexHotel = /^(\D+\w)+$/gi;
        var resultHotel = hotelName.match(regexHotel);

        if(this.state.nameOfHotel == resultName && this.state.nameOfHotel != ""){
            console.log("hotel name  has been entered sucessfull");
        }


    }
    render(){
        return(
            <div>
                <h1>Form Elements</h1>
                <label>Name :</label>
                <input type='text' id="name" value={this.state.name} onChange={(e)=>{this.setState({name :e.target.value})}}></input> <br/>
                <label>Email Id :</label>
                <input type='email' id="email Id" value={this.state.emailId} onChange={(e)=>{this.setState({emailId :e.target.value})}}></input> <br/>
                <label>Hotel :</label>
                <select id="hotel" value={this.state.nameOfHotel} onChange={(e)=>{this.setState({nameOfHotel :e.target.value})}}> <br/>
                <option value={"Ocean pearl"}>Ocean pearl</option>
                <option value={"empire"}>empire</option>
                <option value={"Taj westland"}>Taj westland</option>
                </select> <br/>
                <button type="submit" onClick={()=>{this.handleChangeEmail}}>Submit</button>
            </div>
                
            
                
        )
    }

}
export default Form