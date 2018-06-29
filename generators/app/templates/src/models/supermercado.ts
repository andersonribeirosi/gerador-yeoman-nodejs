import { model, Schema } from 'mongoose';

const LightboxSchema: Schema = new Schema(
    {
        nome: {
            type: String,
            required: true
        },
        
    },
    {
        collection: 'supermercado',
        versionKey: false
    },
);

export default model('supermercado', LightboxSchema);
