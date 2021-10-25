import { app } from './Firebase';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

export const provider = new GoogleAuthProvider();

export const auth = getAuth(app);