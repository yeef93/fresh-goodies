function NavBar() {
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
      <ul className="flex flex-nowrap -mb-px">
        <li className="me-2">
          <a
            href="#"
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
          >
            All
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            className="inline-block p-4 text-gray-600 border-b-2 border-gray-600 rounded-t-lg active"
            aria-current="page"
          >
            Spicy
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
          >
            Dressing
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
          >
            Sweet
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
          >
            Root
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
