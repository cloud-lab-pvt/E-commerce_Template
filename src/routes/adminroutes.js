import React from "react";
import Products from "../pages/Products/Products";

import Home from "../pages/home/Home";
import NewProduct from "../pages/Products/NewProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { prductsInputs, productsUpdate } from "../formSource";
import UpdateProduct from "../pages/Products/UpdateProdcut";
import Categories from "../pages/Categories/Categories";
import Users from "../pages/Users/Users";
import UpdateUsers from "../pages/Users/UpdateUsers";
import Orders from "../pages/NewOrders/Orders";
import OrderHistory from "../pages/OrderHistory/OrderHistory";
import Login from "../pages/Login/Login";

function Adminroutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Home />} />

            <Route path="categories">
              <Route index element={<Categories />} />
            </Route>

            <Route path="products">
              <Route index element={<Products />} />
              <Route
                path="new"
                element={
                  <NewProduct inputs={prductsInputs} title="Add New Product" />
                }
              />
              <Route
                path="update/:id"
                element={
                  <UpdateProduct
                    inputs={productsUpdate}
                    title="Update Products"
                  />
                }
              />
            </Route>
            <Route path="users">
              <Route index element={<Users />} />
              <Route
                path="update/:id"
                element={
                  <UpdateUsers inputs={productsUpdate} title="Update Users" />
                }
              />
            </Route>
            <Route path="orders">
              <Route index element={<Orders />} />
            </Route>
            <Route path="ordershistory">
              <Route index element={<OrderHistory />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Adminroutes;
