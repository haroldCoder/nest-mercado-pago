import { currencies } from "./currencies";


export type productType = {
    id: string;
    title: string;
    description?: string;
    picture_url?: string;
    category_id?: string;
    quantity: number;
    currency_id?: keyof typeof currencies;
    unit_price: number;
}

export type return_order = {
    items: Array<productType>,
    init_point: string
}