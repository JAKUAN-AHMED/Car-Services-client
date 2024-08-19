import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Utility/Provider/ProviderContext";
const Checkout = () => {
  const service = useLoaderData();
  const { title,price,_id,img} = service;
  console.log(service);
  const {User}=useContext(AuthContext);
  const handleBook=e=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const date=form.date.value;
    const booking={
        CustomerName:name,
        email,
        price,
        date,
        img,
        service_id:_id,
        service:title,
      }
    console.log(booking);
    //data post to server
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Corrected here
      },
      body: JSON.stringify(booking),
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
  }
  return (
    <div className="overflow-hidden pr-8 max-w-6xl mx-auto">
      <div>
        <h2 className="text-2xl font-medium text-center m-8">
          Service title :{title}
        </h2>
      </div>
      <div className="hero bg-[#F3F3F3] min-h-screen m-4">
        <form onSubmit={handleBook} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Name"
                defaultValue={User?.name}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-80">
              <input
                type="date"
                placeholder="Date"
                name="date"
                defaultValue={User?.date}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Email"
                defaultValue={User?.email}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-80">
              <input
                type="text"
                name="amount"
                placeholder="Due Amount"
                defaultValue={`$` + price}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <textarea
              placeholder="Product Description"
              name="description"
              className="textarea textarea-bordered textarea-lg h-56"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-secondary bg-orange-600">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
