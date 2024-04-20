import axios from "axios";
import { SendMediaMessageBody, SendTextMessageBody } from "./types";

class Apiwap {
    apikey;
    baseUrl = "https://api.apiwap.com/api/v1/whatsapp"

    constructor(apikey:string) {
        if (!apikey) {
            throw new Error('API key is required');
        }
        this.apikey = apikey;
    }

    async sendTextMessage(body:SendTextMessageBody){
         try {
            const response = await axios.post(`${this.baseUrl}/send-message`,{
                ...body,
                type:"text"
            },{
                headers: {
                  Authorization: `Bearer ${this.apikey}`,
                },
              })

              return response
         } catch (error:any) {
            let message = error.response.data
            throw new Error(message)
         }
    }

    async sendMedia(body:SendMediaMessageBody){
        try {
           const response = await axios.post(`${this.baseUrl}/send-message`,{
            ...body,
            type:"media"
           },{
               headers: {
                 Authorization: `Bearer ${this.apikey}`,
               },
             })

             return response
        } catch (error) {
           let message = 'sending text message failed'
           if (error instanceof Error) message = error.message
           throw new Error(message)
        }
   }
}

export * from "./types"
export default Apiwap
