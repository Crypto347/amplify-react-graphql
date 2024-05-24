import React from 'react';
import './App.css';

function App() {
  const logger = (log) => {
    console.log(log);
  }

  const handleClick = () => {
    logger('Button clicked!');
  }
  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>Chat-Web</h1>
      </div>
      <div className="chat-messages">
        <div className="message">
          <span className="message-sender">Duc:</span>
          <span className="message-content">Hello!</span>
        </div>
        <div className="message">
          <span className="message-sender">Long:</span>
          <span className="message-content">Hi CC!</span>
        </div>
        <div className="message">
          <span className="message-sender">Duc:</span>
          <span className="message-content">Mat day</span>
        </div>
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type your message..." />
        <button>Send</button>
      </div>
    </div>
  );

}

export default App;
// const sum = (a, b) => a + b;
// console.log(sum(2, 2));
// Tao contrucstor no giong nhu thay doi gia tri cho hai bien name va price thoi
// const Course = function (name, price) {
//   this.name = name;
//   this.price = price;
// }
// const jsCourese = new Course("javaScript", 1000);

//
var name = "JavaScript";
var price = 1000;

var course = {
  name: name,
  price: price
};
console.log(course);
