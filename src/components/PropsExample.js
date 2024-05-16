import React, { useState, useEffect } from 'react';

const PropsExample = (props) => {
    // const { brand } = props
  return (
    <div>
      <h2>I am a { props.carBrand }!</h2>
    </div>
  );
}

export default PropsExample