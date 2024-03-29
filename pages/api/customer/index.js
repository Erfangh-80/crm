import Customer from "@/model/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ status: "failed", message: "error in connection to db" });
  }

  if (req.method === "POST") {
    const data = req.body.data;
    if (!data.firstName || !data.lastName || !data.email)
      return res
        .status(400)
        .json({ status: "failed", message: "Invalid data" });

    try {
      const customer = await Customer.create(data);
      res
        .status(201)
        .json({ status: "success", message: "data created", data: customer });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ status: "failed", message: "error in storing data in db" });
    }
  }
}
