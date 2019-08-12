import React from 'react';

export default ({ match }) => {
  console.log(match);
  return (
    <h3>
      <div>Invalid Address</div>
      <br/><br/>
      <div>Page Not Found</div>
    </h3>
  );
}
