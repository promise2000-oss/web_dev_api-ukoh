// lib/authHelpers.js
import {GoogleAuthProvider,signInWithPopup,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword,OAuthProvider} from 'firebase/auth';
import { auth } from './firebase';

export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const logout = () => signOut(auth);

export const loginWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginWithApple = () => {
  const provider = new OAuthProvider('apple.com');
  provider.addScope('email');
  provider.addScope('name');
  return signInWithPopup(auth, provider);
};
