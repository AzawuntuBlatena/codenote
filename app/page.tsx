 
import { currentUser } from "@clerk/nextjs/server";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import Link from "next/link";
export default function Home() {
  return (
    <div className="poppines">
      <Navbar />
      <CTAfunction />
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex m-5 max-sm: mt-9 mx-8 items-center justify-between max-sm:flex-col">
      <Logo />
      <Buttons />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <div className={`bg-maincolor p-[6px] rounded-md`}>
        <IntegrationInstructionsIcon sx={{ fontSize: 27, color: "white" }} />
      </div>
      <div className="flex gap-1 text-[19px]">
        <span className={`font-bold text-maincolor first-letter:text-2xl `}>
          Snippet
        </span>
        <span className="first-letter:text-2xl text-green-600">Note</span>
      </div>
    </div>
  );
}

async function Buttons() {
  const user = await currentUser();
  return (
    <div className="max-sm:w-full">
      {user?(
        <Link href="/my-notes">
          <button className="bg-maincolor p-[8px] px-6 rounded-md hover:bg-purple-700 text-sm text-white">
            Access to the app
          </button>
        </Link>
      ):(
    <div className="flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
      <Link href="/sign-in">
      <button className="bg-maincolor p-[8px] px-6 rounded-md hover:bg-purple-700 text-sm text-white">
        SignIn
      </button>
      </Link>
      <Link href="/sign-up"> 
      <button className="text-maincolor text-sm border border-maincolor hover:bg-maincolor hover:text-white p-[8px] px-6 rounded-md ">
        SignIn
      </button>
        </Link>
    </div>
      )}
    </div>
  );
}

function CTAfunction() {
  return (
    <div className="flex flex-col gap-6 mx-16 items-center mt-[120px]">
      <h2 className="font-bold text-2xl text-center">
        Organize Your Code Snippet
        <span className="text-maincolor"> Efficently</span>
      </h2>
      <p className="text-center text-slate-500 text-sm w-[450px] max-sm:w-full first-letter:text-xl ">
        with our addvanced tagging and search features, you can quickly find the
        snippet you need, right when you need it, Spend les time searching for
        code and more time for writeing it.
      </p>
      <button
        className="block px-9 py-3 font-medium text-sm transition focus:outline-none "
        type="button"
      >{`Lets get Started`}</button>
    </div>
  );
}
