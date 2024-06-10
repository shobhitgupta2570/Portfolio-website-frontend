import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/login",
//     element: <LoginPage></LoginPage>,
//   },
//   {
//     path: "/signup",
//     element: <SignupPage></SignupPage>,
//   },
//   {
//     path: "/",
//     element: <Protected><Home></Home></Protected>,
//   },
//   {
//     path: "/admin",
//     element: <ProtectedAdmin><AdminHome></AdminHome></ProtectedAdmin>,
//   },
//   {
//     path: "/cart",
//     element: <Protected><CartPage></CartPage></Protected>,
//   },
//   {
//     path: "/checkout",
//     element: <Protected><Checkout></Checkout></Protected>,
//   },
//   {
//     path: "/product-detail/:id",
//     element: <Protected><ProductDetailPage></ProductDetailPage></Protected>,
//   },
//   {
//     path: "/admin/product-detail/:id",
//     element: <ProtectedAdmin><AdminProductDetailPage></AdminProductDetailPage></ProtectedAdmin>,
//   },
//   {
//     path: "/admin/product-form",
//     element: <ProtectedAdmin><AdminProductFormPage></AdminProductFormPage></ProtectedAdmin>,
//   },
//   {
//     path: "/admin/orders",
//     element: <ProtectedAdmin><AdminOrderspage></AdminOrderspage></ProtectedAdmin>,
//   },
//   {
//     path: "/admin/product-form/edit/:id",
//     element: <ProtectedAdmin><AdminProductFormPage></AdminProductFormPage></ProtectedAdmin>,
//   },
//   {
//     path: "/order-success/:id",
//     element: (
//       <Protected>
//         <OrderSucessPage></OrderSucessPage>{' '}
//       </Protected>
//     ),
//   },
//   {
//     path: "/my-orders",
//     element: (
//       <Protected>
//         <UsersOrderPage></UsersOrderPage>{' '}
//       </Protected>
//     ),
//   },
//   {
//     path: "/profile",
//     element: (
//       <Protected>
//         <UsersProfilePage></UsersProfilePage>{' '}
//       </Protected>
//     ),
//   },
//   {
//     path: "/stripe-checkout/",
//     element: (
//       <Protected>
//         <StripeCheckout></StripeCheckout>
//       </Protected>
//     ),
//   },
//   {
//     path: "/logout",
//     element: <Logout></Logout>,
//   },
//   {
//     path: "/forgot-password",
//     element: <ForgotPasswordPage></ForgotPasswordPage>,
//   },
//   {
//     path: "/reset-password",
//     element: <ResetPasswordPage></ResetPasswordPage>,
//   },
//   {
//     path: "*",
//     element: <PageNotFound></PageNotFound>,
//   },
// ]);
function App() {
  return (
    <div className="App">
      <h1 className="bg-red-900">hello world</h1>
    </div>
  );
}

export default App;
