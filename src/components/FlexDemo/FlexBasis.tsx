/** @jsx jsx */
import * as React from "react";

import styled from "@emotion/styled";
import { css, jsx, Global, ClassNames } from "@emotion/core";
import MyIcon from "./MyIcon";
import Button from "react-bootstrap/Button";

let Panel = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  div {
    padding: 4px;
  }
  h1 {
    font-size: 1.4rem;
  }
  h2 {
    font-size: 1.2rem;
  }
`;
export default function() {
  return (
    <Panel>
      <h1>Flex</h1>
      <h2>Flex Basis</h2>
      <p>Notice the second box is shorter </p>
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
      <div>here we now use flex: 1 and set the height to 100%</div>
      <p>
        Notice that the box gets full height even though it doesnt have much
        content
      </p>
      <div>Children of flex parent automatically becomes flex</div>
      <div
        css={css`
          min-height: 200px;
          background-color: brown;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
            background-color: pink;
            height: 100%;

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
      {/*right align*/}
      <div>
        Here we set the third component to flex basis 100 so it would occupy the
        remaning space. Since the icon is just text font, we can simply text
        align right
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          background-color: cadetblue;
        `}
      >
        <div>box</div>
        <div>box</div>
        <div
          css={css`
            flex-basis: 100%;
            //align-self: flex-end;
            //justify-self: flex-end;
            text-align: right;
            background-color: pink;
          `}
        >
          <MyIcon icon={"home"} />
        </div>
      </div>
      <div>turns out text align right also works for buttons</div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          background-color: cadetblue;
        `}
      >
        <div>box</div>
        <div>box</div>

        <div
          css={css`
            flex-basis: 100%;
            //align-self: flex-end;
            //justify-self: flex-end;
            text-align: right;
            background-color: pink;
          `}
        >
          <Button size={"sm"}>it's me</Button>
        </div>
      </div>

      <div>here we set flex basis to the one on the middle</div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          background-color: cadetblue;
        `}
      >
        <div>box</div>
        <div
          css={css`
            flex-basis: 100%;
            //align-self: flex-end;
            //justify-self: flex-end;
            text-align: right;
            background-color: pink;
          `}
        >
          box
        </div>

        <div>
          <Button size={"sm"}>welcome</Button>
        </div>
      </div>

      <div>
        here we use justify-content: flex-end; then flex basis 100 on the first
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          //align-items: flex-end;
          justify-content: flex-end;
          background-color: cadetblue;
        `}
      >
        <div
          css={css`
            flex-basis: 100%;
            //align-self: center;
            //justify-self: center;
            //text-align: right;
            background-color: pink;
          `}
        >
          box
        </div>
        <div>box</div>

        <div>
          <Button size={"sm"}>welcome</Button>
        </div>
      </div>

      {/*align self*/}

      <div
        css={css`
          display: flex;
          flex-direction: row;
          //align-items: flex-end;
          //justify-content: flex-end;
          min-height: 200px;
          background-color: burlywood;
        `}
      >
        <div
          css={css`
            align-self: flex-end;
            background-color: brown;
          `}
        >
          flex-end
        </div>
        <div
          css={css`
            align-self: center;
            background-color: brown;
          `}
        >
          center
        </div>
        <div
          css={css`
            align-self: stretch;

            background-color: darkcyan;
          `}
        >
          stretch
        </div>
      </div>

      <p>Justify content have no effect.
      Just remember, if you use row direction, you need to use align-self/align items</p>
      <p>if you use column direction, then you can use justify-self</p>
    </Panel>
  );
}
