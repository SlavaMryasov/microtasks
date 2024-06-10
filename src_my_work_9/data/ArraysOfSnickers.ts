
import adidas1 from '../assets/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp'
import adidas2 from '../assets/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp'
import adidas3 from '../assets/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp'
import puma1 from '../assets/kedy-puma-suede-classic-xxi-374915-01-20-1000x800.jpg'
import puma2 from '../assets/krossovki-puma-trinity-mid-hybrid-leather-393985-02-3-1000x800.jpg'
import puma3 from '../assets/krossovki-puma-trinity-open-road-393361-02-3-1000x800.jpg'

export type SnickerType = {
    src: string
    title: string
    description: string
}

export type BrandDataType = {
    data: SnickerType[]
}
export type SnickersType = {
    adidas: BrandDataType;
    puma: BrandDataType;
}

export const snickersArr: SnickersType = {
    adidas: {
        data: [
            { src: adidas1, title: 'AdiFOM_TRXN_Shoes_Black', description: 'this is sport model of Adidas' },
            { src: adidas2, title: 'PostMove_Mid_Cloudfoam', description: 'this is model of Adidas for autumn' },
            { src: adidas3, title: 'Superstar_XLG_Shoes', description: 'this model of Adidas looks like a lowrider' },
        ]
    },
    puma: {
        data: [
            { src: puma1, title: 'Puma-suede-classic', description: 'this model of Puma looks like a lowrider' },
            { src: puma2, title: 'Puma-trinity-mid', description: 'this is model of Puma for autumn' },
            { src: puma3, title: 'Puma-trinity-open', description: 'go walk broooo!' },
        ]
    }
}
