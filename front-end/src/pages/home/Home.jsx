import Layout from "../../components/Layout";
import LoveConsult from "./LoveConsult";
import SajuSlider from "./SajuSilder";
import TopFortunes from "./TopFortunes";

export default function Home() {
  return (
    <Layout>
      <SajuSlider />
      <TopFortunes />
      <LoveConsult />
    </Layout>
  );
}
