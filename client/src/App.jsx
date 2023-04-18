import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import ForgetPassword from "./page/Auth/ForgetPassword";
import HomePage from "./page/Home/HomePage";
import Modal from "react-modal";
import LayoutDashBoard from "./layout/LayoutDashBoard";
import CampaignView from "./modules/dashboard/campaign/CampaignView";
const SignUpPage = lazy(() => import("./page/Auth/SignUpPage"));
const PaymentPage = lazy(() => import("./page/PaymentPage"));
const CampaignPage = lazy(() => import("./page/CampaignPage"));
const WithdrawPage = lazy(() => import("./page/WithdrawPage"));
const ProfilePage = lazy(() => import("./page/ProfilePage"));
const StartCampaign = lazy(() => import("./page/StartCampaign"));

const SingIn = lazy(() => import("./page/Auth/SingIn"));
Modal.setAppElement("#root");
function App() {
  return (
    <>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<LayoutDashBoard></LayoutDashBoard>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route
              path="/Campaign"
              element={<CampaignPage></CampaignPage>}
            ></Route>
            <Route
              path="/Start-Campaign"
              element={<StartCampaign></StartCampaign>}
            ></Route>
            <Route
              path="/Payment"
              element={<PaymentPage></PaymentPage>}
            ></Route>
            <Route
              path="/Withdraw"
              element={<WithdrawPage></WithdrawPage>}
            ></Route>
            <Route
              path="/Profile"
              element={<ProfilePage></ProfilePage>}
            ></Route>
            <Route
              path="Campaign/:slug"
              element={<CampaignView></CampaignView>}
            ></Route>
          </Route>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
          <Route path="/sign-in" element={<SingIn></SingIn>}></Route>
          <Route
            path="/forgotPassword"
            element={<ForgetPassword></ForgetPassword>}
          ></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
