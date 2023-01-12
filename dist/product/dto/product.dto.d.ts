export declare class ProductDTO {
    productName: string;
    productImage: string;
    price: number;
    brand: string;
    manufacture: string;
    productSpec: {
        height: number;
        width: number;
        color: string;
    };
    userReviews: [
        {
            comments: string;
            likes: number;
            reply: [
                {
                    Comment: String;
                    user_Id: string;
                    createdDate: Date;
                }
            ];
            rating: [
                {
                    rating: Number;
                    user_Id: string;
                }
            ];
        }
    ];
    overAllRating: number;
    createddate: Date;
}
