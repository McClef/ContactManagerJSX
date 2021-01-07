import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AddPersonForm from './components/AddpersonForm'
import PeopleList from './components/PeopleList'

function App(props) {
  
  const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

  const [contacts, setContacts] = useState(props.data);

    
  
    function addPerson(name) {
      setContacts([...contacts, name])
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Contact Manager using forms courtesy of sololearn</h2>
        </div>
       
        <AddPersonForm handleSubmit={addPerson} />
        <PeopleList data={contacts} />
      </div>
    );
  
}

export default App;
