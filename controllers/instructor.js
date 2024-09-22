const User = require('../models/mysql/user')
const Instructor = require('../models/mysql/instructor')

exports.register = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'Không có file nào được tải lên!' });
    }

    const { instructor_id, bio } = req.body;

    if (!instructor_id || !bio) {
        return res.status(400).json({ message: 'Vui lòng cung cấp đầy đủ thông tin' });
    }

    try {
        const user = await User.findByPk(instructor_id);

        if (!user) {
            return res.status(404).json({ message: 'Không tìm thấy người dùng' });
        }

        user.role = 'instructor';
        await user.save();

        await Instructor.create({
            name: user.name,
            instructor_id: instructor_id,
            bio,
            profile_picture: req.file.path
        });

        res.status(200).json({ message: 'Bạn đã trở thành một giảng viên!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Đã xảy ra lỗi khi xử lý yêu cầu' });
    }
};
