import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

const CustomerDetail = ({ data }) => {
  const router = useRouter();

  const deleteHandler = () => {
    axios
      .delete(`/api/delete/${data._id}`)
      .then((response) => response.data)
      .catch((err) => console.log(err.message));
    router.push("/");
  };

  return (
    <div className="customer-detail">
      <h4>مشخصات مشتری</h4>
      <div className="customer-detail__main">
        <div className="customer-detail__item">
          <span>نام</span>
          <p>{data.firstName}</p>
        </div>
        <div className="customer-detail__item">
          <span>نام خانوادگی</span>
          <p>{data.lastName}</p>
        </div>
        <div className="customer-detail__item">
          <span>ایمیل</span>
          <p>{data.email}</p>
        </div>
        <div className="customer-detail__item">
          <span>شماره تماس</span>
          <p>{data.phone}</p>
        </div>
        <div className="customer-detail__item">
          <span>آدرس</span>
          <p>{data.address}</p>
        </div>
        <div className="customer-detail__item">
          <span>کد پستی</span>
          <p>{data.postalCode}</p>
        </div>
        <div className="customer-detail__item">
          <span>تاریخ</span>
          <p>{moment(data.date).utc().format("YYYY-MM-DD")}</p>
        </div>
      </div>
      <div className="customer-detail__products">
        <p>نام محصول</p>
        <p>قیمت</p>
        <p>تعداد</p>
        {data.products.map((product, index) => (
          <Fragment key={index}>
            <p>{product.name}</p>
            <p>{formatPrice(+product.price)}</p>
            <p>{product.qty}</p>
          </Fragment>
        ))}
      </div>
      <div className="customer-detail__buttons">
        <p>ویرایش یا حذف !!!</p>
        <button className="delete" onClick={deleteHandler}>
          حذف
        </button>
        <Link href={`/edit-customer/${data._id}`}>ویرایش</Link>
      </div>
    </div>
  );
};

export default CustomerDetail;
const formatPrice = (price) => {
  if (price) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    let priceNumber = formatter.format(price);

    return priceNumber;
  }
};
