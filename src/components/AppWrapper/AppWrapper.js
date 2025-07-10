import { useUser } from "./UserContext";
import { useEffect, useState } from "react";
import LoginModal from "./LoginModal";

const AppWrapper = ({ children }) => {
  const { isLoggedIn } = useUser();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    window.location.href = "/login"; // ya tum apna login page ya modal open logic use karo
  };

  return (
    <>
      {children}
      {showModal && <LoginModal onLogin={handleLogin} />}
    </>
  );
};

export default AppWrapper;
