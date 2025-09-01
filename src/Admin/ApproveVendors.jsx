import React, { useEffect, useState } from 'react';
import { getPendingVendors, approveVendor } from '../Admin';

const ApproveVendors = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetchPending();
  }, []);

  const fetchPending = async () => {
    const res = await getPendingVendors();
    setVendors(res.data);
  };

  const handleApprove = async (vendorId) => {
    await approveVendor(vendorId);
    fetchPending(); // refresh list
  };

  return (
    <div>
      <h2>Pending Vendor Approvals</h2>
      {vendors.length === 0 ? (
        <p>No vendors pending approval</p>
      ) : (
        <ul>
          {vendors.map((vendor) => (
            <li key={vendor._id}>
              {vendor.name} ({vendor.email})
              <button onClick={() => handleApprove(vendor._id)}>Approve</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApproveVendors;
