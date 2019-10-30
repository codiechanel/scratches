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
`;
export default function() {
  return (
    <Panel>
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
      <div>
        notice that the box gets full height even though it doesnt have much
        content
      </div>
      <div>Children of flex parent automatically becomes flex</div>
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
        <MyIcon
          icon={"home"}
          css={css`
            flex-basis: 100%;
            //align-self: flex-end;
            //justify-self: flex-end;
            text-align: right;
            background-color: pink;
          `}
        />
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
            //text-align: right;
            background-color: pink;
          `}
        >
          box
        </div>

        <div>
          <Button size={"sm"}>welcome</Button>
        </div>
      </div>
    </Panel>
  );
}
