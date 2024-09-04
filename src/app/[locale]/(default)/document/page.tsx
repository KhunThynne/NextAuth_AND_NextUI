import TabContainer from "@/components/Tabs/tab-container";
import { Introduce } from "./tabs/introduce";

export default function DocumentPage() {


  return (
    <>



      <TabContainer


        tabContainer={[
          { component: <Introduce />, title: "Introduce" },
          { component: <div>TEst</div>, title: "Contact" }]} />


    </>

  );
}
