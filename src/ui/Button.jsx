function Button({ children, type, extraStyles = "", onClick }) {
  const btnTypeStyle = {
    primary: `py-2 px-4 bg-pink-600 text-white rounded-lg hover:bg-pink-500 transition block`,
    secondary: `px-4 underline text-pink-600 hover:text-pink-500 transition text-center block`,
  };
  return (
    <button
      type="submit"
      className={btnTypeStyle[type] + " " + extraStyles}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
