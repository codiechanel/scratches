import * as React from "react";
import { useMap } from "react-use";



export default function() {
  const [map, {set, remove, reset}] = useMap({
      hello: 'there',
  });
  // const [map, { set, remove, reset }] = useMap(store.samp);


  return (
    <div>
        {map.hello}
      <button
        onClick={() => {
          // noinspection TypeScriptValidateTypes
          set(String(Date.now()), new Date().toJSON());
        }}
      >
        Add
      </button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => remove("hello")} disabled={!map.hello}>
        Remove 'hello'
      </button>
      <pre>{JSON.stringify(map, null, 2)}</pre>
    </div>
  );
}
