import React, { useState, useEffect } from "react";
const Hooks = () => {
  const [item, SetNewItems] = useState(0);
  useEffect(() => {
    document.title = `u are clicked ${item}`;
  });
  const AddItems = () => {
    SetNewItems(item + 1);
  };
  return (
    <div>
      <button onClick={AddItems}>Add_Items</button>
    </div>
  );
};
export default Hooks;
