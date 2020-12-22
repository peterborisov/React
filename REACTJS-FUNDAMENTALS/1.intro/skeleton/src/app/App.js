import './style/app.css';
import React from 'react';
import Contacts from './contacts.json'

const showContact = data => (
  <div className="contact" key={data.email} data-id="id">
    <span className="avatar small">&#9787;</span>
    <span className="title">{data.firstName} {data.lastName}</span>
  </div>
)

const renderData = () => {
  const contactResult = []
  Contacts.map(el => {
    contactResult.push(showContact(el))
  })
  return contactResult;
}

const App = (
  <div className="container">
    <header>Contact Book</header>
    <div id="book">
      <div id="list">
        <h1>Contacts</h1>
        <div className="content">
          {renderData()}
        </div>
      </div>
      <div id="details">
        <h1>Details</h1>
        <div className="content">
          <div className="info">
            <div className="col">
              <span className="avatar"></span>
            </div>
            <div className="col">
              <span className="name">Ivan</span>
              <span className="name">Ivanov</span>
            </div>
          </div>
          <div className="info">
            <span className="info-line">0887 123 456</span>
            <span className="info-line">&#9993; i.ivanov@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
    <footer>Contact Book SPA &copy; 2017</footer>
  </div>
)

export default App;
