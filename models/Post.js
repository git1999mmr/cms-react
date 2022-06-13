const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId
    },
    text: {
      type: String,
      required: true
    },
    name: {
      type: String
    },
    avatar: {
      type: String
    },
    role: {
      type: String
    },
    desc: {
      type: String
    },
    location: {
      type: String
    },
    likes: [
      {
        user: {
          type: Schema.Types.ObjectId
        }
      }
    ],
    comments: [
      {
        user: {
          type: Schema.Types.ObjectId
        },
        text: {
          type: String,
          required: true
        },
        name: {
          type: String
        },
        role: {
          type: String
        },
        desc: {
          type: String
        },
        location: {
          type: String
        },
        avatar: {
          type: String
        },
        date: {
          type: Date,
          default: Date.now
        }
      }
    ],
    date: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: 'posts'
  }
);

module.exports = mongoose.model('posts', PostSchema);
