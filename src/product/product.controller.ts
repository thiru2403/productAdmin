import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { PaginationDto } from 'nestjs-keyset-paginator/dist';
import { FilterDTO } from './dto/filter.dto';
import { ProductDTO } from './dto/product.dto';
import { Product } from './interface/product.interface';
import { ProductService } from './product.service';


@Controller('product')
export class ProductController {
    constructor(private productService:ProductService){}

    @Post()
   
    @UsePipes(ValidationPipe)
    async createProducts(@Res() response,@Body() data:ProductDTO):Promise<Product>{
      try{
      let pp = await this.productService.createProducts(data);
        return response.status(HttpStatus.CREATED).json({
          sucess:true, data:[{pp}], statuscode: '201 created' 
        });
    }catch(err){
      return response.status(HttpStatus.BAD_REQUEST).json({
        sucess:false, data:[err.message], statuscode: '400 Bad_Request'
      })
    }
  }

  

    @Get()
    async  getAllProduct(@Res() response,@Body() data:PaginationDto):Promise<Product[]>{
      try{
        let pr = await this.productService.findAll(
          data.skip,
          data.limit,
          data?.start_key,
           data?.sort?.field,
           data?.sort?.order,
           data?.filter,
           data?.projection
           );
        return response.status(HttpStatus.CREATED).json({
          sucess:true, data:[{pr}], statuscode: '201 ok' 
        });
      }catch(err){
        return response.status(HttpStatus.BAD_REQUEST).json({
          sucess:false, data:[err.message] , statuscode: '400 Bad_Request'
        })
      }
    }
  
      @Get(':id')
      async getOneProduct(@Res() response,@Param('id') id:string):Promise<Product>{
          console.log(id);
          try{
          let pp=await this.productService.getOneProducts(id)
          return response.status(HttpStatus.CREATED).json({
            sucess:true, data:[{pp}], statuscode: '201 ok' 
          })
      }catch(err){
        return response.status(HttpStatus.BAD_REQUEST).json({
          sucess:false, data:[err.message] , statuscode: '400 Bad_Request'
        })
      }
    }
  
      @Put(':id')
      async updateOneProduct(@Res() response,@Param('id') id:string,@Body() data:ProductDTO):Promise<Product>{
        try{  
        let pr= await this.productService.UpdateOneProducts(id,data)
          return response.status(HttpStatus.CREATED).json({
            sucess:true, data:[{pr}], statuscode: '201 ok'
          });

      }catch(err){
        return response.status(HttpStatus.BAD_REQUEST).json({
          sucess:false, data:[err.message] , statuscode: '400 Bad_Request'
        });
      }
    }
      @Delete(':id')
      async deleteOneProduct(@Res() response,@Param('id') id:string):Promise<Product>{
         try{
        let pp = await this.productService.DeleteOneProducts(id)
          return response.status(HttpStatus.CREATED).json({
            sucess:true, data:[{pp}], statuscode: '201 ok'
          })
      }catch(err){
    return response.status(HttpStatus.BAD_REQUEST).json({
      sucess:false, data:[err.message] , statuscode: '400 Bad_Request'
    })
      }
    }
      
  
  @Get("search/filter")
  async getsearch_filter(@Res() response,@Query() filter:FilterDTO):Promise<Product[]>{
    console.log(filter);
     try{
     let pr=await this.productService.GetSearch_Filter(filter)
    return response.status(HttpStatus.CREATED).json({
      sucess:true, data:[{pr}], statuscode: '201 ok'
    })
  }catch(err){
    return response.status(HttpStatus.BAD_REQUEST).json({
      sucess:false, data:[err.message] , statuscode: '400 Bad_Request'
    })
  }
}
  
@Post("search/filter")
@UsePipes(ValidationPipe)

async ProductFilter_PostMethod(@Res() response, @Body() filter:FilterDTO):Promise<Product>{
console.log(filter);
  try{
    let pr= await this.productService.ProductFilter_PostMethod(filter)
    return response.status(HttpStatus.CREATED).json({
      success: true, data:[{pr}], statusCode:'201 created'
    })
  }catch(err){
    return response.status(HttpStatus.BAD_REQUEST).json({
      success:false, data:[err.message], statusCode:'400 Bad_Request'
    })
  }


}
}
