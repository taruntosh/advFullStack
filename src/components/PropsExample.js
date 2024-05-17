import React, { useState, useEffect } from 'react';

const PropsExample = ({brand, carBrand}) => {
  debugger
    // const { brand } = props // ??? - Destructuring 
  return (
    <div>
      <h2>I am a { carBrand }!</h2>
    </div>
  );
}

export default PropsExample