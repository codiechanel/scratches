/** @jsx jsx */
import * as React from "react";

import { css, jsx, Global, ClassNames } from "@emotion/core";

export default function() {
  return (
    <div css={{ color: "hotpink" }}>
      <div
        css={css`
          color: green;
          background-color: darkcyan;
        `}
      >
        great
      </div>
      <Global
        styles={{
          body: {
            margin: 0,
            padding: 0,
            backgroundColor: "blue"
          }
        }}
      />
      <ClassNames>
        {({ css, cx }) => (
          <div
            className={cx(
              "some-class",
              css`
                color: yellow;
              `
            )}
          >
            hello
          </div>
        )}
      </ClassNames>
    </div>
  );
}
