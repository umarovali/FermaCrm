import UsersPage from "../modules/Users/UsersPage";
import ClientsPage from "../modules/Clients/ClientsPage";
import CouriersPage from "../modules/Couriers/CouriersPage";
import ProductsPage from "../modules/Products/ProductsPage";
import OrdersPage from "../modules/Orders/OrdersPage";

export const routes = [
    {
        id: 1,
        path: "/user/*",
        element: <UsersPage />
    },
    {
        id: 2,
        path: "/products/*",
        element: <ProductsPage />
    },
    {
        id: 3,
        path: "/clients",
        element: <ClientsPage />
    },
    {
        id: 4,
        path: "/couriers",
        element: <CouriersPage />
    },
    {
        id: 5,
        path: "/orders",
        element: <OrdersPage />
    },
]