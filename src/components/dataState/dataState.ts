import adidasModel1 from '../../assets/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp'
import adidasModel2 from '../../assets/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp'
import adidasModel3 from '../../assets/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp'

export type AdidasItem= {
    model: string;
    collection: string;
    price: string;
    picture: string;
}
export const adidasArr:AdidasItem[] = [
    {
        model: 'ADIDAS ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: adidasModel1,

    },
    {
        model: 'ADIDAS ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: adidasModel2
    },
    {
        model: 'ADIDAS SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: adidasModel3
    }
]