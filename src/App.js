import React, { Component } from 'react';
import logo from './assets/logo.jpg';
import LinearProgress from '@material-ui/core/LinearProgress'
import profile from './assets/profile.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='main-content'>
          <h1>Daily Quests</h1>
          <div className='daily-quests'> Pushups +10 xp</div>
          <div className='daily-quests'> Meditation +10 xp</div>
          <div className='daily-quests'> Daily Act of Kindess +10 xp</div>
        </div>
        <div className='console'>
        <div>
          <h1>Active Quests</h1>
          <div className='active-quests'> Pushups</div>
          <div className='active-quests'>Meditation</div>
        </div>
        <div>
          <div className='experience'>
            <h4>Experience</h4>
            <LinearProgress variant='determinant' value='100' />
          </div>
          <div className='profile'>
            <img className='profile-pic' src={profile} />
            <p>Class: Healer</p>
            <p>Level: 20 </p>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
