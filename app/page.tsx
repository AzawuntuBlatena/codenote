// import { maincolor } from "@/color";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
export default function Home() {
  return (
    <div className="poppines">
      <Navbar />
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
        <IntegrationInstructionsIcon sx={{ fontSize: 27, color: "white" }}/>
      </div>
      <div className="flex gap-1 text-[19px]">
        <span className={`font-bold text-maincolor`}>Snippet</span>
        <span className="text-slate-600">Note</span>
      </div>
    </div>
  );
}

function Buttons() {
  return <div className="flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
    <button className="bg-maincolor p-[8] px-6 rounded-md hover:bg-purple-700 text-sm">
      SignIn
    </button>

    <button className="text-maincolor text-sm border border-maincolor hover:bg-maincolor hover:text-white p-[8] px-6 rounded-md ">
      SignIn
    </button>
  </div>
}
