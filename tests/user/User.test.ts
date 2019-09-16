import { User } from "@src/user/User";

describe('User test', () => {
    it('Fullname test', () => {
        const user = new User('first', 'last', 29);
        expect(user.getFullName()).toEqual('first last');
    });
});