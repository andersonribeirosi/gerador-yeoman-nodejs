import { model, Schema } from 'mongoose';


const LightboxSchema: Schema = new Schema(
    {
        nome: {
            type: String,
            required: true
        },
        unidadeCompra: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        }
        ,
        qntPrevistoMes: {
            type: String,
            required: true
        },
        precoMaxComprado: {
            type: String,
            required: true
        }
    },
    {
        collection: 'produto',
        versionKey: false
    },
);

export default model('produto', LightboxSchema);
