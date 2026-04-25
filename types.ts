export interface Product {
    id: string;
    name: string;
    price: string;
    desc: string;
    image: string;
}

export type RootStackParamList = {
    Home: undefined;
    Detail: { product: Product };
};