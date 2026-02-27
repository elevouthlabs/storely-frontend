import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="vector-background   justify-center gap-4 py-[200px] px-7 font-Inter font-semibold text-base leading-6 ">
        <div className="font-bold text-[24px] text-center font-Inter mt-10 leading-[32px] text-[#fff]">
          Loved by Small Business Owners
        </div>
        <div className="font-Inter text-[16px] text-center mt-6 leading-[28px] text-white">
          Join thousands of entrepreneurs who are growing their businesses with
          Storely
        </div>
        <button className="mt-8  mx-auto bg-white text-[#8a2be2] font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
          <span>Create My Store</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8a2be2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-right-icon lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className=" text-white py-6 px-4 mt-10">
        <div className="md:flex md:gap-[40px] ">
          <div className=" flex flex-col items-center md:items-start gap-5">
            <div className="flex item-center justify-center  gap-5 md:justify-start">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-700 p-3 rounded-full "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88c-2.14 0-3.88-1.74-3.88-3.88 0-2.14 1.74-3.88 3.88-3.88 2.14 0 3.88 1.74 3.88 3.88 0 2.14-1.74 3.88-3.88 3.88Zm5.92-9c-.05.12-.12.23-.21.33-.1.09-.21.16-.33.21a.995.995 0 0 1-1.09-.21c-.09-.1-.16-.21-.21-.33A.995.995 0 0 1 16 6.5c0-.13.03-.26.08-.38.05-.13.12-.23.21-.33.23-.23.58-.34.9-.27.07.01.13.03.19.06.06.02.12.05.18.09.05.03.1.08.15.12.09.1.16.2.21.33.05.12.08.25.08.38s-.03.26-.08.38Z"
                    fill="#4b4b4b"
                  ></path>
                </svg>
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-700 p-3 rounded-full "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88c-2.14 0-3.88-1.74-3.88-3.88 0-2.14 1.74-3.88 3.88-3.88 2.14 0 3.88 1.74 3.88 3.88 0 2.14-1.74 3.88-3.88 3.88Zm5.92-9c-.05.12-.12.23-.21.33-.1.09-.21.16-.33.21a.995.995 0 0 1-1.09-.21c-.09-.1-.16-.21-.21-.33A.995.995 0 0 1 16 6.5c0-.13.03-.26.08-.38.05-.13.12-.23.21-.33.23-.23.58-.34.9-.27.07.01.13.03.19.06.06.02.12.05.18.09.05.03.1.08.15.12.09.1.16.2.21.33.05.12.08.25.08.38s-.03.26-.08.38Z"
                    fill="#4b4b4b"
                  ></path>
                </svg>
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-700 p-3 rounded-full "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88c-2.14 0-3.88-1.74-3.88-3.88 0-2.14 1.74-3.88 3.88-3.88 2.14 0 3.88 1.74 3.88 3.88 0 2.14-1.74 3.88-3.88 3.88Zm5.92-9c-.05.12-.12.23-.21.33-.1.09-.21.16-.33.21a.995.995 0 0 1-1.09-.21c-.09-.1-.16-.21-.21-.33A.995.995 0 0 1 16 6.5c0-.13.03-.26.08-.38.05-.13.12-.23.21-.33.23-.23.58-.34.9-.27.07.01.13.03.19.06.06.02.12.05.18.09.05.03.1.08.15.12.09.1.16.2.21.33.05.12.08.25.08.38s-.03.26-.08.38Z"
                    fill="#4b4b4b"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="w-fit">
              <span>Subscribe to out newsletter</span>
              <div className="flex items-center justify-center rounded-[30px] border border-gray-700 p-2  mt-4 gap-2">
                <input
                  type="email"
                  placeholder="Enter your email."
                  className="text-black text-lg border-none outline-none p-2 rounded-lg w-full md:w-[200px]"
                />
                <button className="bg-[#8a2be2] text-white px-4 py-2 rounded-[40px]">
                  Subscribe
                </button>
              </div>
            </div>{" "}
          </div>
          <div className="mt-10 md:mt-0 flex flex-col md:flex-row md:justify-between gap-10  md:w-[80%] mx-auto">
            <div>
              <h4 className="text-black font-bold font-Inter text-[18px] mb-6">
                Explore
              </h4>
              <ul className="flex flex-col gap-2 mt-2 text-gray-600 font-Inter   flex felx-col gap-4">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="hover:underline">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            {/*  */}
            <div>
              <h4 className="text-black font-bold font-Inter text-[18px] mb-6">
                Solutions
              </h4>
              <ul className="flex flex-col gap-2 mt-2 text-gray-600 font-Inter   flex felx-col gap-4">
                <li>
                  <Link to="/" className="hover:underline">
                    Freight Management
                  </Link>
                </li>
                <li>
                  <Link to="" className="hover:underline">
                    Order Tracking
                  </Link>
                </li>
                <li>
                  <Link to="/ " className="hover:underline">
                    Carrier Integration
                  </Link>
                </li>
                <li>
                  <Link to="/ " className="hover:underline">
                    Analytics Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            {/*  */}
            <div>
              <h4 className="text-black font-bold font-Inter text-[18px] mb-6">
                Resources
              </h4>
              <ul className="flex flex-col gap-2 mt-2 text-gray-600 font-Inter   flex felx-col gap-4">
                <li>
                  <Link to="/" className="hover:underline">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="" className="hover:underline">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/ " className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/ " className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto text-center mt-10 flex flex-col gap-4">
          <Link
            to="/terms-and-conditions"
            className="text-gray-600 hover:underline"
          >
            Terms and Conditions
          </Link>
          <p className="text-sm text-gray-600 ">
            &copy; {new Date().getFullYear()} Storely. All rights reserved.
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Footer;
