import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import PageNavigation from "../pageNavigation/PageNavigation";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const Login = () => {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedIn>
        <Navigate to="/grammar" replace={true} />
      </SignedIn>
      <SignedOut>
        <Navigate to="/home" replace={true} />
      </SignedOut>
    </ClerkProvider>
  );
};

export default Login;
