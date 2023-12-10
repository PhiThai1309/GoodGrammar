import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { useState } from "react";
import { Home, PageNavigation } from "./pages";
import Login from "./pages/login/Login";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route
              path="login"
              element={
                <div>
                  <SignedIn>
                    <Navigate to="/grammar" replace={true} />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </div>
              }
            />
            <Route
              path="history"
              element={<PageNavigation content="history" />}
            />
            <Route
              path="grammar"
              element={<PageNavigation content="grammar" />}
            />
            <Route
              path="subscribe"
              element={<PageNavigation content="subscribe" />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ClerkProvider>
  );
}

export default App;
