import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
    {
        videoFile: {
            type: String, // we'll get this from hosting service
            // cloudnary URL
            required: true,
        },
        thumbnail: {
            type: String, // cloudnary URL
            required: true,
        },
        title: {
            type: String, 
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: Number, // from cloudnary url
            required: true,
        },
        views: {
            type: Number,
            default: 0,
        },
        published: { // this is just a bool flag
            // to represent if the video is public or not
            type: Boolean,
            default: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User" // this will add the objectid of diff user 
        }
    }, 
    {timestamps: true}
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)