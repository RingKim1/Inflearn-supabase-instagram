"use client";

import { useState } from "react";
import SignIn from "./signin";
import SignUp from "./signup";

export default function Auth() {
  const [view, setView] = useState("SIGNUP");

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-purple-50 to-lightblue-50">
      {view === "SIGNUP" ? (
        <SignUp setView={setView} />
      ) : (
        <SignIn setView={setView} />
      )}
    </main>
  );
}
