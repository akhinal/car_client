// import React from 'react';
// import DefaultLayout from '../components/DefaultLayout';
// import { useDispatch } from 'react-redux';
// // import { addCar } from '../redux/action/carsAction';
// import { Form, Input, Button, Select } from 'antd'; // Import Ant Design components

// const { Option } = Select;

// function AddCar() {
//   const dispatch = useDispatch();

//   const onFinish = (values) => {
//     values.bookedTimeSlots = [];
//     dispatch(addCar(values));
//     console.log(values);
//   };

//   return (
//     <DefaultLayout>
//       <div className="flex justify-center items-center h-full">
//         {/* Wrap your form fields with the Form component */}
//         <Form className="w-full max-w-md" onFinish={onFinish}>
//           <h2 className="text-3xl font-semibold mb-4">Add New Car</h2>
//           <Form.Item
//             label="Car Name"
//             name="carName"
//             rules={[{ required: true, message: 'Please enter Car Name' }]}
//           >
//             <Input placeholder="Enter Car Name" />
//           </Form.Item>
//           <Form.Item
//             label="Image URL"
//             name="imageUrl"
//             rules={[{ required: true, message: 'Please enter Image URL' }]}
//           >
//             <Input placeholder="Enter Image URL" />
//           </Form.Item>
//           <Form.Item
//             label="Rent per Hour ($)"
//             name="rentPerHour"
//             rules={[{ required: true, message: 'Please enter Rent per Hour' }]}
//           >
//             <Input type="number" placeholder="Enter Rent per Hour" />
//           </Form.Item>
//           <Form.Item
//             label="Capacity"
//             name="capacity"
//             rules={[{ required: true, message: 'Please enter Capacity' }]}
//           >
//             <Input type="number" placeholder="Enter Capacity" />
//           </Form.Item>
//           <Form.Item
//             label="Fuel Type"
//             name="fuelType"
//             rules={[{ required: true, message: 'Please select Fuel Type' }]}
//           >
//             <Select placeholder="Select Fuel Type">
//               <Option value="gasoline">Gasoline</Option>
//               <Option value="diesel">Diesel</Option>
//               <Option value="electric">Electric</Option>
//             </Select>
//           </Form.Item>
//           <div className="mb-4">
//             <Form.Item>
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
//               >
//                 Create Car
//               </Button>
//             </Form.Item>
//           </div>
//         </Form>
//       </div>
//     </DefaultLayout>
//   );
// }

// export default AddCar;
import React from 'react'

export const AddCar = () => {
  return (
    <div>AddCar</div>
  )
}

