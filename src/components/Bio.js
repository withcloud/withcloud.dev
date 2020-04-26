import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        {/* <img
          src={profilePic}
          alt={`WithCloud Dev`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        /> */}
        <p style={{ maxWidth: 310 }}>
          WithCloud Dev blog by{' '}
          <a href="https://github.com/withcloud">WithCloud</a>. Just&nbsp;talk
          about code and development.
        </p>
      </div>
    );
  }
}

export default Bio;
