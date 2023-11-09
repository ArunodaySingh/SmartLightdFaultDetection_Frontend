import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./allmod.css";

function Mod1({ data }) {
  const [info, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://98.70.40.244:3000/get-data");
        console.log(response.data[response.data.length - 1]);
        setData(response.data[response.data.length - 1]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const pollingInterval = setInterval(fetchData, 1000); // Poll every 6 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(pollingInterval);
  }, []);

  //
  function notify(userdata) {
    console.log(userdata);
    let data = {
      email: userdata.email,
      name: userdata.Name,
    };
    // console.table(data);
    try {
      fetch(`${import.meta.env.VITE_server_URL}/api/emailreading`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log(res.body);
      });
    } catch (error) {
      console.error("Error saving data:", error);
    }
  }
  console.log(info);
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
        </ul>
      </div>
      <h1 className="text-[#F38D0D]-500">Dashboard</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-[#0F254C] dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">
                Unique id
              </th>
              <th scope="col" className="px-4 py-3">
                longitude
              </th>
              <th scope="col" className="px-4 py-3">
                Latitude
              </th>
              <th scope="col" className="px-4 py-3">
                Temperature
              </th>
              <th scope="col" className="px-3 py-3">
                Humidity
              </th>
              {/* <th scope="col" className="px-3 py-3">
                Sensor Status
              </th> */}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td className="px-6 py-4"> {info.streetLightId}</td>
              <td className="px-6 py-4">{info.Longitude}</td>
              <td className="px-6 py-4">{info.Latitude}</td>
              <td className="px-6 py-4">{info.temperature}</td>
              <td className="px-6 py-4">{info.humidity}</td>
              <td className="px-6 py-4">
                {/* drawer init and toggle */}
                <button
                  type="button"
                  className={
                    info.IsLightflicker == 1
                      ? "text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      : "text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  }
                  data-drawer-target="drawer-left-example"
                  data-drawer-show="drawer-left-example"
                  data-drawer-placement="left"
                  aria-controls="drawer-left-example"
                >
                  Flicker Status
                </button>
                <button
                  type="button"
                  className={
                    info.ldrval < 600
                      ? "text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      : "text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  }
                >
                  Intensity
                </button>
                <button
                  type="button"
                  className={
                    info.IsLightfuse == 1
                      ? "text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      : "text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  }
                  data-drawer-target="drawer-left-example"
                  data-drawer-show="drawer-left-example"
                  data-drawer-placement="left"
                  aria-controls="drawer-left-example"
                >
                  Light Fuse/Off
                </button>
                <button
                  type="button"
                  className={
                    info.IsLightfading == 1
                      ? "text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      : "text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  }
                >
                  Light Fadding
                </button>
                {/* drawer component */}
                <div
                  id="drawer-left-example"
                  className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
                  tabIndex={-1}
                  aria-labelledby="drawer-left-label"
                >
                  <h5
                    id="drawer-left-label"
                    className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
                  >
                    <svg
                      className="w-4 h-4 mr-2.5"
                      aria-hidden="true"
                      xmlns="#"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    Available Line Man
                  </h5>
                  <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                    {" "}
                    Please Select the name of the Line Man whose name are not
                    disabled
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {data.map((ele, id) => (
                      <a
                        key={id}
                        style={{ cursor: "pointer" }}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => notify(ele)}
                      >
                        {ele.Name}
                      </a>
                    ))}
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Mod1;
