import React, { useEffect, memo, useRef } from "react";
import { Modal, Button } from "react-bootstrap";

const PaymentSectionModal = memo(({
  amount,
  mpin,
  setMpin,
  processPayment,
  loading,
  onBack,
  onHide,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleMpinChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 6) {
      setMpin(value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <Modal show={true} onHide={onHide} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Payment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            type="text"
            className="form-control"
            value={amount}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">MPIN</label>
          <input
            ref={inputRef}
            type="password"
            className="form-control"
            value={mpin}
            onChange={handleMpinChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter 6-digit MPIN"
            maxLength={6}
            inputMode="numeric"
            autoComplete="off"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onBack}>Back</Button>
        <Button
          variant="primary"
          onClick={processPayment}
          disabled={mpin.length !== 6 || loading}
        >
          {loading ? 'Processing...' : 'Make Payment'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default PaymentSectionModal;
