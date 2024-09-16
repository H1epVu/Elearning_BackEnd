const User = require('../models/mysql/user')

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser = await User.create({
            name,
            email,
            password,
        });

        return res.status(201).json({ message: 'Tạo tài khoản thành công!' })
    } catch (error) {
        console.error('Lỗi khi tạo người dùng:', error);
        return res.status(500).json({ message: 'Đã xảy ra lỗi' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ message: 'Người dùng không tồn tại!' });
        }

        if (password != user.password) {
            return res.status(401).json({ message: 'Sai mật khẩu!' })
        }

        return res.status(200).json({ message: 'ok', user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Đã xảy ra lỗi' });
    }
};

exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await User.destroy({ where: { user_id: id } });
        if (result > 0) {
            res.status(200).json({ message: "Người dùng đã bị xóa" });
        } else {
            res.status(404).json({ message: 'Không tìm thấy người dùng để xóa!' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Đã xảy ra lỗi khi xóa người dùng!' });
    }
};

exports.getUserById = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findByPk(id)
        if (user) {
            return res.status(200).json(user);
        }
        return res.status(404).json({ message: 'Người dùng không tìm thấy' });
    } catch (error) {
        console.error('Lỗi khi tìm người dùng:', error);
        return res.status(500).json({ message: 'Đã xảy ra lỗi' });
    }
}