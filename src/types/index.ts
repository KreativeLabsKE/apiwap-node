
export type SendTextMessageBody = {
    phoneNumber:String,
    message:String,
}

export type SendMediaMessageBody = {
    phoneNumber:String,
    message:String,
    media_type:"image" | "document" | "apk" | "zip",
    mediaUrl:String
}
