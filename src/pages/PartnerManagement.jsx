import SimpleListPage from "../components/SimpleListPage";
import { partners } from "../data/partners";

export default function PartnerManagement() {
  return (
    <SimpleListPage
      title="입점사/제휴사 관리"
      subtitle="입점사, 제휴사, 물류사, 운영 협력사 관리"
      items={partners}
    />
  );
}
