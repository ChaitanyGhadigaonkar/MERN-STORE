import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

const PrevNext = ({pageNo,setPageNo}) => {

  const handlePrevClick=()=>{
    setPageNo(pageNo-1)
  }
  const handleNextClick=()=>{
    setPageNo(pageNo+1)
  }
  return (
    <div className="flex items-center justify-between w-full ">
      <button
        className="text-base font-semibold rounded-lg border-slate-400 outline-0 px-3 py-2 bg-pink-500 text-white hover:bg-pink-400 flex items-center gap-1 lg:text-lg"
        onClick={handlePrevClick}
      >
        <AiOutlineArrowLeft />
        prev
      </button>
      <button
        className="text-base font-semibold rounded-lg border-slate-400 outline-0 px-3 py-2 bg-pink-500 text-white hover:bg-pink-400 flex items-center gap-1 lg:text-lg"
        onClick={handleNextClick}
      >
        next
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default PrevNext;
