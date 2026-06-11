import SimpleListPage from "../components/SimpleListPage";
import { reviews } from "../data/reviews";

export default function ReviewManagement() {
  return (
    <SimpleListPage
      title="리뷰/평점 관리"
      subtitle="상품 리뷰, 방송 평가, 고객 피드백 관리"
      items={reviews}
    />
  );
}
