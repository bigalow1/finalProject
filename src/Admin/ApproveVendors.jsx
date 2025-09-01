// import React, { useEffect, useState } from 'react';
// import { getPendingVendors, approveVendor } from '../Admin/ApproveVendors';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';

// function ApproveVendors({ vendors, onApprove, onDelete }) {
//   return (
//     <Card className="shadow-lg rounded-2xl mt-6">
//       <CardContent className="p-4">
//         <h2 className="text-lg font-bold mb-4">Vendors</h2>
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Name</TableHead>
//               <TableHead>Email</TableHead>
//               <TableHead>Status</TableHead>
//               <TableHead>Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {vendors.map((vendor) => (
//               <TableRow key={vendor.id}>
//                 <TableCell>{vendor.name}</TableCell>
//                 <TableCell>{vendor.email}</TableCell>
//                 <TableCell>{vendor.status}</TableCell>
//                 <TableCell className="space-x-2">
//                   {vendor.status === "pending" && (
//                     <>
//                       <Button size="sm" onClick={() => onApprove(vendor.id)}>Approve</Button>
//                       <Button size="sm" variant="destructive" onClick={() => onDelete(vendor.id)}>Delete</Button>
//                     </>
//                   )}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </CardContent>
//     </Card>
//   );
// }
// const ApproveVendors = () => {
//   const [vendors, setVendors] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     useEffect(() => {
//         const fetchVendors = async () => {
//             try {
//                 const data = await getPendingVendors();
//                 setVendors(data);
//             } catch (err) {
//                 setError('Failed to fetch vendors');
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchVendors();
//     }
// , []);
//     const handleApprove = async (vendorId) => {
//         try {
//             await approveVendor(vendorId);
//             setVendors((prev) => prev.filter((v) => v.id !== vendorId));
//         } catch (err) {
//             setError('Failed to approve vendor');
//         }
//     };
//     if (loading) return <div>Loading...</div>;
//     if (error) return <div className="text-red-500">{error}</div>;
//     return (
//         <div className="p-6 bg-amber-300 min-h-screen">
//             <h1 className="text-2xl font-bold mb-4">Approve Vendors</h1>
//             {vendors.length === 0 ? (
//                 <p>No pending vendors.</p>
//             ) : (
//                 <ApproveVendors vendors={vendors} onApprove={handleApprove} />
//             )}
//         </div>
//     );
// }

// export default ApproveVendors;
