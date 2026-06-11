import Layout from "../components/Layout";
import BigGrid from "../components/BigGrid";
import PageCard from "../components/PageCard";
import { liveRooms } from "../data/liveRooms";

export default function LiveManager() {
  return (
    <Layout>
      <main style={{ padding:"44px", color:"white" }}>
        <h1>라이브 방송 관리</h1>

        <BigGrid>
          {liveRooms.map(room => (
            <PageCard key={room.id} title={room.title}>
              <p>진행자: {room.host}</p>
              <p>시청자: {room.viewers.toLocaleString()}</p>
              <p>상태: {room.status}</p>
            </PageCard>
          ))}
        </BigGrid>
      </main>
    </Layout>
  );
}
