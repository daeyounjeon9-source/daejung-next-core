import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminLogin from "./pages/AdminLogin";
import SellerSignup from "./pages/SellerSignup";
import SellerLogin from "./pages/SellerLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminMembers from "./pages/AdminMembers";
import AdminOrders from "./pages/AdminOrders";
import AdminAI from "./pages/AdminAI";
import AdminLive from "./pages/AdminLive";
import AdminNotices from "./pages/AdminNotices";
import AdminDataCenter from "./pages/AdminDataCenter";
import AdminEnvironment from "./pages/AdminEnvironment";
import AdminDeployChecklist from "./pages/AdminDeployChecklist";
import AdminNotificationCenter from "./pages/AdminNotificationCenter";
import AdminReportCenter from "./pages/AdminReportCenter";
import AdminAIOpsCenter from "./pages/AdminAIOpsCenter";
import AdminCeoOffice from "./pages/AdminCeoOffice";

import AdminProductCreate from "./pages/AdminProductCreate";
import AdminMemberCreate from "./pages/AdminMemberCreate";
import AdminNoticeCreate from "./pages/AdminNoticeCreate";
import AdminLiveCreate from "./pages/AdminLiveCreate";

import Commerce from "./pages/Commerce";
import AIView from "./pages/AIView";
import Live from "./pages/Live";
import NeuralCore from "./pages/NeuralCore";
import Coin from "./pages/Coin";
import ControlTower from "./pages/ControlTower";
import RoomsOverview from "./pages/RoomsOverview";
import TrustCenter from "./pages/TrustCenter";
import CommerceCheck from "./pages/CommerceCheck";
import DecisionRoom from "./pages/DecisionRoom";
import PromotionHall from "./pages/PromotionHall";
import SellerCenter from "./pages/SellerCenter";
import Checkout from "./pages/Checkout";
import LiveScheduleAlerts from "./pages/LiveScheduleAlerts";
import PreOrderCenter from "./pages/PreOrderCenter";
import LiveQuickOrder from "./pages/LiveQuickOrder";
import NavigationCore from "./components/NavigationCore";
import NoticeBoard from "./pages/NoticeBoard";
import MyPage from "./pages/MyPage";

const protect = (page) => <ProtectedRoute requiredRole="admin">{page}</ProtectedRoute>;

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavigationCore />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/seller-signup" element={<SellerSignup />} />
          <Route path="/seller-login" element={<SellerLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/notice" element={<NoticeBoard />} />
          <Route path="/mypage" element={<ProtectedRoute requiredRole={null}><MyPage /></ProtectedRoute>} />

          <Route path="/admin-dashboard" element={protect(<AdminDashboard />)} />
          <Route path="/admin-ceo-office" element={protect(<AdminCeoOffice />)} />
          <Route path="/admin-ai-ops" element={protect(<AdminAIOpsCenter />)} />
          <Route path="/admin-report-center" element={protect(<AdminReportCenter />)} />
          <Route path="/admin-members" element={protect(<AdminMembers />)} />
          <Route path="/admin-orders" element={protect(<AdminOrders />)} />
          <Route path="/admin-ai" element={protect(<AdminAI />)} />
          <Route path="/admin-live" element={protect(<AdminLive />)} />
          <Route path="/admin-notices" element={protect(<AdminNotices />)} />
          <Route path="/admin-data-center" element={protect(<AdminDataCenter />)} />
          <Route path="/admin-environment" element={protect(<AdminEnvironment />)} />
          <Route path="/admin-deploy-checklist" element={protect(<AdminDeployChecklist />)} />
          <Route path="/admin-notification-center" element={protect(<AdminNotificationCenter />)} />

          <Route path="/admin-product-create" element={protect(<AdminProductCreate />)} />
          <Route path="/admin-member-create" element={protect(<AdminMemberCreate />)} />
          <Route path="/admin-notice-create" element={protect(<AdminNoticeCreate />)} />
          <Route path="/admin-live-create" element={protect(<AdminLiveCreate />)} />

          <Route path="/promotion" element={<PromotionHall />} />
          <Route path="/seller-center" element={<SellerCenter />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/live-schedule-alerts" element={<LiveScheduleAlerts />} />
          <Route path="/preorder-center" element={<PreOrderCenter />} />
          <Route path="/live-quick-order" element={<LiveQuickOrder />} />
          <Route path="/commerce" element={<Commerce />} />
          <Route path="/ai-view" element={<AIView />} />
          <Route path="/live" element={<Live />} />
          <Route path="/neural-core" element={<NeuralCore />} />
          <Route path="/coin" element={<Coin />} />
          <Route path="/control-tower" element={<ControlTower />} />
          <Route path="/rooms" element={<RoomsOverview />} />
          <Route path="/trust-center" element={<TrustCenter />} />
          <Route path="/commerce-check" element={<CommerceCheck />} />
          <Route path="/decision-room" element={<DecisionRoom />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
