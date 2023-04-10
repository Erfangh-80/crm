import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const Card = ({ customer }) => {
  const router = useRouter();
  const deleteHandler = async () => {
    const data = await axios
      .delete(`/api/delete/${customer._id}`)
      .then((response) => response.data)
      .catch((err) => console.log(err.message));
    if (data.status === "success") router.reload();
  };

  return (
    <div className="card">
      <div className="card__details">
        <p>
          {customer.firstName} {customer.lastName}
        </p>
        <p>{customer.email}</p>
      </div>
      <div className="card__buttons">
        <Link href={`/customer/${customer._id}`}>جزییات</Link>
        <Link href={`/edit-customer/${customer._id}`}>ویرایش</Link>
        <button onClick={deleteHandler}>حذف</button>
      </div>
    </div>
  );
};

export default Card;
