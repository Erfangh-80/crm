"use client"
import CustomerDetail from "@/components/template/CustomerDetail";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CustomerDetails = () => {
  const [data, setData] = useState(null);

  const router = useRouter();
  const {
    query: { customerId },
    isReady,
  } = router;

  useEffect(() => {
    if (isReady)
      axios
        .get(`/api/customer/${customerId}`)
        .then((response) => setData(response.data))
        .catch((err) => console.log(err));
  }, [isReady]);

  if (data) return <CustomerDetail data={data.data}/>;
};

export default CustomerDetails;
