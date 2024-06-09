import googleBtn from "../assets/googleBtn.svg";
import facebookLogo from "../assets/facebookLogo.png";

const SocialAuthCard = () => {
  return (
    <div>
      <h3 className="font-titleFont pb-2 text-[18px]">Or Sign In With</h3>
      <button className=" w-[225px]">
        <img className="w-full" src={googleBtn} alt="googleSignInButton" />
      </button>
      <button className="border border-white/30 px-4 py-3  rounded-full bg-blue-700 flex flex-row gap-3 justify-center items-center ">
        <img
          src={facebookLogo}
          alt="facebookLogo"
          className="w-[25px] inline-block"
        />
        <span className="font-bodyFont text-[14px] font-medium">
          Continue with Facebook
        </span>
      </button>
    </div>
  );
};

export default SocialAuthCard;
