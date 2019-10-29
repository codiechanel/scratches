/** @jsx jsx */
import * as React from "react";
import styled from "@emotion/styled";
import { css, jsx, Global, ClassNames } from "@emotion/core";
const Button = styled.button`
  color: ${props => (props.primary ? "hotpink" : "turquoise")};
`;

/*notice that this is using the camel case object style
 * if we use the tag literal, we can write native css  */
const Container = styled.div(props => ({
  display: "flex",
  flexDirection: props.column && "column"
}));

const Basic = ({ className }) => <div className={className}>Some text</div>;

const Fancy = styled(Basic)`
  color: hotpink;
`;

/* here we actually have 2 arguments
 * the first is the actual style, and the second is the props
 * which appends the additional style */
const H1 = styled.h1(
  {
    fontSize: 20
  },
  props => ({ color: props.color })
);

/*this might be the preferred method when inserting props
 * we have a separate function that only includes the dynamic parts of
 * our css*/

const dynamicStyle = props =>
  css`
    color: ${props.color};
  `;

const Container2 = styled.div`
  ${dynamicStyle};
`;

/*We can nest selectors using &
 * for some reason we need to use a:nth-child(1)
 * for this to work
 * using & > a alone does not select it*/
const Example = styled("span")`
  color: lightgreen;

  & > a:nth-of-type(1) {
    color: hotpink;
  }
  & > span {
    color: red;
  }
`;

const paragraph = css`
  color: turquoise;

  a {
    border-bottom: 1px solid currentColor;
    cursor: pointer;
  }
`;
/*You can use & to select the current class nested in another element:*/
const paragraph2 = css`
  color: turquoise;

  header & {
    color: green;
  }
`

const base = css`
  color: hotpink;
`;
const danger = css`
  color: red;
`;

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
      {/* this would override our global style */}
      <Global
        styles={{
          body: {
            margin: 0,
            padding: 0,
            backgroundColor: "blue"
          }
        }}
      />
      {/* if you prefer to use className */}
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
      <Container column>
        <Button primary>This my button component.</Button>
      </Container>
      <Fancy />
      <H1 color="lightgreen">This is lightgreen.</H1>
      <Container2 color="lightgreen">This is lightgreen.</Container2>
      <Example>
        this is
        <a>nested</a>
        <span>cool</span>
      </Example>
      <div
        css={css`
          ${base};
          background-color: #eee;
        `}
      >
        This is hotpink.
      </div>
      <div css={[danger, base]}>
        This will be also be turquoise since the base styles overwrite the
        danger styles.
      </div>
      <p css={paragraph}>
        Some text.
        <a>A link with a bottom border.</a>
      </p>
        <div>
            <header>
                <p css={paragraph2}>
                    This is green since it's inside a header
                </p>
            </header>
            <p css={paragraph2}>
                This is turquoise since it's not inside a header.
            </p>
        </div>
    </div>
  );
}
