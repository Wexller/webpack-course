import * as $ from 'jquery'
import Post from "@models/Post";
import WebpackLogo from '@/assets/webpack-logo.png';
import './babel';
import './styles/styles.css';
import './styles/less.less';
import './styles/scss.scss';
// import xml from './assets/data.xml';
// import json from './assets/json';
// import csv from './assets/data.csv';

import React from 'react';
import {render} from 'react-dom';


const post = new Post('Webpack Post Title', WebpackLogo);
// $('pre').addClass('code').html(post.toString());

const App = () => (
  <div className="container">
    <h1>Webpack Course</h1>
    <hr />
    <div className="logo"/>
    <hr />
    <pre />
    <hr />
    <div className="box">
      <h2>Less</h2>
    </div>
    <hr/>
    <div className="card">
      <h2>SCSS</h2>
    </div>
  </div>
);

render(<App/>, document.getElementById('app'));

// console.log('Post to str: ', post.toString());

// console.log('JSON: ', json);
// console.log('XML: ', xml);
// console.log('CSV: ', csv);