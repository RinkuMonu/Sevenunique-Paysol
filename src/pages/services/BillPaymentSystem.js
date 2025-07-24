import React, { useState, useEffect, memo, useCallback, useRef } from "react";
import Swal from "sweetalert2";
import BillDetailsSection from "./BillDetailsSection";
import PaymentStatusSection from "./PaymentStatusSection";
import PaymentSectionModal from "./PaymentSectionModal";
import { Container, Row, Col, Modal } from "react-bootstrap";
import {
  FaMobileAlt,
  FaMoneyBillWave,
  FaWifi,
  FaLightbulb,
  FaShieldAlt,
  FaTint,
  FaSatelliteDish,
  FaPhone,
  FaTv,
  FaCar,
  FaGasPump,
  FaUniversity,
} from "react-icons/fa";
import { MdDataUsage } from "react-icons/md";
import axiosInstance from "../../components/services/AxiosInstance";
import ElectricityBillPayment from "./ElectricityBillPayment/ElectricityBillPayment";
import Emi1 from "./EMI/Emi1";
import Broadband1 from "./Broadband/Broadband1";
import ElectricityBillPayment1 from "./ElectricityBillPayment/ElectricityBillPayment1";
import PipedGas1 from "./PipedGas/PipedGas1";
import Insurance1 from "./Insurance/Insurance1";
import Water1 from "./Water/Water1";
import Cable1 from "./Cable/Cable1";
import LpgBooking1 from "./LpgBooking/LpgBooking1";
import Municipality1 from "./Municipality/Municipality1";
import Landline1 from "./Landline/Landline1";
import Fastag1 from "./Fastag/Fastag1";
import PostpaidRecharge1 from "./Postpaid/PostpaidRecharge1";
import DatacardPostpaidRecharge from "./DatacardPostpaid/DatacardPostpaidRecharge";
import DatacardPrepaidRecharge from "./DatacardPrepaid/DatacardPrepaidRecharge";
import MobileRechargeUI2 from "./Mobile_Recharge/MobileRechargeUI2";
import DTHRecharge1 from "./DTH_Recharge/DTHRecharge1";
import { useUser } from "../../context/UserContext";

