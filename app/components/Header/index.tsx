function Header() {
  return (
    <header className=" flex justify-between bg-[#ffffff] pt-3 top-0">
      <h1 className=" p-5 font-bold">Vegetable</h1>
      <div className=" flex items-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="5" y="3" width="2" height="10" rx="1" fill="black" />
          <rect x="5" y="15" width="2" height="8" rx="1" fill="black" />
          <circle
            cx="6"
            cy="10"
            r="3"
            fill="white"
            stroke="black"
            stroke-width="2"
          />
          <rect x="18" y="13" width="2" height="10" rx="1" fill="black" />
          <rect x="18" y="3" width="2" height="8" rx="1" fill="black" />
          <circle
            cx="19"
            cy="16"
            r="3"
            fill="white"
            stroke="black"
            stroke-width="2"
          />
        </svg>
        <svg
          width="52"
          height="42"
          viewBox="0 0 52 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="23.5"
            cy="19.5"
            r="6.6"
            stroke="black"
            stroke-width="2.2"
          />
          <path
            d="M28.5 24.5L32 28"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </header>
  );
}

export default Header;
