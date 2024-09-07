const User = require('./user');
const Instructor = require('./instructor');
const Course = require('./course');
const Enrollment = require('./enrollment');
const Payment = require('./payment');
const Category = require('./category');

User.hasOne(Instructor, { foreignKey: 'instructor_id' });
Instructor.belongsTo(User, { foreignKey: 'instructor_id' });

Category.hasMany(Course, { foreignKey: 'category_id' });
Course.belongsTo(Category, { foreignKey: 'category_id' });

Instructor.hasMany(Course, { foreignKey: 'instructor_id' });
Course.belongsTo(Instructor, { foreignKey: 'instructor_id' });

User.hasMany(Enrollment, { foreignKey: 'user_id' });
Enrollment.belongsTo(User, { foreignKey: 'user_id' });

Course.hasMany(Enrollment, { foreignKey: 'course_id' });
Enrollment.belongsTo(Course, { foreignKey: 'course_id' });

User.hasMany(Payment, { foreignKey: 'user_id' });
Payment.belongsTo(User, { foreignKey: 'user_id' });

Course.hasMany(Payment, { foreignKey: 'course_id' });
Payment.belongsTo(Course, { foreignKey: 'course_id' });