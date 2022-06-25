import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar.js'
import Feed from './Feed.js'

function App() {
  return (
    <div className="app">

          <Header />

          {/* App Body*/}
          <div className="app__body">
            {/* Sidebar */}
            <Sidebar />
            {/* Feed */}
            <Feed />
            {/* Widget */}
          </div>
    </div>
  );
}

export default App;
