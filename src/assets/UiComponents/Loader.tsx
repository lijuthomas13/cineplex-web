import Lottie from "lottie-react";
import loaderAnimation from "../movieLoader.json";

const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <Lottie animationData={loaderAnimation} loop className="w-40 h-40" />
  </div>
);
export default Loader;
