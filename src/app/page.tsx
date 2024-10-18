import { Wrapper } from "@/components/Wrapper";
import { Card } from "@/components/Card";

export default async function Home() {
  return (
    <Wrapper className="gap-28">
      <Card />
      <Card />
      <Card />
    </Wrapper>
  );
}
