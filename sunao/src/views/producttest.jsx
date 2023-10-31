import React from "react";
import { useState } from "react";




export const ProductTest=()=>{

 // Define the initial object with 5 parts
 const initialObject = {
    part1: 'Value1',
    part2: 'Value2',
    part3: 'Value3',
    part4: 'Value4',
    part5: 'Value5',
  };

  // Use the useState hook to manage the object
  const [object, setObject] = useState(initialObject);

  // Create a function to update a specific part of the object
  const updatePart = (partName, newValue) => {
    setObject((prevObject) => ({
      ...prevObject,
      [partName]: newValue,
    }));
  };

    
    return(
        <div>
                <div>
      <h1>Object Parts:</h1>
      <ul>
        <li>Part 1: {object.part1}</li>
        <li>Part 2: {object.part2}</li>
        <li>Part 3: {object.part3}</li>
        <li>Part 4: {object.part4}</li>
        <li>Part 5: {object.part5}</li>
      </ul>

      {/* Button to update Part 1 */}
      <button onClick={() => updatePart('part1', 'NewValue1')}>
        Update Part 1
      </button>

      {/* Button to update Part 3 */}
      <button onClick={() => updatePart('part3', 'NewValue3')}>
        Update Part 3
      </button>
    </div>
        </div>
    )
}