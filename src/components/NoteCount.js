// display the total number of notes written

import React from "react";
import { connect } from "react-redux";

class NoteCounter extends React.Component{
    render (){
        return (
            <div>
                <p className="note_message">Number of notes: {this.props.numberOfNotes}</p>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        numberOfNotes: state.length
    }
}

export default connect(mapStateToProps)(NoteCounter);