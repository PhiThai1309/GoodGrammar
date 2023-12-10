import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <SignedIn>
        <Navigate to="/grammar" replace={true} />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}
