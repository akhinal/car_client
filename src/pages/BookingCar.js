import DefaultLayout from "../components/DefaultLayout";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCars } from "../redux/action/carsAction";
// import moment from "moment";
import { Checkbox, DatePicker } from "antd";
import { bookCar } from "../redux/action/bookinActions";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import StripeCheckout from "react-stripe-checkout";
import "../../src/App.css";

const { RangePicker } = DatePicker;

function BookingCar() {
  const { carid } = useParams();
  const { cars } = useSelector((state) => state.carsReducer);
  const [car, setCar] = useState({});
  const dispatch = useDispatch();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalHours, setTotalHours] = useState(0);
  const [driver, setDriver] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    dispatch(getAllCars());
    if (cars.length > 0) {
      setCar(cars.find((o) => o._id === carid));
    }
  }, [cars]);

  function selectedTimeSlots([fromDate, toDate]) {
    setFrom(fromDate.format("MMM DD YYYY HH:mm"));
    setTo(toDate.format("MMM DD YYYY HH:mm"));
    setTotalHours(toDate.diff(fromDate, "hours"));
  }

  useEffect(() => {
    setTotalAmount(totalHours * car.rentPerHour);
    if (driver) {
      setTotalAmount(totalAmount + 30 * totalHours);
    }
  }, [driver, totalHours]);

  // function bookNow() {
  //   // console.log({from, to});

  // }

  function onToken(token) {
    const reqObj = {
      token,
      user: JSON.parse(localStorage.getItem("user"))._id,
      car: car._id,
      totalHours,
      totalAmount,
      driverRequired: driver,
      bookedTimeSlots: {
        from,
        to,
      },
    };
    console.log(reqObj);

    dispatch(bookCar(reqObj));
  }

  return (
    <DefaultLayout>
      <div className="background-animation flex flex-col md:flex-row w-full mt-10 md:mt-48 p-4 md:p-10 items-center justify-center">
        <div className="md:w-1/2 pr-4">
          {/* Left side for car image */}
          <img
            src={car.imageUrl}
            alt={car.carName}
            className="w-full rounded-md shadow-lg border-gray-300 md:h-[550px] border-4"
          />
        </div>
        <div className="md:w-1/2 pl-4">
          {/* Right side for car details */}
          <h1 className="text-2xl font-semibold mb-4 border-b-2 pb-2 text-center font-serif">
            Car Details
          </h1>
          <p className="text-right font-mono">
            <strong>Car Name:</strong> {car.name}
          </p>
          <p className="text-right font-mono">
            <strong>Capacity:</strong> {car.capacity}
          </p>
          <p className="text-right font-mono">
            <strong>Rent per Hour:</strong> ${car.rentPerHour}
          </p>
          {/* Add other car details as needed */}
          <div>
            <h1 className="text-2xl font-serif font-semibold text-center mb-4 border-b-2 pb-2">
              Select Time Slots
            </h1>
            <div className="pl-4 flex flex-col text-right justify-center items-end">
              <RangePicker
                showTime={{
                  format: "HH:mm",
                }}
                format="MMM DD YYYY HH:mm"
                onChange={selectedTimeSlots}
                className="bg-lime-200 flex justify-center w-full md:w-[500px]"
              />
              <Button
                type="primary"
                size="large"
                className="text-black border-lime-300 font-mono mt-4"
              >
                See Booked TimeSlots
              </Button>
              {from && to && (
                <div>
                  <h1 className="font-mono mt-5">Total Hours : {totalHours}</h1>
                  <div className="flex items-center space-x-2 mt-4">
                    <Checkbox
                      onChange={(e) => {
                        if (e.target.checked) {
                          setDriver(true);
                        } else {
                          setDriver(false);
                        }
                      }}
                      className="font-mono"
                    >
                      Driver Required (+$30/hour)
                    </Checkbox>
                  </div>
                  <div className="mt-4">
                    <h1 className="text-2xl font-semibold mb-2 font-mono">
                      Total Amount : ${totalAmount}
                    </h1>
                  </div>
                  <StripeCheckout
                    shippingAddress
                    token={onToken}
                    amount={totalAmount * 100}
                    currency="INR"
                    stripeKey="pk_test_51NzaOVSEyBYP0F4zMYOK2hExILAuwMsil94TaVt0OUaVDt0Nul46LpFyCjVCaur23hh377g9jRtbzsAjLE3OUir600S4796i61"
                  >
                    <Button
                      type="primary"
                      icon={<PlusOutlined />}
                      size="large"
                      className="text-black border-lime-300 font-mono"
                    >
                      Book Now
                    </Button>
                  </StripeCheckout>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default BookingCar;
