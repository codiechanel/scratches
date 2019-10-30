import * as React from "react";

import { css } from "@emotion/core";
import UseMap from "./UseMap";

export default function() {
  return (
    <div
      css={css`
        display: flex;
        flex: 1;
        flex-direction: column;
        overflow: auto;
      `}
    >
      <div>react-use</div>
      <UseMap />
    </div>
  );
}
