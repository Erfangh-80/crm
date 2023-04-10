import FormInput from "./FormInput";
import ItemList from "./ItemList";

const Form = ({ form, setForm }) => {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div>
      <FormInput
        name="firstName"
        label="نام"
        type="text"
        value={form.firstName}
        onChange={changeHandler}
      />
      <FormInput
        name="lastName"
        label="نام خانوادگی"
        type="text"
        value={form.lastName}
        onChange={changeHandler}
      />
      <FormInput
        name="email"
        label="ایمیل"
        type="email"
        value={form.email}
        onChange={changeHandler}
      />
      <FormInput
        name="phone"
        label="شماره تماس"
        type="text"
        value={form.phone}
        onChange={changeHandler}
      />
      <FormInput
        name="address"
        label="آدرس"
        type="text"
        value={form.address}
        onChange={changeHandler}
      />
      <FormInput
        name="postalCode"
        label="کد پستی"
        type="text"
        value={form.postalCode}
        onChange={changeHandler}
      />
      <FormInput
        name="date"
        label="تاریخ"
        type="date"
        value={form.date}
        onChange={changeHandler}
      />
      <ItemList form={form} setForm={setForm} />
    </div>
  );
};

export default Form;
