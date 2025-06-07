// filepath: /c:/Users/Administrator/fly-hive/frontend/src/PaymentForm.jsx
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your-publishable-key-here'); // Replace with your Stripe public key

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    const cardElement = elements.getElement(CardElement);

    // Call your backend to create a payment intent
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const { clientSecret } = await response.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: { name, email },
      },
    });

    if (result.error) {
      alert(result.error.message);
    } else if (result.paymentIntent.status === 'succeeded') {
      alert('Payment successful!');
      // Redirect to ticket page
      window.location.href = `/ticket?email=${email}`;
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Payment Form</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <CardElement />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </form>
  );
};

const PaymentPage = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default PaymentPage;