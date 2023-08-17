const CtaButton = ({ text, Icon }) => {
  return (
    <button className="cta-button">
      <p>{text}</p>
      {Icon && <Icon />}
    </button>
  );
};
export default CtaButton;
