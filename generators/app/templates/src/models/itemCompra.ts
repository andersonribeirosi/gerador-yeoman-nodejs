import { model, Schema } from 'mongoose';


const LightboxSchema: Schema = new Schema(
    {
        itemCompra: {
            type: String,
            required: true
        },

    },
    {
        collection: 'itemCompra',
        versionKey: false
    },
);

export default model('itemCompra', LightboxSchema);
