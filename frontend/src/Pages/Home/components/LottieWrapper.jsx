import Lottie from "react-lottie";
import PropTypes from "prop-types";

const LottieWrapper = ({ options, height, width }) => {
  return <Lottie options={options} height={height} width={width} />;
};

LottieWrapper.propTypes = {
  options: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default LottieWrapper;
