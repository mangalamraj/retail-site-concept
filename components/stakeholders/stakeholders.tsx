const StakeHolders = () => {
  return (
    <div className="container m-auto text-center font-semibold">
      <div className="text-4xl">Value for every stakeholder</div>
      <div className="text-base font-semibold text-gray-400 mt-2">
        We value all of our stakeholders
      </div>
      <div className="flex gap-4 w-[80%] m-auto mt-10">
        <div className="w-1/3 hover:w-2/3 duration-300 h-[400px] bg-gray-200 rounded-xl cursor-pointer"></div>
        <div className="w-1/3 hover:w-2/3 duration-300 h-[400px] bg-gray-200 rounded-xl cursor-pointer"></div>
        <div className="w-1/3 hover:w-2/3 duration-300 h-[400px] bg-gray-200 rounded-xl cursor-pointer"></div>
      </div>
    </div>
  );
};

export default StakeHolders;
