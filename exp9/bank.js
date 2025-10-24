import React from 'react';
import Bank from './prop';

function BankDetails() {
  return (
    <Bank
      name="State Bank of India"
      account="1234567890"
      ifsc="SBIN0001234"
      branch="Mumbai Main"
    />
  );
}

export default BankDetails;
