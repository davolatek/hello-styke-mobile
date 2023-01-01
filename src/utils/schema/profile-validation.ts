import * as Yup from 'yup'

export const ProfilevalidationSchema = Yup.object().shape({
    img: Yup.string().optional(),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    dob: Yup.string().required("Date of Birth is required"),
    email: Yup.string().required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    address: Yup.string().required("Address is required"),
  });