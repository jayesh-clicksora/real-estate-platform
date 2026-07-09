function NavButton() {
  return (
    <button
      onClick={() => console.log("Redirect to Add Property")}
      className="hidden md:inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors duration-200 shadow-sm hover:shadow"
    >
      List Property
    </button>
  );
}

export default NavButton;
