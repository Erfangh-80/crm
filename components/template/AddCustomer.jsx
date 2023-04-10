import { useState } from "react";
import Form from "../module/Form";
import axios from "axios";
import { useRouter } from "next/router";

const AddCustomerPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    date: "",
    products: [],
  });

  const router = useRouter();

  const saveHandler = async () => {
    const res = await axios
      .post(
        "/api/customer",
        { data: form },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => response)
      .catch((err) => console.log(err));
    if (res?.data.status === "success") router.push("/");
  };

  const cancelHandler = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      postalCode: "",
      date: "",
      products: [],
    });
    router.push("/");
  };

  return (
    <div className="customer-page">
      <h4>مشتری جدید</h4>
      <Form form={form} setForm={setForm} />
      <div className="customer-page__buttons">
        <button className="cancel" onClick={cancelHandler}>
          انصراف
        </button>
        <button className="save" onClick={saveHandler}>
          ذخیره
        </button>
      </div>
    </div>
  );
};

export default AddCustomerPage;
