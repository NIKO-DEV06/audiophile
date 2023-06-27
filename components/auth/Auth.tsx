import AuthModal from "./AuthModal";
import Profile from "./Profile";
import { AuthReveal, BgReveal } from "../utils/AuthReveal";
import { useAuthContext } from "./context/AuthContext";
import { useAppDispatch } from "@/store/hooks/hooks";
import { toggleAuthModal } from "@/store/audiophileSlice";

const Auth = () => {
  const dispatch = useAppDispatch();
  const { user } = useAuthContext();

  return (
    <>
      <AuthReveal>
        <div className="pt-[8rem] fixed w-[23.5rem] md:w-[26rem] translate-x-1/2 md:translate-y--2rem] right-1/2  ">
          {user === null ? <AuthModal /> : <Profile />}
        </div>
      </AuthReveal>
      <BgReveal>
        <div
          onClick={() => dispatch(toggleAuthModal(false))}
          className="fixed bg-black inset-0 opacity-60 pointer-events-auto"
        ></div>
      </BgReveal>
    </>
  );
};

export default Auth;
