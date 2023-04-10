import connectDB from "@/utils/connectDB";
import Customer from "@/model/Customer";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    return res
      .status(500)
      .json({ status: "failed", message: "error in connection to db" });
  }

  if (req.method === "PATCH") {
    const { customerId } = req.query;
    const data = req.body.data;
    try {
      const customer = await Customer.findOne({ _id: customerId });
      customer.firstName = data.firstName;
      customer.lastName = data.lastName;
      customer.email = data.email;
      customer.phone = data.phone;
      customer.address = data.address;
      customer.postalCode = data.postalCode;
      customer.products = data.products;
      customer.updatedAt = Date.now();
      customer.save();
      return res
        .status(200)
        .json({ status: "success", message: "updated data", data: customer });
    } catch (err) {
      return res.status(500).json({
        status: "failed",
        message: "error in updated data from database",
      });
    }
  }
}
