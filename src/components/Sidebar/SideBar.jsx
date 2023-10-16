import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { useAuth0 } from "@auth0/auth0-react";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    name: "Students",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/newstudents",
        name: "New Students",
        icon: <FaUser />,
      },
      {
        path: "/allstudents",
        name: "All Students",
        icon: <FaLock />,
      },
    ],
  },
  {
    name: "Fee Receipt",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "newfeereceipt",
        name: "New Fee Receipt",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "New Fee Receipt (ID)",
        icon: <FaLock />,
      },
      {
        path: "allfeereceipt",
        name: "List All Receipt",
        icon: <FaMoneyBill />,
      },
      {
        path: "receiptstatement",
        name: "Receipt Statement",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    name: "Certificate",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "*",
        name: "New C + M",
        icon: <FaUser />,
      },
      {
        path: "newcertificate",
        name: "New Certificate",
        icon: <FaLock />,
      },
      {
        path: "newmarksheet",
        name: "New Marksheet",
        icon: <FaMoneyBill />,
      },
      {
        path: "/settings/billing",
        name: "New C+M (two)",
        icon: <FaMoneyBill />,
      },
      {
        path: "/settings/billing",
        name: "Certificate Correction",
        icon: <FaMoneyBill />,
      },
      {
        path: "/certificatelist",
        name: "Certificate List",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/users",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path: "/print",
    name: "Print",
    icon: <MdMessage />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <BiAnalyse />,
  },

  {
    path: "/order",
    name: "Setting",
    icon: <BsCartCheck />,
  },

];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout,  isLoading } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "230px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Divya Computer
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
          <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                 <button className="btn btn-link me-md-2"  onClick={() => logout({ returnTo: window.location.origin })} > <b>LOGOUT</b> </button>
                </motion.h1>
              )}
            </AnimatePresence>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
