import React from 'react';

export default ({ match }) => <React.Fragment>
  <h1>Page 3!</h1>
  {
    ((match) => {
      let res = match.params.code;
      res = (res && match.params.sub1) ? (res + " - " + match.params.sub1) : res;
      res = (res &&  match.params.sub1 && match.params.sub2)? (res + " - " + match.params.sub2) : res;
      if (match.params.code) {
        return <div><hr />
          Selected code: {3 + " - " + res} 
        </div>
      }
    })(match)


  }
</React.Fragment>;
