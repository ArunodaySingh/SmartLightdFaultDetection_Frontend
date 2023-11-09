import "./allmod.css";
import { Link } from "react-router-dom";

function mod4() {
  return (
    <div className="content">
      <div className="navbar center">
        <ul className="flex">
          <li className="flex-1 mr-2">
            <Link
              className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
              to="/"
            >
              Available lights
            </Link>
          </li>
          <li className="flex-1 mr-2">
            <Link
              className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
              to="/mod2"
            >
              Flickering lights
            </Link>
          </li>
          <li className="text-center flex-1">
            <Link
              className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
              to="/mod3"
            >
              Fused lights
            </Link>
          </li>
          <li className="text-center flex-1">
            <Link
              className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
              to="/mod4"
            >
              Dim lights
            </Link>
          </li>
        </ul>{" "}
      </div>
      <h1 className="text-[#F38D0D]-500">Dim light</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-[#0F254C] dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Unique id
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                54298472
              </th>
              <td className="px-6 py-4">Jalandar</td>
              <td className="px-6 py-4 text-green-500">
                <button
                  type="button"
                  className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
                >
                  D im
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default mod4;
