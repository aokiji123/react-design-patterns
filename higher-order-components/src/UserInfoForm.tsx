import {IUserInfo} from "./UserInfo.tsx";
import {withEditableResource} from "./withEditableResource.tsx";

interface IUserInfoForm {
    user: IUserInfo;
    onChangeUser: (updatedUser: { name?: string, age?: number, hairColor?: string }) => void;
    onSaveUser: () => void;
    onResetUser: () => void;
}

export const UserInfoForm = withEditableResource(({ user, onChangeUser, onSaveUser, onResetUser }: IUserInfoForm) => {
    const { name, age, hairColor } = user || {};

    return user ? (
        <>
            <label>
                Name:
                <input value={name} onChange={e => onChangeUser({ name: e.target.value })} />
            </label>
            <label>
                Age:
                <input type="number" value={age} onChange={e => onChangeUser({ age: Number(e.target.value) })} />
            </label>
            <label>
                Hair color:
                <input value={hairColor} onChange={e => onChangeUser({ hairColor: e.target.value })} />
            </label>
            <button onClick={onResetUser}>Reset</button>
            <button onClick={onSaveUser}>Save</button>
        </>
    ) : <p>Loading...</p>
}, '1', 'users');
