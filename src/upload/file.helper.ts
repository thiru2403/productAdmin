export const imageFileFilter = (req:any,file:any, callback:any)=>{
    if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
        return callback(new Error('only image files are allowed!'),false);
    }
    callback(null,true)
};