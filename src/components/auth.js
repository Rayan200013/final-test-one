import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Auth = () => {
  const [] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => {};

  return (
    <div>
      <input
        placeholder="Email..."
        // onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}>Sign IN</button>
    </div>
  );
};
