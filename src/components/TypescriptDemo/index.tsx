import * as React from "react";

type AppProps = { message: string }; /* could also use interface */
const App = ({ message }: AppProps) => <div>{message}</div>;

export enum ButtonSizes {
  default = "default",
  small = "small",
  large = "large"
}

export interface Props {
    label: string;
}
/* if we dont add this Props & React.HTMLProps<HTMLButtonElement
* we wont have autocomplete*/
export const PrimaryButton = (
    props: Props & React.HTMLProps<HTMLButtonElement> // adding my Props together with the @types/react button provided props
) => <button {...props} />;



export default function() {
  return (
    <div>
      <div>Typescript</div>
      <App message={"im a functional component. React.FC is not recommended"} />
      <PrimaryButton  >PrimaryButton</PrimaryButton>
    </div>
  );
}
