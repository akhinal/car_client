import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { getAllCars } from "../redux/action/carsAction";
// import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
// import { DatePicker } from "antd";
// import moment from "moment";
// const { RangePicker } = DatePicker;

const Home = () => {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertReducers);

  // const [totalCars, setTotalCars] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  // useEffect(() => {
  //   setTotalCars(cars);
  // }, [cars]);

  // function setFilter(values) {
  //   var selectedFrom = moment(values[0], "MMM DD YYYY HH:mm");
  //   var selectedTO = moment(values[1], "MMM DD YYYY HH:mm");
  //   var temp = [];
  //   for (var car of totalCars) {
  //     if (car.bookedTimeSlots.length == 0) {
  //       temp.push(car);
  //     } else {
  //       for (var booking of car.bookedTimeSlots) {
  //         if (
  //           selectedFrom.isBetween(booking.from, booking.to) ||
  //           selectedTO.isBetween(booking.from, booking.to) ||
  //           moment(booking.from).isBetween(selectedFrom, selectedTO) ||
  //           moment(booking.to).isBetween(selectedFrom, selectedTO)
  //         ) {
  //         } else {
  //           temp.push(car);
  //         }
  //       }
  //     }
  //   }
  //   setTotalCars(temp);
  // }

  return (
    <DefaultLayout>
      {/* {loading == true && <Spinner />} */}
      <div className="flex flex-auto -mt-9  rounded-full  z-50 items-center justify-center fixed w-full ">
    
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  p-3 mt-8">
        {cars.map((car) => (
          <div
            key={car._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            <img
              src={car.imageUrl}
              alt={car.carName}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h1 className="text-xl font-semibold mb-2">{car.name}</h1>
              <p className="text-gray-600">Capacity: {car.capacity}</p>
              <p className="text-gray-600">
                Rent per Day: ${car.rentPerHour.toFixed(2)}
              </p>
            </div>
            <div className="p-4 text-center">
              <Link
                className="bg-blue-500 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-blue-600 hover:text-gray-100"
                to={`/booking/${car._id}`}
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
};

export default Home;
