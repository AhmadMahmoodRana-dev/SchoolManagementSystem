import { useContext, useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Context } from "@/context/Context";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function ProfileSection() {
  const { profileOpen, setProfile } = useContext(Context);
  const user = JSON.parse(localStorage.getItem("userData"));
  return (
    <Dialog open={profileOpen} onClose={setProfile} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className=" relative transform overflow-hidden rounded-lg dark:bg-gray-800 bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="w-full h-[30vh] flex flex-col justify-center items-center">
              <Avatar className="w-[80px] h-[80px]">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="Content">
                <h1 className="dark:text-blue-400 text-xl pt-10">{user?.username}</h1>
                <h1 className="dark:text-blue-400 text-center text-lg font-bold">{user?.role}</h1>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
