import request from "./http_axios";

const token = process.env.REACT_APP_ADMIN_TOKEN;

export const GusetUserServices = {
  GuestUserGenerateToken,
  CreateCustomerGuest,
  AddProductGuestCart,
  CheckGuestItemsCart,
};

async function GuestUserGenerateToken() {
  return await request(
    "fashion_store_view/rest/V1/guest-carts",
    "",
    "post",
    "",
    token
  );
}

async function CreateCustomerGuest(guest_token) {
  return await request(
    `fashion_store_view/rest/V1/guest-carts/${guest_token}`,
    "",
    "get",
    "",
    token
  );
}

async function AddProductGuestCart(product_details, cart_id) {
  const postdata = {
    "cartItem": {
      "sku": product_details.sku_name,
      "qty": product_details.qty,
    }
  }
  return await request(
    `fashion_store_view/rest/V1/guest-carts/${cart_id}/items`,
    JSON.stringify(postdata),
    "post",
    "",
    token
  );
}

async function CheckGuestItemsCart(cart_id) {
  return await request(
    `fashion_store_view/rest/V1/guest-carts/${cart_id}/items`,
    "",
    "get",
    "",
    ""
  );
}

