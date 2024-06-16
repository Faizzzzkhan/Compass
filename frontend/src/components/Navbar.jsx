function Navbar() {
  return (
    <>
      <nav className="flex justify-center bg-[#043872] text-white p-3">
        <div className="w-[85%] flex justify-between items-center px-5">
          <h1 className="text-xl font-bold uppercase font-serif headnav">Compass</h1>
          <div className="flex items-center gap-10">
            <ul className="flex gap-5">
              <li>Resources</li>
              <li>Blog</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
            <div className="flex gap-3">
              <button className="text-sm px-5 py-2 hover:scale-105 rounded-md bg-[#ffe591] text-black">Sign Up</button>
              <button className="text-sm px-5 py-2 hover:scale-105 rounded-md bg-[#509df9]">Take the Quiz</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
