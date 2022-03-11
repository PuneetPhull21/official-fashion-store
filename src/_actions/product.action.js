
const ProductListRequest = ()=>{
    return {
        type:'Product_List_Api',
    }
}

const ProductListSuccess = (list)=>{
    return {
        type:'Product_List_Success',
        payload:list
    }
}

const ProductListFailure = (error)=>{
     return {
         type:'Product_List_Failure',
         payload:error,
     }
}

export const productactions = {
    ProductListRequest,
    ProductListSuccess,
    ProductListFailure,
}