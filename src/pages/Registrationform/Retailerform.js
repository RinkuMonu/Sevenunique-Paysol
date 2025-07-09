"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { useSearchParams } from "next/navigation";
import VerifyDocumentsForm from "./form-steps/verify-documents-form";
import BankDetailsForm from "./form-steps/bank-details-form";
import PersonalAndBusinessDetailsForm from "./form-steps/business-details-form";
import axiosInstance from "../../components/services/AxiosInstance";
import Swal from "sweetalert2";
import { useNavigate, useSearchParams } from "react-router-dom";

const steps = [
  { id: "contact-details", title: "Contact Details", component: PersonalAndBusinessDetailsForm },
  { id: "verify-documents", title: "Verify Documents", component: VerifyDocumentsForm },
  { id: "bank-details", title: "Bank Details", component: BankDetailsForm },
];

export default function CreateAccount() {
  const [searchParams] = useSearchParams();
  const roleFromQuery = searchParams.get("role") || "User";
  const [mobileVerified, setMobileVerified] = useState(false);
  const [verifiedMobile, setVerifiedMobile] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [showSubmissionPopup, setShowSubmissionPopup] = useState(false);
  const [registeredUserId, setRegisteredUserId] = useState(null);
  const router = useNavigate();

  const [formData, setFormData] = useState({
    contactDetails: {
      name: "",
      phone: "",
      email: "",
      accountType: "",
      isValid: false,
    },
    businessDetails: {
      businessName: "",
      businessType: "",
      address: "",
      isValid: false,
    },
    verifyDocuments: {
      uploadedFiles: {},
      consensus: [],
      isValid: false,
    },
    bankDetails: {
      accountNumber: "",
      ifscCode: "",
      isValid: false,
    },
  });

  const updateFormData = (step, data) => {
    setFormData((prev) => ({ ...prev, [step]: { ...prev[step], ...data } }));
  };

  const handleNext = async () => {
    if (currentStep === 0) {
      const { contactDetails, businessDetails } = formData;


      try {
        const form = new FormData();
        form.append("name", contactDetails.name);
        form.append("email", contactDetails.email);
        form.append("mobileNumber", contactDetails.phone);
        form.append("businessName", businessDetails.businessName);
        form.append("businessType", businessDetails.businessType);
        form.append("address", businessDetails.address);
        form.append("pinCode", "110001");
        form.append("mpin", "1234");
        form.append("role", roleFromQuery);

        if (businessDetails.ownerPhoto) {
          form.append("ownerPhoto", businessDetails.ownerPhoto);
        }

        if (businessDetails.shopPhotos && businessDetails.shopPhotos.length > 0) {
          businessDetails.shopPhotos.forEach((file) => {
            form.append("shopPhotos", file);
          });
        }

        const response = await axiosInstance.post("/v1/auth/register", form);
        const userId = response.data?.newUser?._id;
        localStorage.setItem("token", response.data.token);
        setRegisteredUserId(userId);

        Swal.fire("User Registered", "User has been successfully registered!", "success");
        setCurrentStep(currentStep + 1);
      } catch (err) {
        Swal.fire("Registration Failed", err.response?.data?.message || "Try again", "error");
      }
    } else if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowSubmissionPopup(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const CurrentStepComponent = steps[currentStep].component;

  if (!mobileVerified) {
    return (
      <MobileVerification
        onVerified={(mobile) => {
          setVerifiedMobile(mobile);
          setMobileVerified(true);
          setFormData((prev) => ({
            ...prev,
            contactDetails: { ...prev.contactDetails, phone: mobile },
          }));
        }}
      />
    );
  }

  return (
    <div className="container py-5">
      <div className="card shadow">
        <div className="card-header bg-warning text-white fw-bold">
          {steps[currentStep].title}
        </div>
        <div className="card-body row">
          <div className="col-md-3 border-end">
            {steps.map((step, index) => (
              <div className="d-flex align-items-center mb-3" key={step.id}>
                <div
                  className={`rounded-circle d-flex align-items-center justify-content-center me-2 fw-bold text-white ${index < currentStep
                      ? "bg-success"
                      : index === currentStep
                        ? "bg-dark"
                        : "bg-secondary"
                    }`}
                  style={{ width: "30px", height: "30px" }}
                >
                  {index < currentStep ? <Check size={16} /> : index + 1}
                </div>
                <small className={index <= currentStep ? "text-dark" : "text-muted"}>{step.title}</small>
              </div>
            ))}
            <div className="text-center mt-4">
              <iframe
                title="Step Animation"
                className="w-100"
                height="120"
                src="https://lottie.host/embed/7d592695-a3a1-4b28-9e6f-fdac6e2ee857/PyJR1ErHxJ.lottie"
              ></iframe>
            </div>
          </div>

          <div className="col-md-9">
            <CurrentStepComponent
              formData={formData}
              updateFormData={updateFormData}
              registeredUserId={registeredUserId}
            />

            <div className="d-flex justify-content-between mt-4">
              {currentStep > 0 && (
                <button className="btn btn-outline-secondary" onClick={handleBack}>
                  &larr; Back
                </button>
              )}
              <button className="btn btn-warning text-white ms-auto" onClick={handleNext}>
                {currentStep === steps.length - 1 ? "Submit" : "Next →"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {showSubmissionPopup && (
        <div className="modal d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body text-center">
                <h5 className="text-success fw-bold mb-3">🎉 Submission Successful!</h5>
                <iframe
                  title="Success Animation"
                  className="w-100"
                  height="200"
                  src="https://lottie.host/embed/a2ddd7b3-368a-4a30-be2a-0c9eb12acf34/dIjlqZVvEe.lottie"
                ></iframe>
                <p className="text-muted mt-3">Your details have been submitted successfully!</p>
                <button
                  className="btn btn-warning text-white mt-3"
                  onClick={() => router.push("/login")}
                >
                  Go to Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MobileVerification({ onVerified }) {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleSendOtp = async () => {
    if (mobile.length === 10) {
      try {
        await axiosInstance.post("/v1/auth/send-otp", { mobileNumber: mobile });
        Swal.fire({ title: "OTP Sent Successfully!", icon: "success" });
        setShowOtpInput(true);
      } catch (error) {
        Swal.fire({ icon: "error", title: "Oops...", text: error.response?.data?.message || "Failed to send OTP" });
      }
    } else {
      Swal.fire("Enter a valid 10-digit mobile number", "", "warning");
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) return Swal.fire({ title: "Enter valid 6-digit OTP!", icon: "error" });
    try {
      await axiosInstance.post("/v1/auth/verify-otp", { mobileNumber: mobile, otp });
      Swal.fire({ title: "Mobile Verified!", icon: "success" });
      onVerified(mobile);
    } catch (err) {
      Swal.fire({ icon: "error", title: "Oops...", text: err.response?.data?.message || "Invalid OTP" });
    }
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center shadow p-4 rounded bg-white">
        <div className="col-md-6 text-center">
          <iframe
            title="OTP Animation"
            className="w-75"
            height="180"
            src="https://lottie.host/embed/7d592695-a3a1-4b28-9e6f-fdac6e2ee857/PyJR1ErHxJ.lottie"
          ></iframe>
        </div>
        <div className="col-md-6">
          <h4 className="mb-4">📱 Mobile Verification</h4>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
            placeholder="Enter 10-digit mobile number"
            maxLength={10}
            className="form-control mb-3"
          />

          {!showOtpInput ? (
            <button className="btn btn-warning w-100" onClick={handleSendOtp}>
              Send OTP
            </button>
          ) : (
            <>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                placeholder="Enter 6-digit OTP"
                maxLength={6}
                className="form-control mb-3"
              />
              <button className="btn btn-success w-100" onClick={handleVerifyOtp}>
                Verify OTP
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}