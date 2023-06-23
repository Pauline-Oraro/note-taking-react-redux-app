// notes

import React from "react";
import { connect } from "react-redux";

class Note extends React.Component{
    render(){
        return (
            <div className="note">
                <h2 className="note_title">{this.props.note.title}</h2>
                <p className="note_message">{this.props.note.message}</p>
                <div className="control-buttons">
                    <button className="edit" onClick={() => this.props.dispatch({type: "EDIT_NOTE", id:this.props.note.id})}>EDIT</button>
                    <button className="delete" onClick={()=> this.props.dispatch({type:"DELETE_NOTE", id:this.props.note.id})}>DELETE</button>
                </div>
            </div>
        )
    }
}
export default connect()(Note);