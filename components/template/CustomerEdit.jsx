import { useState } from "react";
import Form from "../module/Form";
import axios from "axios";
import moment from "moment";
import { useRouter } from "next/router";

const CustomerEdit = ({ data, id }) => {
  const date = data.date ? moment(data.date).utc().format("yyyy-mm-dd") : "";
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone || "",
    address: data.address || "",
    postalCode: data.postalCode || "",
    products: data.products || "",
    date: date,
  });

  const saveHandler = async () => {
    const res = await axios
      .patch(
        `/api/edit/${id}`,
        { data: form },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => response.data)
      .catch((err) => console.log(err));
    if (res.status === "success") router.push("/");
  };
  const cancelHandler = () => {
    router.push("/");
  };

  return (
    <div className="customer-page">
      <h4>edit customer</h4>
      <Form form={form} setForm={setForm} />
      <div className="customer-page__buttons">
        <button className="cancel" onClick={cancelHandler}>
          انصراف
        </button>
        <button className="save" onClick={saveHandler}>
          ویرایش
        </button>
      </div>
    </div>
  );
};

export default CustomerEdit;
