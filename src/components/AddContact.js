import React from "react";



export default class AddContact extends React.Component {
    state={
        name:"",
        email:""
    };

    add=(e)=>
    {
        e.preventDefault();
        if(this.state.name==="" || this.state.email===""){
            alert("All the fileds are mandatory");
            return;
        }
        this.props.AddContactHandler(this.state);
        console.log(this.state);
        this.setState({
            name:"",
            email:""
        });

    }
  render() {
    return (
      <div className="ui-main">
        <h2>Add Contact</h2>
        <form className="ui-form" onSubmit={this.add}>
            <div className="filed">
                <label>Name</label>
                <input type="text" value={this.state.name} name="name" placeholder="Name" onChange={(e)=>{this.setState({name:e.target.value})}} />
            </div>
            <div className="filed">
                <label>Email</label>
                <input type="text" value={this.state.email} name="email" placeholder="Email" onChange={(e)=>{this.setState({email:e.target.value})}} />
            </div>
            <button className="ui-button-blue">Add</button>
        </form>
        
      </div>
    )
  }
}