const BillPaymentSystem = () => {
  const OPERATORS_API = "/v1/s3/bill/operators";
  const DETAILS_API = "/v1/s3/bill/details";
  const PAYMENT_API = "/v1/s3/bill/pay";
  const STATUS_API = "/v1/s3/bill/status";

  const [step, setStep] = useState(1);
  const steps = [
    { id: 1, name: "Choose Operator" },
    { id: 2, name: "Bill Details" },
    { id: 3, name: "Payment" },
    { id: 4, name: "Status" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Prepaid");
  const [operators, setOperators] = useState([]);
  const [selectedOperator, setSelectedOperator] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [additionalFields, setAdditionalFields] = useState({});
  const [currentOperatorDetails, setCurrentOperatorDetails] = useState(null);
  const [billDetails, setBillDetails] = useState(null);
  const [mpin, setMpin] = useState("");
  const [referenceId] = useState(Math.floor(1000000 + Math.random() * 9000000));
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [statusCheckLoading, setStatusCheckLoading] = useState(false);
  const [inputError, setInputError] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  const [moreItems, setMoreItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { fetchUserfree } = useUser();

  const allItems = [
    { name: "Prepaid", icon: <FaMobileAlt size={24} /> },
    { name: "Postpaid", icon: <FaMobileAlt size={24} /> },
    { name: "DTH", icon: <FaSatelliteDish size={24} /> },
    { name: "EMI", icon: <FaMoneyBillWave size={24} /> },
    { name: "Broadband", icon: <FaWifi size={24} /> },
    { name: "Electricity", icon: <FaLightbulb size={24} /> },
    { name: "Gas", icon: <FaGasPump size={24} /> },
    { name: "Insurance", icon: <FaShieldAlt size={24} /> },
    { name: "Water", icon: <FaTint size={24} /> },
    { name: "Landline", icon: <FaPhone size={24} /> },
    { name: "Cable", icon: <FaTv size={24} /> },
    { name: "Fastag", icon: <FaCar size={24} /> },
    { name: "LPG", icon: <FaGasPump size={24} /> },
    { name: "BroadBand", icon: <FaWifi size={24} /> },
    { name: "Datacard Prepaid", icon: <MdDataUsage size={24} /> },
    { name: "Datacard Postpaid", icon: <MdDataUsage size={24} /> },
    { name: "Municipality", icon: <FaUniversity size={24} /> },
  ];

  const categoryComponents = {
    Prepaid: MobileRechargeUI2,
    Postpaid: PostpaidRecharge1,
    EMI: Emi1,
    Broadband: Broadband1,
    Electricity: ElectricityBillPayment1,
    "BILL PAYMENT": ElectricityBillPayment,
    Gas: PipedGas1,
    Insurance: Insurance1,
    Water: Water1,
    DTH: DTHRecharge1,
    Landline: Landline1,
    Cable: Cable1,
    Fastag: Fastag1,
    LPG: LpgBooking1,
    "Bill Pay": ElectricityBillPayment,
    BroadBand: Broadband1,
    "Datacard Prepaid": DatacardPrepaidRecharge,
    "Datacard Postpaid": DatacardPostpaidRecharge,
    Municipality: Municipality1,
  };

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

  useEffect(() => {
    setMenuItems((prevMenuItems) => {
      if (prevMenuItems.some((item) => item.name === "More")) {
        return [
          ...prevMenuItems.slice(0, -1),
          { name: "More", icon: `+${moreItems.length}` },
        ];
      }
      return prevMenuItems;
    });
  }, [moreItems]);

  const handleMenuClick = useCallback((menu) => {
    if (menu === "More") {
      setShowModal(true);
    } else {
      setSelectedCategory(menu);
      setStep(1);
      setSelectedOperator("");
      setAccountNumber("");
      setAdditionalFields({});
      setCurrentOperatorDetails(null);
      setBillDetails(null);
    }
  }, []);

  const handleMoreItemClick = useCallback((menu) => {
    const selectedModalItemIndex = moreItems.findIndex(
      (item) => item.name === menu
    );

    if (selectedModalItemIndex !== -1) {
      const selectedModalItem = moreItems[selectedModalItemIndex];
      const lastVisibleItem = menuItems[menuItems.length - 2];

      setMenuItems((prevMenuItems) => [
        ...prevMenuItems.slice(0, -2),
        { name: selectedModalItem.name, icon: selectedModalItem.icon },
        { name: "More", icon: `+${moreItems.length - 1}` },
      ]);

      setMoreItems((prevMoreItems) => [
        ...prevMoreItems.filter((item) => item.name !== menu),
        { name: lastVisibleItem.name, icon: lastVisibleItem.icon },
      ]);

      setSelectedCategory(menu);
      setShowModal(false);
      setStep(1);
      setSelectedOperator("");
      setAccountNumber("");
      setAdditionalFields({});
      setCurrentOperatorDetails(null);
      setBillDetails(null);
    }
  }, [menuItems, moreItems]);

  const checkPaymentStatus = useCallback(async (refId) => {
    try {
      setStatusCheckLoading(true);
      const response = await axiosInstance.post(STATUS_API, {
        referenceid: refId,
      });

      if (response.data && response.data.status === "success") {
        setPaymentStatus(response.data);

        if (response.data.data.data.status === "0") {
          showSuccessAlert("Transaction successful!");
        } else if (response.data.data.data.refunded === "1") {
          showSuccessAlert(response.data.message || "Transaction refunded");
        } else {
          showSuccessAlert(response.data.message || "Payment status checked");
        }
      } else {
        showErrorAlert(
          response.data?.message || "Failed to check payment status"
        );
      }
    } catch (err) {
      console.error("Payment status error:", err);
      showErrorAlert("Failed to check payment status");
    } finally {
      setStatusCheckLoading(false);
    }
  }, []);

  const validateInput = useCallback((value, regexPattern) => {
    if (!value || !regexPattern) return true;

    try {
      const cleanPattern = regexPattern.replace(/\\/g, "\\");
      const regex = new RegExp(cleanPattern);
      return regex.test(value);
    } catch (err) {
      console.error("Invalid regex pattern:", regexPattern);
      return false;
    }
  }, []);

  const handleAccountNumberChange = useCallback((e) => {
    const value = e.target.value;
    setAccountNumber(value);

    if (selectedOperator && value && currentOperatorDetails?.regex) {
      const isValid = validateInput(value, currentOperatorDetails.regex);
      if (!isValid) {
        setInputError(
          `Please enter a valid ${
            currentOperatorDetails.displayname || "account number"
          }`
        );
      } else {
        setInputError("");
      }
    } else {
      setInputError("");
    }
  }, [selectedOperator, currentOperatorDetails, validateInput]);

  useEffect(() => {
    if (selectedCategory) {
      setLoading(true);
      axiosInstance
        .get(OPERATORS_API)
        .then((response) => {
          const filteredOperators = response.data.data.filter(
            (operator) =>
              operator.category.toLowerCase() ===
              selectedCategory.toLowerCase().replace(" ", "")
          );
          setOperators(filteredOperators);
          setLoading(false);
        })
        .catch((err) => {
          showErrorAlert("Failed to fetch operators");
          setLoading(false);
        });
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedOperator) {
      const operator = operators.find((op) => op.id === selectedOperator);
      setCurrentOperatorDetails(operator);
      setAccountNumber("");
      setAdditionalFields({});
      setInputError("");
    }
  }, [selectedOperator, operators]);

  const handleProceed = useCallback((additionalFieldsData = {}) => {
    if (!selectedOperator || !accountNumber || !currentOperatorDetails) {
      showErrorAlert("Please select an operator and enter account number");
      return;
    }

    // Update additionalFields with the new data from child component
    setAdditionalFields(prev => ({
      ...prev,
      ...additionalFieldsData
    }));

    // Validate main account number
    if (
      currentOperatorDetails.regex &&
      !validateInput(accountNumber, currentOperatorDetails.regex)
    ) {
      showErrorAlert(
        `Please enter a valid ${
          currentOperatorDetails.displayname || "account number"
        }`
      );
      return;
    }

    // Validate additional fields if they exist
    if (currentOperatorDetails.ad1_name && currentOperatorDetails.ad1_regex) {
      if (
        !validateInput(additionalFieldsData[currentOperatorDetails.ad1_name], currentOperatorDetails.ad1_regex)
      ) {
        showErrorAlert(
          `Please enter a valid ${currentOperatorDetails.ad1_d_name}`
        );
        return;
      }
    }

    if (currentOperatorDetails.ad2_name && currentOperatorDetails.ad2_regex) {
      if (
        !validateInput(additionalFieldsData[currentOperatorDetails.ad2_name], currentOperatorDetails.ad2_regex)
      ) {
        showErrorAlert(
          `Please enter a valid ${currentOperatorDetails.ad2_d_name}`
        );
        return;
      }
    }

    if (currentOperatorDetails.viewbill === "1") {
      fetchBillDetails(additionalFieldsData);
    } else {
      setBillDetails({
        amount: "0",
        bill_fetch: "0",
      });
      setShowPaymentModal(true);
    }
  }, [selectedOperator, accountNumber, currentOperatorDetails, validateInput]);

  const fetchBillDetails = useCallback((additionalFieldsData) => {
    setLoading(true);

    const requestData = {
      operator: selectedOperator,
      canumber: accountNumber,
    };

    // Add additional fields from the child component
    Object.entries(additionalFieldsData).forEach(([key, value]) => {
      requestData[key] = value;
    });

    // Also add any existing additional fields from state
    Object.entries(additionalFields).forEach(([key, value]) => {
      if (!requestData[key] && value) {
        requestData[key] = value;
      }
    });

    axiosInstance
      .post(DETAILS_API, requestData)
      .then((response) => {
        setBillDetails(response.data);
        setLoading(false);
        showSuccessAlert("Bill details fetched successfully!");
        setStep(2);
      })
      .catch((err) => {
        showErrorAlert(
          err?.response?.data?.message || "Failed to fetch bill details"
        );
        setLoading(false);
      });
  }, [selectedOperator, accountNumber, additionalFields]);

  const processPayment = useCallback(() => {
    if (!mpin || !currentOperatorDetails) {
      showErrorAlert("Please enter MPIN");
      return;
    }

    const amount = billDetails?.amount || "0";
    setLoading(true);

    const paymentData = {
      operator: selectedOperator,
      canumber: accountNumber,
      amount: amount.toString(),
      referenceid: referenceId,
      latitude: "1.25787874",
      longitude: "1.75784512",
      bill_fetch: billDetails?.bill_fetch || "0",
      mpin: mpin,
    };

    // Add additional fields from the operator configuration
    if (currentOperatorDetails.ad1_name && additionalFields[currentOperatorDetails.ad1_name]) {
      paymentData[currentOperatorDetails.ad1_name] = additionalFields[currentOperatorDetails.ad1_name];
    }
    if (currentOperatorDetails.ad2_name && additionalFields[currentOperatorDetails.ad2_name]) {
      paymentData[currentOperatorDetails.ad2_name] = additionalFields[currentOperatorDetails.ad2_name];
    }
    if (currentOperatorDetails.ad3_name && additionalFields[currentOperatorDetails.ad3_name]) {
      paymentData[currentOperatorDetails.ad3_name] = additionalFields[currentOperatorDetails.ad3_name];
    }

    // Add any other additional fields that might be in the form
    Object.entries(additionalFields).forEach(([key, value]) => {
      if (!paymentData[key] && value) {
        paymentData[key] = value;
      }
    });

    axiosInstance
      .post(PAYMENT_API, paymentData)
      .then((response) => {
        showSuccessAlert("Payment processed successfully! Checking status...");
        setLoading(false);
        checkPaymentStatus(referenceId);
        setShowPaymentModal(false);
        setStep(4);
        fetchUserfree();
      })
      .catch((err) => {
        showErrorAlert(
          err?.response?.data?.message || "Payment failed. Please try again."
        );
        setLoading(false);
      });
  }, [
    mpin,
    currentOperatorDetails,
    billDetails,
    selectedOperator,
    accountNumber,
    additionalFields,
    checkPaymentStatus,
    fetchUserfree
  ]);

  const renderAdditionalFields = useCallback((operator) => {
    if (!operator) return null;

    return (
      <>
        {operator.ad1_name && (
          <div className="form-group mb-3">
            <label>{operator.ad1_d_name}</label>
            <input
              type="text"
              className="form-control"
              value={additionalFields[operator.ad1_name] || ""}
              onChange={(e) =>
                setAdditionalFields({
                  ...additionalFields,
                  [operator.ad1_name]: e.target.value,
                })
              }
              placeholder={operator.ad1_d_name}
            />
            {operator.ad1_regex &&
              !validateInput(additionalFields[operator.ad1_name], operator.ad1_regex) && (
                <small className="text-danger">
                  Please enter a valid {operator.ad1_d_name}
                </small>
              )}
          </div>
        )}

        {operator.ad2_name && (
          <div className="form-group mb-3">
            <label>{operator.ad2_d_name}</label>
            <input
              type="text"
              className="form-control"
              value={additionalFields[operator.ad2_name] || ""}
              onChange={(e) =>
                setAdditionalFields({
                  ...additionalFields,
                  [operator.ad2_name]: e.target.value,
                })
              }
              placeholder={operator.ad2_d_name}
            />
            {operator.ad2_regex &&
              !validateInput(additionalFields[operator.ad2_name], operator.ad2_regex) && (
                <small className="text-danger">
                  Please enter a valid {operator.ad2_d_name}
                </small>
              )}
          </div>
        )}

        {operator.ad3_name && (
          <div className="form-group mb-3">
            <label>{operator.ad3_d_name}</label>
            <input
              type="text"
              className="form-control"
              value={additionalFields[operator.ad3_name] || ""}
              onChange={(e) =>
                setAdditionalFields({
                  ...additionalFields,
                  [operator.ad3_name]: e.target.value,
                })
              }
              placeholder={operator.ad3_d_name}
            />
            {operator.ad3_regex &&
              !validateInput(additionalFields[operator.ad3_name], operator.ad3_regex) && (
                <small className="text-danger">
                  Please enter a valid {operator.ad3_d_name}
                </small>
              )}
          </div>
        )}
      </>
    );
  }, [additionalFields, validateInput]);

  const OperatorSelection1 = memo(({
    selectedCategory,
    operators,
    selectedOperator,
    setSelectedOperator,
    accountNumber,
    setAccountNumber,
    inputError,
    setInputError,
    fetchBillDetails,
    loading,
    onBack,
  }) => {
    const [currentOperator, setCurrentOperator] = useState(null);

    useEffect(() => {
      if (selectedOperator) {
        const op = operators.find((o) => o.id === selectedOperator);
        setCurrentOperator(op);
      } else {
        setCurrentOperator(null);
      }
    }, [selectedOperator, operators]);

    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          {selectedCategory} Bill Payment
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Operator
          </label>
          <select
            className="w-full p-2 border rounded"
            value={selectedOperator}
            onChange={(e) => setSelectedOperator(e.target.value)}
          >
            <option value="">Select Operator</option>
            {operators.map((operator) => (
              <option key={operator.id} value={operator.id}>
                {operator.name}
              </option>
            ))}
          </select>
        </div>

        {selectedOperator && currentOperator && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {currentOperator.displayname || "Account Number"}
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={accountNumber}
                onChange={handleAccountNumberChange}
                placeholder={
                  currentOperator.displayname || "Enter account number"
                }
              />
              {inputError && (
                <p className="text-red-500 text-sm mt-1">{inputError}</p>
              )}
            </div>

            {renderAdditionalFields(currentOperator)}
          </>
        )}

        <div className="flex justify-between mt-6">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onBack}>
            Back
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            onClick={fetchBillDetails}
            disabled={!selectedOperator || !accountNumber || loading}
          >
            {loading ? "Processing..." : "Proceed"}
          </button>
        </div>
      </div>
    );
  });

  const showSuccessAlert = useCallback((message) => {
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: message,
      timer: 3000,
      showConfirmButton: false,
    });
  }, []);

  const showErrorAlert = useCallback((message) => {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: message,
      confirmButtonColor: "#3085d6",
    });
  }, []);

  const Stepper = memo(() => {
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between relative">
          {steps.map((stepItem) => (
            <div key={stepItem.id} className="flex flex-col items-center z-10">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  stepItem.id <= step
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {stepItem.id}
              </div>
              <span
                className={`mt-2 text-sm font-medium ${
                  stepItem.id <= step ? "text-blue-600" : "text-gray-500"
                }`}
              >
                {stepItem.name}
              </span>
            </div>
          ))}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{
                width: `${((step - 1) / (steps.length - 1)) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  });

  const handleModalHide = useCallback(() => setShowModal(false), []);
  const handlePaymentModalHide = useCallback(() => setShowPaymentModal(false), []);

  return (
    <div className="min-h-screen bg-gray-100 pb-8 pt-0">
      <nav
        className="py-4 bg-light border-bottom"
        style={{ marginTop: "95px" }}
      >
        <div>
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
                    selectedCategory === item.name ? "active" : ""
                  }`}
                >
                  <div style={{ color: "var(--themeht-primary-color)" }}>
                    {item.icon}
                  </div>
                  <p
                    className="mb-0"
                    style={{
                      color: "var(--themeht-primary-color)",
                      fontWeight: "bold",
                      position: "relative",
                      display: "inline-block",
                      paddingBottom: "4px",
                    }}
                  >
                    {item.name}
                    {selectedCategory === item.name && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: "0",
                          left: "0",
                          width: "100%",
                          height: "2px",
                          backgroundColor: "var(--themeht-primary-color)",
                          borderRadius: "1px",
                        }}
                      ></span>
                    )}
                  </p>
                </div>
              </Col>
            ))}
            <Col xs="auto">
              <img
                height={40}
                src="https://static.mobikwik.com/appdata/operator_icons/bbps_v2.png"
                alt="BBPS logo"
                className="mt-1"
              />
            </Col>
          </Row>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto">
        {(loading || statusCheckLoading) && (
          <div className="text-center py-4">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            <p className="mt-2">Processing...</p>
          </div>
        )}

        {step === 1 &&
          selectedCategory &&
          categoryComponents[selectedCategory] && (
            <div className="category-content mb-4">
              {React.createElement(categoryComponents[selectedCategory], {
                selectedCategory,
                onProceed: handleProceed,
                selectedOperator,
                setSelectedOperator,
                accountNumber,
                setAccountNumber,
                inputError,
                setInputError,
                operators,
                additionalFields,
                setAdditionalFields,
                currentOperatorDetails,
              })}
            </div>
          )}

        {step === 1 &&
          (!selectedCategory || !categoryComponents[selectedCategory]) && (
            <OperatorSelection1
              selectedCategory={selectedCategory}
              operators={operators}
              selectedOperator={selectedOperator}
              setSelectedOperator={setSelectedOperator}
              accountNumber={accountNumber}
              setAccountNumber={setAccountNumber}
              inputError={inputError}
              setInputError={setInputError}
              fetchBillDetails={handleProceed}
              loading={loading}
              onBack={() => {
                setSelectedCategory("");
                setStep(1);
              }}
            />
          )}

        {step === 2 &&
          billDetails &&
          currentOperatorDetails?.viewbill === "1" && (
            <BillDetailsSection
              billDetails={billDetails}
              mpin={mpin}
              setMpin={setMpin}
              referenceId={referenceId}
              processPayment={processPayment}
              loading={loading}
              onBack={() => {
                setSelectedOperator("");
                setStep(1);
              }}
            />
          )}

        {step === 4 &&
          paymentStatus &&
          paymentStatus.data &&
          paymentStatus.data.data && (
            <PaymentStatusSection
              paymentStatus={paymentStatus}
              referenceId={referenceId}
              checkPaymentStatus={checkPaymentStatus}
              statusCheckLoading={statusCheckLoading}
              onBack={() => {
                setPaymentStatus(null);
                setStep(currentOperatorDetails?.viewbill === "1" ? 2 : 1);
              }}
            />
          )}
      </div>

      <Modal show={showModal} onHide={handleModalHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>More Bill Categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="text-center">
              {moreItems.map((item, index) => (
                <Col
                  xs={6}
                  md={4}
                  key={index}
                  className="d-flex flex-column align-items-center my-3"
                  onClick={() => handleMoreItemClick(item.name)}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className="icon mb-2"
                    style={{ fontSize: "24px", color: "#ffb300" }}
                  >
                    {item.icon}
                  </div>
                  <p className="mb-0" style={{ color: "#ffb300" }}>
                    {item.name}
                  </p>
                </Col>
              ))}
            </Row>
          </Container>
        </Modal.Body>
      </Modal>

      {showPaymentModal && (
        <PaymentSectionModal
          amount={billDetails?.amount || "0"}
          mpin={mpin}
          setMpin={setMpin}
          processPayment={processPayment}
          loading={loading}
          onBack={handlePaymentModalHide}
          onHide={handlePaymentModalHide}
        />
      )}
    </div>
  );
};

export default BillPaymentSystem;