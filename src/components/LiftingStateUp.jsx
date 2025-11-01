

import React, { useState } from 'react';

// 🧒 Child Component
function LiftingStateUp({ sendDataToParent }) {
  const data = "Hello Parent! 👋";

  return (
    <>
      <h3>Child Component</h3>
      <button onClick={() => sendDataToParent(data)}>
       Send Data to Parent
      </button>
    </>

  );
}

export default LiftingStateUp;