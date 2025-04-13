import { BrowserRouter, Routes, Route } from "react-router-dom";

// 일반 사용자 페이지
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import FortuneSelect from "./pages/FortuneSelect";
import Result from "./pages/Result";
import MyPage from "./pages/MyPage";
import MyFortuneDetail from "./pages/MyFortuneDetail";
import SajuDetail from "./pages/SajuDetail";

// 관리자 페이지
import AdminDashboard from "./pages/admin/AdminDashboard";
import CounselorList from "./pages/admin/CounselorList";
import CounselorCreate from "./pages/admin/CounselorCreate";
import FortuneProductList from "./pages/admin/FortuneProductList";
import FortuneProductCreate from "./pages/admin/FortuneProductCreate";
import FortuneProductEdit from "./pages/admin/FortuneProductEdit";
import ConsultHistoryList from "./pages/admin/ConsultHistoryList";
import ConsultHistoryDetail from "./pages/admin/ConsultHistoryDetail";

// 기타
import PaymentPage from "./pages/PaymentPage";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFail from "./pages/PaymentFail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 사용자 */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/select" element={<FortuneSelect />} />
        <Route path="/result/:type" element={<Result />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/detail/:id" element={<MyFortuneDetail />} />
        <Route path="/saju/:id" element={<SajuDetail />} />

        {/* 관리자 */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/counselors" element={<CounselorList />} />
        <Route path="/admin/counselors/new" element={<CounselorCreate />} />
        <Route path="/admin/products" element={<FortuneProductList />} />
        <Route path="/admin/products/new" element={<FortuneProductCreate />} />
        <Route path="/admin/products/:id" element={<FortuneProductEdit />} />
        <Route path="/admin/history" element={<ConsultHistoryList />} />
        <Route path="/admin/history/:id" element={<ConsultHistoryDetail />} />

        {/* 결제 */}
        <Route path="/payment/:type" element={<PaymentPage />} />
        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/payment/fail" element={<PaymentFail />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
