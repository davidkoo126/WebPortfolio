import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class Landing extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://nobelexplorers.com/wp-content/uploads/2018/08/people.png"
              alt="avatar"
            className='avatar-img'></img>
            <div className="banner-text">
              <h1> Full Stack Web Developer </h1>
              <hr/>
              <p>HTML/CSS | JavaScript | React | Java | Python</p>
              <div className="social-link">
                <a href=
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
