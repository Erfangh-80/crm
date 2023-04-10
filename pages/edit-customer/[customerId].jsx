import { useEffect, useState } from "react";
import CustomerEdit from "@/components/template/CustomerEdit";
import { useRouter } from "next/router";
import axios from "axios";

const Index = () => {
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
  if (data) return <CustomerEdit data={data.data} id={customerId} />;
};

export default Index;
