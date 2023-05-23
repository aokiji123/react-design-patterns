import { printProps } from './printProps';
import {withUser} from "./withUser.tsx";
import {UserInfo} from "./UserInfo.tsx";
import {UserInfoForm} from "./UserInfoForm.tsx";

const UserInfoWrapped = printProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfoWrapped, 1);


export const App = () => {

  return (
      <>
          <UserInfoWrapped a={1} b="Hello" />
          <hr />
          <UserInfoWithLoader />
          <hr />
          <UserInfoForm />
      </>
  )
}
