import React, { useState } from "react";

// DebitCardPayment.jsx
// Single-file React component (Tailwind CSS assumed) for a debit/credit card payment form.
// - Client-side validation: required fields, Luhn check for card number, expiry validation, CVV length
// - Formats card number and expiry while typing
// - Submits to a mock endpoint (/api/pay) — replace with real payment provider (Stripe, Paystack, etc.)
// - IMPORTANT: This is a client-side demo. For real payments, integrate a PCI-compliant provider and never send raw card data to your server.

export default function DebitCardPayment() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState(2500);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [errors, setErrors] = useState({});

  // Helpers
  const onlyDigits = (s) => s.replace(/\D/g, "");

  // Luhn algorithm for card validation
  const luhnCheck = (num) => {
    const digits = num.split("").reverse().map((d) => parseInt(d, 10));
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
      let digit = digits[i];
      if (i % 2 === 1) {
        digit = digit * 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
    }
    return sum % 10 === 0;
  };

  const detectCardBrand = (num) => {
    if (!num) return "Card";
    const n = num.replace(/\s/g, "");
    if (/^4/.test(n)) return "Visa";
    if (/^(5[1-5]|2[2-7])/.test(n)) return "Mastercard";
    if (/^3[47]/.test(n)) return "Amex";
    return "Card";
  };

  // Formatters
  const formatCardNumber = (value) => {
    const digits = onlyDigits(value).slice(0, 19); // max 19 for some cards
    // group in 4s (Amex differs but keep simple)
    return digits.replace(/(.{4})/g, "$1 ").trim();
  };

  const formatExpiry = (value) => {
    const digits = onlyDigits(value).slice(0, 4);
    if (digits.length <= 2) return digits;
    return digits.slice(0, 2) + "/" + digits.slice(2);
  };

  // Validation
  const validate = () => {
    const errs = {};
    const rawNumber = onlyDigits(cardNumber);
    if (!cardHolder.trim()) errs.cardHolder = "Cardholder name is required";
    if (rawNumber.length < 12) errs.cardNumber = "Card number is too short";
    else if (!luhnCheck(rawNumber)) errs.cardNumber = "Card number is invalid";
    if (!expiry) errs.expiry = "Expiry date required";
    else {
      const [m, y] = expiry.split("/");
      if (!m || !y || parseInt(m, 10) < 1 || parseInt(m, 10) > 12) errs.expiry = "Invalid expiry";
      else {
        // expiry two-digit year -> set full year
        const year = 2000 + parseInt(y, 10);
        const exp = new Date(year, parseInt(m, 10) - 1, 1);
        const now = new Date();
        // set to end of month
        exp.setMonth(exp.getMonth() + 1);
        if (exp <= now) errs.expiry = "Card expired";
      }
    }
    if (!cvv || cvv.length < 3) errs.cvv = "Invalid CVV";
    if (!amount || isNaN(amount) || Number(amount) <= 0) errs.amount = "Invalid amount";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    if (!validate()) return;

    setLoading(true);
    try {
      // For demo: send tokenized or mock payload. NEVER send raw card data in production.
      // Replace this with real payment provider integration (Stripe Elements, Paystack inline, etc.)
      const payload = {
        cardHolder,
        brand: detectCardBrand(cardNumber),
        amount: Number(amount),
        // NOTE: In a real integration you would send a token, not card details
      };

      // Mock network call
      await new Promise((res) => setTimeout(res, 1000));
      setMessage({ type: "success", text: `Payment of ₦${payload.amount} successful (demo)` });

      // clear sensitive fields
      setCardNumber("");
      setCvv("");
      setExpiry("");
      setCardHolder("");
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Payment failed. Try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white mt-40 rounded-lg shadow">
      <h3 className="text-2xl font-semibold mb-4">Pay with Debit Card</h3>

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Amount (₦)</label>
          <input
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Cardholder Name</label>
          <input
            type="text"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            placeholder="Full name as on card"
            className="w-full border rounded px-3 py-2"
            autoComplete="cc-name"
          />
          {errors.cardHolder && <p className="text-red-500 text-sm mt-1">{errors.cardHolder}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Card Number</label>
          <div className="relative">
            <input
              inputMode="numeric"
              pattern="[0-9 ]*"
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
              placeholder="1234 5678 9012 3456"
              className="w-full border rounded px-3 py-2 pr-24"
              autoComplete="cc-number"
            />
            <div className="absolute right-3 top-2 text-sm text-gray-600">{detectCardBrand(cardNumber)}</div>
          </div>
          {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Expiry (MM/YY)</label>
            <input
              inputMode="numeric"
              value={expiry}
              onChange={(e) => setExpiry(formatExpiry(e.target.value))}
              placeholder="MM/YY"
              className="w-full border rounded px-3 py-2"
              autoComplete="cc-exp"
            />
            {errors.expiry && <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">CVV</label>
            <input
              inputMode="numeric"
              maxLength={4}
              value={cvv}
              onChange={(e) => setCvv(onlyDigits(e.target.value).slice(0, 4))}
              placeholder="123"
              className="w-full border rounded px-3 py-2"
              autoComplete="cc-csc"
            />
            {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#E81F1F] text-white py-2 rounded font-medium disabled:opacity-60"
        >
          {loading ? "Processing…" : `Pay ₦${amount}`}
        </button>

        {message && (
          <p className={`mt-4 text-sm ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
            {message.text}
          </p>
        )}

        <p className="mt-4 text-xs text-gray-500">
          For a production-ready integration use a PCI-compliant provider (e.g. Stripe, Paystack). This demo does not send card data to any server.
        </p>
      </form>
    </div>
  );
}
   
