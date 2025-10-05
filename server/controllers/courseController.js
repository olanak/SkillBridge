import Course from "../models/course.js";

export const getCourses = async (req, res) => {
  try {
    const { tag } = req.query;
    const filter = tag ? { tags: { $in: [tag] } } : {};
    const courses = await Course.find(filter);
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses", error });
  }
};
