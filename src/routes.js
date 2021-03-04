/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// import Icons from "views/examples/Icons.js";
// import Maps from "views/examples/Maps.js";
import Index from "views/Index.js";
// import Profile from "views/examples/Profile.js";
// import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
// import Tables from "views/examples/Tables.js";
import ChangePassword from "views/examples/ChangePassword.js";
import Listing from "views/examples/Listing.js";
import Bidding from "views/examples/Bidding.js";
import Users from "views/examples/Users.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2",
    component: Index,
    layout: "/admin",
  },

  // {
  //   path: "/index",
  //   name: "User Profile",
  //   icon: "ni ni-single-02",
  //   component: Profile,
  //   layout: "/admin",
  // },

  {
    path: "/listing",
    name: "Listings",
    icon: "ni ni-single-02",
    component: Listing,
    layout: "/admin",
  },

  {
    path: "/bidding",
    name: "Biddings",
    icon: "ni ni-single-02",
    component: Bidding,
    layout: "/admin",
  },
  // {
  //   path: "/index",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67",
  //   component: Tables,
  //   layout: "/admin",
  // },

  {
    path: "/users",
    name: "users",
    icon: "ni ni-bullet-list-67",
    component: Users,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/change-password",
    name: "changePassword",
    icon: "ni ni-circle-08",
    component: ChangePassword,
    layout: "/auth",
  },
];
export default routes;
