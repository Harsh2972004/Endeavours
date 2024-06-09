const NavBar = () => {
  return (
    <div className="w-full flex justify-between items-center px-6 py-4 border border-white/20  backdrop-blur-md bg-white/10 rounded-full">
      <div className=" basis-4/5">
        <div className="cursor-pointer inline-block">
          <h3 className=" font-titleFont text-[28px] font-medium text-white">
            Endea
            <span className="text-secondaryColor">vours</span>
          </h3>
          <p className=" font-bodyFont -mt-3 text-[15px] font-light">
            focus-prioritize-execute.
          </p>
        </div>
      </div>
      <div className="font-bodyFont">
        <p>Hey There,</p>
        <h2>UserName</h2>
      </div>
      <div>
        <p>darkMode</p>
      </div>
    </div>
  );
};

export default NavBar;
