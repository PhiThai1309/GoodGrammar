import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { useState } from "react";
import { Home, PageNavigation } from "./pages";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedIn>
        <Router />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

function Router() {
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="history" element={<PageNavigation content="history" />} />
        <Route path="grammar" element={<PageNavigation content="grammar" />} />
        <Route
          path="subscribe"
          element={<PageNavigation content="subscribe" />}
        />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
