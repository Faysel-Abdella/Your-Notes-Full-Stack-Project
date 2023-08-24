const CtaButton = ({ text, Icon, type }) => {
  return (
    <button className="cta-button" type={type}>
      <p>{text}</p>
      {Icon && <Icon />}
    </button>
  );
};
export default CtaButton;
