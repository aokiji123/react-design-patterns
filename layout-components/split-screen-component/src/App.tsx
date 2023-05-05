import {SplitScreen} from "./SplitScreen.tsx";

const LeftHandComponent = ({ name }: { name: string }) => {
  return (
    <h1>
      {name}!
    </h1>
  )
}

const RightHandComponent = ({ message }: { message: string }) => {
  return (
    <h1>
      {message}!
    </h1>
  )
}

export const App = () => {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name="Bohdan" />
      <RightHandComponent message="Hi" />
    </SplitScreen>
  )
}
