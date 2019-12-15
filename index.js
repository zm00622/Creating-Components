import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
// must import from CommentDetail file in Src folder
import CommentDetail from './CommentDetail'; //Only using ./ because comment detail is also in the source folder

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail />
      <CommentDetail />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
