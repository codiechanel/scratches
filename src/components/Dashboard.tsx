import * as React from "react";
import styled from "@emotion/styled";


type ButtonProp = {
  primary?: string;
  flexDirection: string;
  flex?: number;
  padding?: number;
  theme?:any
};

const Panel = styled.div<ButtonProp>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  flex: ${({ flex = 1 }) => flex};
  padding: ${({ padding = 0 }) => padding};

`;



 function Dashboard() {


  return (
    //  padding here has no effect. Why?

      <Panel padding={0} flexDirection="row">
          <Panel
              padding={0}
              flexDirection="column"

          >panel 1

          </Panel>


        <Panel
          padding={0}
          flexDirection="column"

        >
          panel2
        </Panel>
      </Panel>

  );
}

export default Dashboard
