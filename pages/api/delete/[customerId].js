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

  if (req.method === "DELETE") {
    const { customerId } = req.query;
    try {
      await Customer.deleteOne({ _id: customerId });
      return res
        .status(200)
        .json({ status: "success", message: "deleted data" });
    } catch (err) {
      return res.status(500).json({
        status: "failed",
        message: "error in deleted data from database",
      });
    }
  }
}
