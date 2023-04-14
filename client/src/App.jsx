import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router"
import ForgetPassword from "./page/Auth/ForgetPassword"
import HomePage from "./page/Home/HomePage"
const SignUpPage = lazy(()=>import("./page/Auth/SignUpPage"))
const SingIn =lazy(()=>import("./page/Auth/SingIn"))
function App() {

  return (
  <>
   <Suspense fallback={<div>loading...</div>}>
   <Routes>
   <Route path="/" element={<HomePage></HomePage>}></Route>
    <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
      <Route path="/sign-in" element={<SingIn></SingIn>}></Route>
      <Route path="/forgotPassword" element={<ForgetPassword></ForgetPassword>}></Route>
    </Routes>
   </Suspense>
  </>
  )
}

export default App
