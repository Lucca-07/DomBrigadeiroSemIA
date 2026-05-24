export interface IProduct {
    id: string;
    name: string;
    desc: string;
    imageUrl: string;
    special?: boolean;
}
export interface IProductObject {
    props: {
        id: string;
        name: string;
        desc: string;
        imageUrl: string;
        special?: boolean;
    };
}
