import { IsNotEmpty, IsNumber, IsNumberString, IsString } from "class-validator";

export class ProductDTO{
    @IsString()
    productName: string;

    @IsString()
    productImage:string;

    @IsNumber()
    price: number;

    @IsString()
    brand:string;

    @IsNotEmpty()
    manufacture: string;
    
  

    @IsNotEmpty()
       productSpec:{
                 height: number,
                 width : number,
                 color : string
           }
 

  @IsNotEmpty()    
        userReviews:[{
            comments: string,
            likes:number,

            reply: [
                {
                        Comment:String,
                        user_Id: string,
                        createdDate: Date,
                }
            ],

       

        
       
   
      
        rating:[
            {
            rating: Number,
             user_Id: string
            

            }

        ];
    }];

    @IsNumber()    
    overAllRating:number;

    
    createddate: Date;
    

}