/** @jsx jsx */
import * as React from "react";

import styled from "@emotion/styled";
import { css, jsx, Global, ClassNames } from "@emotion/core";

export default function() {
  return (
    <div
      css={css`
        display: flex;
        flex: 1;
        flex-direction: column;
        padding: 20px;
        overflow: auto;
      `}
    >
      template
    </div>
  );
}
