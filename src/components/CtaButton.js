const CtaButton = ({ text, Icon, type, onClick }) => {
  return (
    <button className="cta-button" type={type} onClick={onClick}>
      <p>{text}</p>
      {Icon && <Icon />}
    </button>
  );
};
export default CtaButton;
