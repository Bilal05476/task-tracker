const Header = ({ setToggleBtn, toggleBtn }) => {
  return (
    <div className="header">
      <h1>Task tracker</h1>
      <button
        style={{ background: toggleBtn ? "red" : "green", border: "none" }}
        onClick={() => setToggleBtn(!toggleBtn)}
      >
        {toggleBtn ? "Close" : "Add"}
      </button>
    </div>
  );
};

export default Header;
