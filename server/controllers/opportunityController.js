import Opportunity from "../models/opportunity.js";

export const getOpportunities = async (req, res) => {
  try {
    const { tag } = req.query;
    const filter = tag ? { tags: { $in: [tag] } } : {};
    const opportunities = await Opportunity.find(filter);
    res.status(200).json(opportunities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching opportunities", error });
  }
};
