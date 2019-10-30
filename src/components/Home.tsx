import * as React from "react";
import EmotionDemo from "./EmotionDemo";
import TypescriptDemo from "./TypescriptDemo";
import HooksDemo from "./HooksDemo";
import styled from "@emotion/styled";
import { css, jsx, Global, ClassNames } from "@emotion/core";
import ReactUseDemo from './ReactUseDemo'

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
      <div>Home</div>
      {/*<EmotionDemo />*/}
      {/*<TypescriptDemo />*/}
      {/*<HooksDemo />*/}
<ReactUseDemo/>
    </div>
  );
}
