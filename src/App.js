
import './App.css';
import NewNote from './components/NewNote';
import NoteCount from './components/NoteCount';
import NoteList from './components/NoteList';

function App() {
  return (
    <div className="App">
      <h1 class="heading">Note Taking App</h1>
      {/*creating a new note component */}
      <NewNote />
      {/* displaying all notes component */}
      <NoteList />
      {/* displaying the number of notes written */}
      <NoteCount />
    </div>
  );
}

export default App;
