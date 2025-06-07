// filepath: /c:/Users/Administrator/fly-hive/frontend/src/TicketPage.jsx
import React from 'react';
import QRCode from 'qrcode.react';
import { useSearchParams } from 'react-router-dom';

const TicketPage = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');

  // Mock ticket data
  const ticket = {
    id: '12345',
    event: 'Fly Hive Conference',
    date: '2025-06-15',
    email,
  };

  return (
    <div>
      <h1>Your Ticket</h1>
      <p>Ticket ID: {ticket.id}</p>
      <p>Event: {ticket.event}</p>
      <p>Date: {ticket.date}</p>
      <p>Email: {ticket.email}</p>
      <QRCode value={JSON.stringify(ticket)} />
    </div>
  );
};

export default TicketPage;