module.exports = (db) =>
  db.model(
    'Auth',
    db.Schema(
      {
        userId: {
          type: db.Schema.Types.ObjectId,
          ref: 'Users',
          required: true,
        },
        email: {
          type: String,
          required: true,
          lowercase: true,
          trim: true,
        },
        token: {
          type: String,
          required: true,
        },
        isActive: {
          type: Boolean,
          default: true,
        },
        loginAt: {
          type: Date,
          default: Date.now,
        },
        expiredAt: {
          type: Date,
          required: true,
        },
      },
      {
        timestamps: true,
      }
    )
  );