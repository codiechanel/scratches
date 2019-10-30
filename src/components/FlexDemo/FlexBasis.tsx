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
      <div>Flex</div>
      <div>Flex Basis</div>
      <div>notice the second box is shorter </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          margin-bottom: 20px;
          //flex: 1;
        `}
      >
        <div
          css={css`
            background-color: magenta;
            flex-basis: 50%;
          `}
        >
          flex-basis: 50%
        </div>
        <div
          css={css`
            //flex-basis: 50%;
            background-color: darkcyan;
          `}
        >
          no flex-basis
        </div>
      </div>

      {/*anothe*/}
      <div>here we now use flex: 1</div>
        <div>notice that the box gets full height even though it doesnt have much content</div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          flex: 1;
        `}
      >
        <div
          css={css`
            background-color: magenta;
            flex-basis: 50%;
          `}
        >
          flex-basis: 50%
        </div>
        <div
          css={css`
            flex-basis: 50%;
            background-color: darkcyan;
          `}
        >
            flex-basis: 50%
        </div>
      </div>
    </div>
  );
}
