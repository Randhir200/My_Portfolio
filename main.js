db.orders.aggregate([
    {
      $match: { "status": "shipped" }
    },
    {
      $group: {
        _id: "$shipper_id",
        revenue: { $sum: "$total" }
      }
    },
    {
      $project: {
        _id: 0,
        shipper_id: "$_id",
        revenue: 1
      }
    }
  ]);
  