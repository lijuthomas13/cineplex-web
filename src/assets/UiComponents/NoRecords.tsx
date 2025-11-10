import Lottie from "lottie-react";
import noRecords from "../noRecords.json";

const NoRecords = () => (
  <div className="flex flex-col gap-4 items-center justify-center h-[100dvh]">
    <Lottie animationData={noRecords} loop className="w-40 h-40 scale-200" />
    <p className="text-primary dark:text-white ml-4">No Records Found</p>
  </div>
);
export default NoRecords;
