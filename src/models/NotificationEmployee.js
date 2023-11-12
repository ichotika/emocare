import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  userid: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  isRead: { type: Boolean, default: false },
});

const NotificationEmployee =
    mongoose.models.NotificationEmployee ||
    mongoose.model("NotificationEmployee", notificationSchema, "temp-notification-employee");

export default NotificationEmployee;