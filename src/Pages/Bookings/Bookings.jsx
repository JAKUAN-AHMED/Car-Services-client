import {  useEffect, useState } from "react";
import BookingRow from "./BookingRow";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Bookings = () => {
  const { User } = useAuth();
  const [bookings, setBookings] = useState([]);
  const axiosSecure=useAxiosSecure();
  const url = `/bookings?email=${User?.email}`;
  useEffect(() => {
    axiosSecure.get(url)
    .then((res) =>{ 
      setBookings(res.data)
    });
  }, [url,axiosSecure]);
  const handleDelete = (id) => {
    const proceed = confirm("Are you sure want to Delete ?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = bookings.filter((booking) => booking._id !== id);
          setBookings(remaining);
          if (data.deletedCount > 0) {
            alert("successfully deleted");
          }
        });
    }
  };
  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("updated info");
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBooking = [updated, ...remaining];
          setBookings(newBooking);
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl text-center m-4">Bookings : {bookings.length}</h2>

      <div className="overflow-x-auto">
        <table className="table mb-4">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
