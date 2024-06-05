import React from "react";

const Preview = () => {
  return (
    <div className="bg-dark-gray p-5 flex text-white justify-center rounded-md">
      <div className="flex flex-col gap-4">
        <div className="flex gap-10 items-center">
          <div>
            <img
              className="w-28 rounded-full"
              src="https://avatars.githubusercontent.com/u/93572463?s=96&v=4"
              alt=""
            />
          </div>

          <div>
            <h1>temp user</h1>
            <h3 className="text-dark-blue">user name</h3>
            <p>joined at 23 jan 2014</p>
          </div>

          <div>
            <p className="max-w-xs">user desc</p>
          </div>

          <div className="flex bg-dark-bg p-4 rounded-md justify-evenly">
            <div>
              <h3>Repos</h3>
              <span>45</span>
            </div>

            <div>
              <h3>Followings</h3>
              <span>45</span>
            </div>

            <div>
              <h3>Followers</h3>
              <span>45</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-evenly">
              <div className="flex gap-5 items-center">
                <span>
                  {" "}
                  <svg
                    viewBox="0 0 384 512"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" />
                  </svg>
                </span>
                <span>Not found</span>
              </div>

              <div className="flex gap-5 items-center">
                <span>
                  {" "}
                  <svg
                    viewBox="0 0 384 512"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" />
                  </svg>
                </span>
                <span>Not found</span>
              </div>

              <div className="flex gap-5 items-center">
                <span>
                  {" "}
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
                  </svg>
                </span>
                <span>Not found</span>
              </div>

              <div className="flex gap-5 items-center">
                <span>
                  {" "}
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
                  </svg>
                </span>
                <span>Not found</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
