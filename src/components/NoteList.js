//creating a container to display all notes


import React from "react";
import { connect } from "react-redux";
import Note from "./Note";
import EditNote from "./EditComponent";

class NoteList extends React.Component{
    render(){
        return(
            <div>
                <h1 className="note_heading">All Notes</h1>
                {this.props.notes.map((note) => (
                    <div key={note.id}>
                        {note.editing ? <EditNote note={note} key={note.id}/> : <Note key={note.id} note={note}/>}
                    </div>
                ))}
            </div>
        )
    };
};
const mapStateToProps = (state) => {
    return {
        notes: state
    }
}

// mapStateToProps gives the NoteList component access to the current state of the store
export default connect(mapStateToProps)(NoteList);