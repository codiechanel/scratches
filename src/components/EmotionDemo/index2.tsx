import * as React from "react";

import { css } from "@emotion/core";

// import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

// const titleStyle = css({
// boxSizing: 'bordre-box', // Oops, there's a typo!
//     width: 300,
//     height: 200,
// });
const Link = styled('a')`
  color: red;
`

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const flexContainer = css`display: flex;
  flex: 1;
  justify-content: center;
  background-color: darkcyan;
  padding: 30px;
  margin: 30px;
`;

export default function() {
  return (
    <div>
      <div
        className={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: deeppink;
          }
        `}
      >
        Hover to change color.
      </div>
        <Link href="#">Click me</Link>
      <Button>This my button component.</Button>
        <div css={flexContainer}>

            <div>hello</div>
        </div>
    </div>
  );
}
