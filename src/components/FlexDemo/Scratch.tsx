/** @jsx jsx */
import * as React from "react";

import styled from "@emotion/styled";
import { css, jsx, Global, ClassNames } from "@emotion/core";

let map = { a: "cool" , b: "super"};

let list = Array.from(Object.entries(map));
let arr = []
export default function() {
  function demo() {
    let res = list.map(x => {
        let [key, val] = x
        console.log(x)
      let ele =  <div key={key}>{val}</div>;
        arr.push(ele)
        return ele
    });
    return arr;
  }
    function demo2() {
        const arr = []
        for (const key in map) {
            let val = map[key]
            let ele = <div key={key}>{val}</div>
            arr.push(ele)
        }
        return arr
    }
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
      template
      {demo2()}
    </div>
  );
}
