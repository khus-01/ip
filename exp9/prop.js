import React from 'react';

function Bank(props) {
  return (
    <div style={{border: '1px solid #6a0dad', borderRadius: '8px', padding: '16px', margin: '20px', maxWidth: '400px'}}>
      <h1>Bank Details</h1>
      <h2>Bank Name:</h2>{props.name}
      <h2>Account Number:</h2>{props.account}
      <h2>IFSC Code:</h2>{props.ifsc}
      <h2>Branch:</h2>{props.branch}
    </div>
  );
}

export default Bank;
