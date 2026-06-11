import SimpleListPage from "../components/SimpleListPage";
import { campaigns } from "../data/campaigns";

export default function MarketingCampaign() {
  return (
    <SimpleListPage
      title="마케팅 캠페인"
      subtitle="홍보, 런칭, 고객 유입 캠페인 관리"
      items={campaigns}
    />
  );
}
