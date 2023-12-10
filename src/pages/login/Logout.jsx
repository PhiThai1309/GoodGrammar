import { useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Signoutbtn = () => {
  const { signOut } = useClerk();
  const navigate = useNavigate();

  return (
    <button onClick={() => signOut(() => navigate("/"))}>Sign out </button>
  );
};

export default Signoutbtn;
