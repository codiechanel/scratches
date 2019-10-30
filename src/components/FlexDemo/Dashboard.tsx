/** @jsx jsx */
import * as React from "react";
import styled from "@emotion/styled";
import { Link, Router } from "@reach/router";
import FlexBasis from "./FlexBasis";
import SpaceBetween from "./SpaceBetween";
import { css, jsx, Global, ClassNames } from "@emotion/core";
type ButtonProp = {
  primary?: string;
  flexDirection: string;
  flex?: number;
  padding?: number;
  theme?: any;
};

const Panel = styled.div<ButtonProp>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  flex: ${({ flex = 1 }) => flex};
  padding: ${({ padding = 0 }) => padding};
`;
const About = () => (
  <div>
    <h2>About</h2>
  </div>
);
const Cool = () => (
  <div>
    <h2>Cool</h2>
  </div>
);
export default function() {
  return (
    //  padding here has no effect. Why?

    <Panel padding={0} flexDirection="row">
      <Panel
        padding={0}
        flexDirection="column"
        css={css`
          background-color: deepskyblue;
        `}
      >
        <Router primary={false} component={React.Fragment}>
          <Cool default path="cool" />
          <About path="about" />
          <FlexBasis path="flexBasis" />
          <SpaceBetween path="spaceBetween" />
        </Router>
      </Panel>

      <Panel padding={0} flexDirection="column">
        panel2
      </Panel>
    </Panel>
  );
}
