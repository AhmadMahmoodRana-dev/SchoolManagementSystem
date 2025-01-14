import React from "react";

const WelcomeVerifyMessage = () => {
  return (
    <div className="w-[66%] h-[105px] rounded-lg bg-[#f7e5e9] flex relative items-center mt-8">
      <div className="heading px-16">
        <h1 className="text-md text-[#ff7883] font-semibold">Welcome to Admin Dashboard</h1>
        <p className="text-[#777777]">Your Account is not Verified yet!</p>
        <p className="text-[#777777]">
          Please Verify Your Email address. <span className="text-[#6469f8]">Verify now!</span>
        </p>
      </div>
      <div>
        <img
          src="./src/assets/admin-message.png"
          width={180}
          className="absolute right-20 -top-5"
        />
      </div>
    </div>
  );
};

export default WelcomeVerifyMessage;
