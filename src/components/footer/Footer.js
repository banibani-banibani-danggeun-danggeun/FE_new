const Footer = () => {
  return (
    <div style={{ ...FooterStyles }}>
      <span>copyright ©️ 10기 C반 6조 FOOTER | BE || FE |</span>
    </div>
  );
};

const FooterStyles = {
  width: "100%",
  height: "100px",
  display: "flex",
  background: "burlywood",
  color: "#0a0327",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "22px",
  textAlign: "center",
};

export default Footer;
