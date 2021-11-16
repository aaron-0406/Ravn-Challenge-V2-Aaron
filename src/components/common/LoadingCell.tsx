import Lottie from "react-lottie";
import loading from "../../assets/animation/loading.json";

const LoadingCell = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="loading-cell">
      <span>
        <Lottie options={defaultOptions} height={16} width={16} />
        Loading
      </span>
    </div>
  );
};

export default LoadingCell;
