//creating a new note

import React from "react";
import { connect } from "react-redux";
class NewNote extends React.Component{
    handleSubmit = (e) =>{
        // prevents refreshing of the page
        e.preventDefault();
        const title = this.getTitle.value;
        const message= this.getMessage.value;
        const data = {
            id :new Date(),
            title,
            message,
            editing: false
        };
        // dispatch method is needed when we want to pass an action to the reducer and depending on the action type, the reducer can decide what to do with the state
        this.props.dispatch({
            type :"ADD_NOTE",
            data
        });
        this.getTitle.value = '';
        this.getMessage.value = '';
    }
    render(){
        return(
            <div className="note-container">
                <h1 className="note_heading">Create Note</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input required
                    ref={(input) => this.getTitle = input}
                    type="text"
                    placeholder="Enter Note Title"
                    />
                    <br />
                    <textarea required
                    ref={(input) => this.getMessage = input}
                    rows="5" 
                    cols="28"
                    placeholder="Enter Note"></textarea>
                    <br />
                    <button>Note</button>
                </form>
            </div>
        )
    };
};

// connect allows NewNote to access the dispatch method from the store
export default connect()(NewNote);