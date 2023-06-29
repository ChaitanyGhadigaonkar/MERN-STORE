import { useEffect } from "react";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

const PrevNext = ({pageNo, setPageNo, hasPrev, hasNext}) => {

  const handlePrevClick=()=>{
    setPageNo(pageNo-1)
  }
  const handleNextClick=()=>{
    setPageNo(pageNo+1)
  }
  useEffect(()=>{

  },[hasPrev, hasNext])
  return (
    <div className="flex items-center justify-between w-full ">
      <button
        className={`text-base font-semibold rounded-lg border-slate-400 outline-0 px-3 py-2 bg-pink-500 text-white flex items-center gap-1 lg:text-lg ${!hasPrev ? "bg-pink-300" :"" }`}
        onClick={handlePrevClick}
        disabled={!hasPrev}
      >
        <AiOutlineArrowLeft/>
        prev
      </button>
      <button
        className={`text-base font-semibold rounded-lg border-slate-400 outline-0 px-3 py-2 bg-pink-500 text-white flex items-center gap-1 lg:text-lg ${!hasNext ? "bg-pink-300" :"" }`}
        onClick={handleNextClick}
        disabled={!hasNext}
      >
        next
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default PrevNext;
