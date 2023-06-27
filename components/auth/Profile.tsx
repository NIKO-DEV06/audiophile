import firebase_app from "@/firebase/firebase-config";
import { getAuth, signOut } from "firebase/auth";
import Image from "next/image";
import profile from "@/assets/profile2.svg";
import toast, { Toaster } from "react-hot-toast";
import { useAppDispatch } from "@/store/hooks/hooks";
import { toggleAuthModal } from "@/store/audiophileSlice";

const Profile = () => {
  const dispatch = useAppDispatch();
  const auth = getAuth(firebase_app);

  const logout = async () => {
    try {
      await signOut(auth);
      toast.success("You are logged out.");
      dispatch(toggleAuthModal(false));
    } catch (error) {
      toast.error("Unable to Log-Out");
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-white mx-auto px-[2rem] py-[2rem] rounded-xl">
        <h1 className="font-bold text-[1.5rem] text-center tracking-wider uppercase">
          Profile
        </h1>
        <Image
          src={profile}
          alt="displayimage"
          className="mx-auto"
          height={100}
          width={100}
        />
        <p className="text-center font-semibold opacity-50">
          {auth.currentUser?.email}
        </p>
        {auth.currentUser?.metadata.creationTime && (
          <p className="text-[0.85rem] text-center font-semibold">
            Audiophile member since:{" "}
            <span className="text-[#D87D4A]">
              {new Date(
                auth.currentUser.metadata.creationTime
              ).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </p>
        )}
        <button
          onClick={logout}
          className="w-full rounded-lg  mt-[1.5rem] bg-[#D87D4A] hover:bg-[#FBAF85] duration-150 text-white py-[0.5rem] text-[0.9rem] font-[500] tracking-wider uppercase"
        >
          Log Out
        </button>
        <p className="font-semibold opacity-30 text-[0.8rem] mt-[2rem]">
          Secured by @audiophile
        </p>
      </div>
    </>
  );
};

export default Profile;
