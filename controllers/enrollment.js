const Enrollment = require('../models/mysql/enrollment')

exports.assign = async (req, res) => {
    try {
        const { user_id, course_ids } = req.body;

        if (!user_id || !course_ids) {
            return res.status(400).json({ message: 'Yêu cầu phải có user_id và course_ids' });
        }

        const courses = Array.isArray(course_ids) ? course_ids : [course_ids];

        const enrollments = await Promise.all(courses.map(async (course_id) => {
            return await Enrollment.create({
                user_id,
                course_id,
                enrollment_date: new Date(),
            });
        }));

        return res.status(201).json({ message: 'Đăng ký thành công', enrollments });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình đăng ký khóa học' });
    }
};