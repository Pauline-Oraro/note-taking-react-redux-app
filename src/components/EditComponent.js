// editing  the notes


import React from "react";
import { connect } from "react-redux";

class EditNote extends React.Component{
    handleUpdate =(e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const data = {
            newTitle,
            newMessage
        };
        this.props.dispatch({type: "UPDATE", id: this.props.note.id, data: data});
    }
    render(){
        return(
            <div key={this.props.note.id} className="note">
                <form className="form">
                    <input  required
                    ref={(input) => this.getTitle = input}
                    defaultValue={this.props.note.title}
                    placeholder="Enter Note Title"
                    />
                    <br />
                    <textarea required rows="5" cols="28" ref={(input) => this.getMessage = input} defaultValue = {this.props.note.message} placeholder = "Enter Note"></textarea>
                    <br></br>
                    <button onClick={this.handleUpdate}>UPDATE</button>
                </form>
            </div>
        )
    }
}

export default connect()(EditNote);