import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { useLocation, useNavigate, Outlet } from "react-router-dom";

import {
  FaMobileAlt,
  FaSatelliteDish,
  FaGasPump,
  FaUmbrella,
  FaGooglePlay,
  FaTrafficLight,
} from "react-icons/fa";
import { MdElectricBolt, MdCreditCard } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import {
  GiGasStove,
  GiTap,
  GiTv,
  GiUsbKey,
  GiVikingLonghouse,
  GiWifiRouter,
} from "react-icons/gi";
import { HiCurrencyRupee } from "react-icons/hi";
import { FaHouseChimney } from "react-icons/fa6";

const BillPayUI = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const shouldShowNav = location.pathname.startsWith("/recharge");

  const [activeMenu, setActiveMenu] = useState("Mobile");
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const allItems = [
    { name: "Mobile", icon: <FaMobileAlt size={24} />, path: "mobile" },
    { name: "DTH", icon: <FaSatelliteDish size={24} />, path: "dth" },
    { name: "Electricity", icon: <MdElectricBolt size={24} />, path: "electricity" },
    { name: "Credit Card", icon: <MdCreditCard size={24} />, path: "credit-card" },
    { name: "Datacard", icon: <GiUsbKey size={24} />, path: "datacard" },
    { name: "Landline", icon: <BiPhoneCall size={24} />, path: "landline" },
    { name: "Broadband", icon: <GiWifiRouter size={24} />, path: "broadband" },
    { name: "Piped Gas", icon: <FaGasPump size={24} />, path: "piped-gas" },
    { name: "Insurance", icon: <FaUmbrella size={24} />, path: "insurance" },
    { name: "Water", icon: <GiTap size={24} />, path: "water" },
    { name: "Google Play", icon: <FaGooglePlay size={24} />, path: "google-play" },
    { name: "Cable", icon: <GiTv size={24} />, path: "cable" },
    { name: "Municipality", icon: <GiVikingLonghouse size={24} />, path: "municipality" },
    { name: "EMI", icon: <HiCurrencyRupee size={24} />, path: "emi" },
    { name: "Housing", icon: <FaHouseChimney size={24} />, path: "housing" },
    { name: "LPG Booking", icon: <GiGasStove size={24} />, path: "lpg-booking" },
    { name: "Challan", icon: <FaTrafficLight size={24} />, path: "challan" },
  ];

  const [menuItems, setMenuItems] = useState([]);
  const [moreItems, setMoreItems] = useState([]);

  useEffect(() => {
    const updateMenuItems = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
        setMenuItems([
          ...allItems.slice(0, 3),
          { name: "More", icon: `+${allItems.length - 3}` },
        ]);
        setMoreItems(allItems.slice(3));
      } else {
        setIsMobile(false);
        setMenuItems([
          ...allItems.slice(0, 9),
          { name: "More", icon: `+${allItems.length - 9}` },
        ]);
        setMoreItems(allItems.slice(9));
      }
    };

    updateMenuItems();
    window.addEventListener("resize", updateMenuItems);
    return () => window.removeEventListener("resize", updateMenuItems);
  }, []);

  const handleMenuClick = (menu) => {
    if (menu === "More") {
      setShowModal(true);
    } else {
      const found = allItems.find((item) => item.name === menu);
      if (found) {
        setActiveMenu(menu);
        navigate(`/recharge/${found.path}`);
      }
    }
  };

  const handleMoreItemClick = (menu) => {
    const selectedModalItemIndex = moreItems.findIndex((item) => item.name === menu);
    if (selectedModalItemIndex !== -1) {
      const selectedModalItem = moreItems[selectedModalItemIndex];
      const lastVisibleItem = menuItems[menuItems.length - 2];

      setMenuItems((prevMenuItems) => [
        ...prevMenuItems.slice(0, -2),
        { name: selectedModalItem.name, icon: selectedModalItem.icon },
        { name: "More", icon: `+${moreItems.length}` },
      ]);

      setMoreItems((prevMoreItems) => [
        ...prevMoreItems.filter((item) => item.name !== menu),
        { name: lastVisibleItem.name, icon: lastVisibleItem.icon },
      ]);

      setActiveMenu(menu);
      navigate(`/recharge/${selectedModalItem.path}`);
      setShowModal(false);
    }
  };

  useEffect(() => {
    setMenuItems((prevMenuItems) => [
      ...prevMenuItems.slice(0, -1),
      { name: "More", icon: `+${moreItems.length}` },
    ]);
  }, [moreItems]);

  useEffect(() => {
    // Auto-set activeMenu based on path
    const currentPath = location.pathname.split("/recharge/")[1];
    const activeItem = allItems.find((item) => item.path === currentPath);
    if (activeItem) {
      setActiveMenu(activeItem.name);
    }
  }, [location.pathname]);

  return (
    <>
      {shouldShowNav && (
        <nav className="py-4 bg-light border-bottom" id="top" style={{ marginTop: "95px" }}>
          <Container>
            <Row className="text-center">
              {menuItems.map((item) => (
                <Col
                  key={item.name}
                  onClick={() => handleMenuClick(item.name)}
                  className="menu-item"
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className={`d-flex flex-column align-items-center ${
                      activeMenu === item.name ? "active" : ""
                    }`}
                  >
                    <div
                      style={{
                        color: "var(--themeht-primary-color)",
                      }}
                    >
                      {item.icon}
                    </div>
                    <p
                      className="mb-0"
                      style={{
                        color: "var(--themeht-primary-color)",
                        fontWeight: "bold",
                        position: "relative",
                        display: "inline-block",
                      }}
                    >
                      {item.name}
                      {activeMenu === item.name && (
                        <span
                          style={{
                            position: "absolute",
                            bottom: "-5px",
                            left: "0",
                            right: "0",
                            height: "4px",
                            backgroundColor: "var(--themeht-primary-color)",
                            borderRadius: "20px",
                          }}
                        ></span>
                      )}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </nav>
      )}

      {/* Outlet renders the selected service component */}
      <Outlet />

      {/* Modal for More */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body>
          <Container>
            <Row className="text-center">
              {moreItems.map((item, index) => (
                <Col
                  xs={6}
                  md={4}
                  key={index}
                  className="d-flex flex-column align-items-center my-2"
                  onClick={() => handleMoreItemClick(item.name)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="icon text-theme" style={{ fontSize: "24px" }}>
                    {item.icon}
                  </div>
                  <p className="mb-0 text-theme">{item.name}</p>
                </Col>
              ))}
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BillPayUI;
