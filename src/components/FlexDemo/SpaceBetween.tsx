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
      <div>space-between</div>
        <div>this is edge to edge with space between components</div>
      <div
        css={css`
          display: flex;
          //background-color: darkcyan;
          flex-direction: row;
          justify-content: space-between;
          margin-bottom: 20px;
          //flex: 1;
        `}
      >
        <div
          css={css`
            background-color: magenta;
            //flex-basis: 50%;
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

        <div>space-evenly</div>
        <div>This is ideal for button groups you don't have to specify margins for each</div>
        <div>the left, center and right spacing are equal</div>
        <div
            css={css`
          display: flex;
          //background-color: darkcyan;
          flex-direction: row;
          justify-content: space-evenly;
          margin-bottom: 20px;
          //flex: 1;
        `}
        >
            <div
                css={css`
            background-color: magenta;
            //flex-basis: 50%;
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

        <div>space-around</div>
        <div>centers the component to its own column</div>

        <div
            css={css`
          display: flex;
          //background-color: darkcyan;
          flex-direction: row;
          justify-content: space-around;
          margin-bottom: 20px;
          //flex: 1;
        `}
        >
            <div
                css={css`
            background-color: magenta;
            //flex-basis: 50%;
          `}
            >
                box 1
            </div>
            <div
                css={css`
            //flex-basis: 50%;
            background-color: darkcyan;
          `}
            >
                box 2
            </div>
        </div>
    </div>
  );
}
