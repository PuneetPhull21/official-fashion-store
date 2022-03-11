import request from "./http_axios";
import { GusetUserServices } from "./guestuser.service";
const token = process.env.REACT_APP_ADMIN_TOKEN;
export const product = {
  ProductListApi,
  ProductCategories,
  bannerApi,
  Homepage,
  BlogApi,
  ProductsNewarrival,
  PDPApi,
  AddToCart,
  searchBarApi,
  DeleteProductFromCart,
  AddToWishList,
  RemoveWishList,
  GetWishList,
  PlpPageApi,
  GetCategory_Id
};

async function ProductListApi(PageSize) {
  return request(
    `rest/fashion_store_view/V1/products/?searchCriteria%5BpageSize%5D=${PageSize}`,
    "",
    "get",
    "",
    token
  );
}

function ProductCategories() {
  return request("fashion_store_view/rest/V1/categories", "", "get", "", token);
}

//banner api
function bannerApi() {
  return request(
    "default/rest/all/V1/codilar/bannerslider/slider/loadById/3",
    "",
    "get",
    "",
    token
  );
}

async function Homepage(identifier_Name) {
  return await request(
    `rest/V1/cmsBlock/search?searchCriteria[filterGroups][0][filters][0][field]=store_id&searchCriteria[filterGroups][0][filters][0][value]=2&searchCriteria[filterGroups][0][filters][0][condition_type]==&searchCriteria[filterGroups][1][filters][0][field]=identifier&searchCriteria[filterGroups][1][filters][0][value]=${identifier_Name}&searchCriteria[filterGroups][1][filters][0][condition_type]==`,
    "",
    "get",
    "",
    token
  );
}

async function ProductsNewarrival(value) {
  return await request(
    `fashion_store_view/rest/V1/products/?searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=${value}&searchCriteria[filter_groups][0][filters][0][condition_type]=eq&fields=items[sku,name,id,price,custom_attributes]&searchCriteria[pageSize]=20&searchCriteria[sortOrders][0][field]=created_at&`,
    "",
    "get",
    "",
    token
  );
}

async function BlogApi() {
  return await request(
    `fashion_store_view/rest/V1/mpblog/post/list?storeId=2&searchCriteria[currentPage]=1`,
    "",
    "get",
    "",
    token
  );
}

async function PDPApi(sku_name) {
  return await request(
    `fashion_store_view/rest/V1/products/${sku_name}`,
    "",
    "get",
    "",
    token
  );
}
function searchBarApi(value) {
  return request(
    `rest/fashion_store_view/V1/products/?searchCriteria[filter_groups][0][filters][0][field]=website_id&searchCriteria[filter_groups][0][filters][0][value]=3&searchCriteria[filter_groups][0][filters][0][condition_type]=eq&searchCriteria[filter_groups][1][filters][0][field]=name&searchCriteria[filter_groups][1][filters][0][value]=${value}&searchCriteria[filter_groups][1][filters][0][condition_type]=like&searchCriteria[currentPage]=1&searchCriteria[pageSize]=3&searchCriteria[sortOrders][0][field]=created_at&searchCriteria[sortOrders][0][direction]=DESC`,
    "",
    "get",
    "",
    token
  );
}

async function AddToCart(product_details) {
  const cart_id = localStorage.getItem("cart_id");
  if (cart_id) {
    const cart_data = JSON.parse(cart_id);
    return await GusetUserServices.AddProductGuestCart(
      product_details,
      cart_data.cart_id
    );
  } else {
    const cart_id = await GusetUserServices.GuestUserGenerateToken();
    const user_id = await GusetUserServices.CreateCustomerGuest(cart_id.data);
    localStorage.setItem(
      "cart_id",
      JSON.stringify({ cart_id: cart_id.data, id: user_id.data })
    );
    return await GusetUserServices.AddProductGuestCart(
      product_details,
      cart_id.data
    );
  }
}

function DeleteProductFromCart(item_id, quote_id) {
  return request(
    `fashion_store_view/rest/V1/carts/${quote_id}/items/${item_id}`,
    "",
    "Delete",
    "",
    token
  );
}

function AddToWishList(sku_name, customer_id) {
  return request(
    `fashion_store_view/rest/V1/wishlist/addBySku/${sku_name} `,
    customer_id,
    "post",
    "",
    token
  );
}

function RemoveWishList(wishlist_item_id, customer_id) {
  return request(
    `fashion_store_view/rest/V1/wishlist/delete/${wishlist_item_id}?customerId=${customer_id}`,
    "",
    "Delete",
    "",
    token
  );
}

function GetWishList(customer_id) {
  return request(
    `fashion_store_view/rest/all/V1/wishlist/items?customerId=${customer_id}&page_size=30&sortBy=price&soryByValue=ASC`,
    "",
    "get",
    "",
    token
  );
}

function PlpPageApi(category_id, pageSize, currentPage,SortBY,sidebar) {
  let data;
  console.log(sidebar);
  if(SortBY.position==="" && SortBY.sort===""&& sidebar.name === ""){
    data = '{products(filter:{category_id:{ eq: "' + category_id + '" } }, pageSize: ' + pageSize + ',currentPage: ' + currentPage + ' ){aggregations{attribute_code count label options{ count label value }}total_count  page_info {page_size  current_page} items { id brand name sku short_description {  html }  image { url } price_range {  minimum_price {  regular_price { value currency } final_price { value currency } fixed_product_taxes {  label amount {value  currency }}}maximum_price {  discount {  amount_off    percent_off } fixed_product_taxes { label amount { value currency } } } } }}}';
  }
  else if(sidebar.name!==""){
    console.log(sidebar);
    console.log(category_id);

    console.log(sidebar.name,sidebar.value);

    data = '{products(search: \"\", filter:{category_id:{ eq:"'+ category_id +'" },' + sidebar.name +' : { eq:"'+ sidebar.value +'" } }, pageSize: 12,currentPage: 1 ){aggregations{attribute_code count label options{ count label value }}total_count page_info {page_size current_page} items { id brand name sku short_description { html } image { url } price_range { minimum_price { regular_price { value currency } final_price { value currency } fixed_product_taxes { label amount {value currency }}}maximum_price { discount { amount_off percent_off } fixed_product_taxes { label amount { value currency } } } } }}}';
  }
  else{
    data = '{products(filter:{category_id:{ eq: "' + category_id + '" } }, pageSize: ' + pageSize + ',currentPage: ' + currentPage + ', sort: {' + SortBY.sort + ':ASC}){aggregations{attribute_code count label options{ count label value }}total_count  page_info {page_size  current_page} items { id brand name sku short_description {  html }  image { url } price_range {  minimum_price {  regular_price { value currency } final_price { value currency } fixed_product_taxes {  label amount {value  currency }}}maximum_price {  discount {  amount_off    percent_off } fixed_product_taxes { label amount { value currency } } } } }}}';
  }
  
  let query = {
    "query":data,
    "storeCode":"fashion_store_view",
    "catId":category_id,
  }
  return request(
    'fashion_store_view/rest/V1/product/filtersCollection',
    query,
    "POST",
    "",
    token
  );
}


function GetCategory_Id(params){
  return request(`fashion_store_view/rest/V1/categories/list?searchCriteria[filterGroups][0][filters][0][field]=url_path&searchCriteria[filterGroups][0][filters][0][value]=${params}&searchCriteria[filterGroups][0][filters][0][conditionType]=eq&fields=items[name,id]`,"","GET","",token);
}