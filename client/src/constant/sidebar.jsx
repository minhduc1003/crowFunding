import IconCampaign from "../icons/IconCampaign";
import IconDashBoard from "../icons/IconDashBoard";
import IconLightDark from "../icons/IconLightDark";
import IconLogout from "../icons/IconLogout";
import IconPayment from "../icons/IconPayment";
import IconProfile from "../icons/IconProfile";
import IconWithdraw from "../icons/IconWithdraw";

export const sideBar = [
    {
      name: "Dashboard",
      icon:<IconDashBoard></IconDashBoard>,
      url:"/",
    },
    {
      name: "Campaign",
      icon:<IconCampaign></IconCampaign>,
      url:"/Campaign"
    },
    {
      name: "Payment",
      icon:<IconPayment></IconPayment>,
      url:"/Payment"
    },
    {
      name: "Withdraw",
      icon:<IconWithdraw></IconWithdraw>,
      url:"/Withdraw"
    },
    {
      name: "Profile",
      icon:<IconProfile></IconProfile>,
      url:"/Profile"
    },
    {
      name: "Logout",
      icon:<IconLogout></IconLogout>,
      url:"#",
      onclick:()=>{}
      
    },
    {
      name: "Light/Dark",
      icon:<IconLightDark></IconLightDark>,
      onclick:()=>{},
      url:"#"
      
    },
  ];