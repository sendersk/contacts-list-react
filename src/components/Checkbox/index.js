import React, { useState } from "react";
import {StyledInput} from "./styled"

function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <label>
      <StyledInput
        type="checkbox"
        onChange={() => setChecked(!checked)}
      />
    </label>
  );
}

export default Checkbox;
