import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainSignup = () => {
  const navigate = useNavigate();
  const { setCaptain } = useContext(CaptainDataContext);

  const [fullname, setFullname] = useState({
    firstname: "",
    lastname: "",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      fullname: {
        firstname: fullname.firstname,
        lastname: fullname.lastname,
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: Number(vehicleCapacity),
        vehicleType: vehicleType,
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        data
      );

      setCaptain(response.data.captain);
      navigate("/captain/home");
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="bg-black h-16 flex items-center px-4">
        <img
          className="w-20 object-contain"
          src="https://cdn.dribbble.com/userupload/30846413/file/still-2ebad96f3bcdf511e1a66a295ebd0ea9.png"
          alt="logo"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex justify-center items-start p-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-4"
        >
          <h3 className="text-xl font-semibold">Captain Name</h3>

          <div className="flex gap-3">
            <input
              required
              className="bg-gray-100 w-1/2 px-4 py-2 border rounded text-lg"
              type="text"
              placeholder="First name"
              value={fullname.firstname}
              onChange={(e) =>
                setFullname({ ...fullname, firstname: e.target.value })
              }
            />
            <input
              required
              className="bg-gray-100 w-1/2 px-4 py-2 border rounded text-lg"
              type="text"
              placeholder="Last name"
              value={fullname.lastname}
              onChange={(e) =>
                setFullname({ ...fullname, lastname: e.target.value })
              }
            />
          </div>

          <h3 className="text-xl font-semibold">Captain Email</h3>
          <input
            required
            className="bg-gray-100 px-4 py-2 border rounded w-full text-lg"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className="text-xl font-semibold">Password</h3>
          <input
            required
            className="bg-gray-100 px-4 py-2 border rounded w-full text-lg"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <h3 className="text-xl font-semibold mt-4">Vehicle Details</h3>

          <input
            required
            className="bg-gray-100 px-4 py-2 border rounded w-full text-lg"
            type="text"
            placeholder="Vehicle Color"
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
          />

          <input
            required
            className="bg-gray-100 px-4 py-2 border rounded w-full text-lg"
            type="text"
            placeholder="Vehicle Plate Number"
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)}
          />

          <input
            required
            className="bg-gray-100 px-4 py-2 border rounded w-full text-lg"
            type="number"
            placeholder="Vehicle Capacity"
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
          />

          <select
            required
            className="bg-gray-100 px-4 py-2 border rounded w-full text-lg"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="">Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="auto">Auto</option>
            <option value="motorcycle">Bike</option>
          </select>

          <button
            type="submit"
            className="bg-black text-white w-full py-3 rounded-lg text-lg hover:bg-gray-900"
          >
            Create Captain Account
          </button>

          <p className="text-center text-sm mt-4">
            Already a Captain?{" "}
            <Link
              to="/captain/login"
              className="text-blue-600 font-medium"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CaptainSignup
