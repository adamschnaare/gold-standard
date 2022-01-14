import { atom } from 'recoil';
// import { User as AuthUser } from 'someAuthLibrary';

export interface User {
  displayName: string | null;
  email: string | null;
  emailVerified: string | null;
  photoURL: string | null;
  isAnonymous: boolean;
  uid: string;
  providerData: any;
}

export const userState = atom<User | undefined>({
  key: 'user',
  default: undefined,
});

// export const mapFromAuthUser = (user: AuthUser): User => ({
//   displayName: user.displayName,
//   email: user.displayName,
//   emailVerified: user.displayName,
//   photoURL: user.photoURL,
//   isAnonymous: user.isAnonymous,
//   uid: user.uid,
//   providerData: user.providerData,
// });
