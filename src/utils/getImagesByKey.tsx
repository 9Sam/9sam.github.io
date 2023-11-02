import meetilogo from "../assets/img/meeti/login.jpg";
import assignComissions from "../assets/img/unocell/asign_comissions.png";
import comissions from "../assets/img/unocell/comissions.png";
import createInventory from "../assets/img/unocell/create_inventory.png";
import createOrder from "../assets/img/unocell/create_order.png";
import editAmount from "../assets/img/unocell/edit_amout.png";
import editInventory from "../assets/img/unocell/edit_inventory.png";
import editUser from "../assets/img/unocell/edit_user.png";
import finishedOrders from "../assets/img/unocell/finished_orders.png";
import forgotPassword from "../assets/img/unocell/forgot_password.png";
import inputOrderCode from "../assets/img/unocell/input_order_code.png";
import inventoryAlert from "../assets/img/unocell/inventory_alert.png";
import login from "../assets/img/unocell/login.png";
import logs from "../assets/img/unocell/logs.png";
import ordersInProcess from "../assets/img/unocell/orders_in_process.png";
import permissions from "../assets/img/unocell/permissions.png";
import unocellMainPage from "../assets/img/unocell/unocell_main_page.png";
import unocellWebpage from "../assets/img/unocell/unocell_webpage.png";
import usersPage from "../assets/img/unocell/users_page.png";

const images: any = {
   meetilogo,
   assignComissions,
   comissions,
   createInventory,
   createOrder,
   editAmount,
   editInventory,
   editUser,
   finishedOrders,
   forgotPassword,
   inputOrderCode,
   inventoryAlert,
   login,
   logs,
   ordersInProcess,
   permissions,
   unocellMainPage,
   unocellWebpage,
   usersPage,
};

function getImageByKey(key: string) {
   return key ? images[key] : "";
}

export default getImageByKey;
