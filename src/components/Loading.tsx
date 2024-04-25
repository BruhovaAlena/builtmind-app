import { FadeLoader } from "react-spinners";

const LOADING_COLOR = "#36d7b7"

const Loading = () => {
  return (
    <div className="w-full justify-center flex mt-10">
      <FadeLoader color={LOADING_COLOR} />
    </div>
  );
};

export default Loading;
