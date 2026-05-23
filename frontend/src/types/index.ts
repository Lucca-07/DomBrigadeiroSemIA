export interface ICardAbout {
    imageURL: string;
    title: string;
    topics: {
        topic1: string;
        topic2: string;
        topic3: string;
    };
    reversed?: boolean;
}
