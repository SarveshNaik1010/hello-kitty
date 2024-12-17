import { redirect, useNavigate } from "react-router-dom";
import { logoutUser } from "../feature/users/userSlice";
import Button from "./Button";
import { useDispatch } from "react-redux";

function BtnLogout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleLogout() {
    console.log("sdb");
    dispatch(logoutUser());
    navigate("/login");
  }

  return (
    <Button
      type="primary"
      extraStyles="fixed top-[12px] right-[12px] w-fit"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
}

export default BtnLogout;
