import React from "react";

const Option = ({ option }) => {
  return (
    <div>
      <label class="inline-flex items-center">
        <input
          type="radio"
          class="form-radio"
          name="accountType"
          value={option}
        />
        <span class="ml-2">{option}</span>
      </label>
    </div>
  );
};

export default Option;
