import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "../lib/firebaseConfig";

// Single shared app instance for CBETA (no anonymous sign-in side effects)
export const cbetaApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const cbetaAuth = getAuth(cbetaApp);


