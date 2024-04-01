import Layout from "@/components/Layout";
import SocialList from "@/components/SocialList";
import BasicMeta from "@/components/meta/BasicMeta";
import OpenGraphMeta from "@/components/meta/OpenGraphMeta";
import TwitterCardMeta from "@/components/meta/TwitterCardMeta";

import type { FC } from "react";

const Admin: FC = () => {
  return (
    <>
      <Layout>
        <BasicMeta url={"/"} />
        <OpenGraphMeta url={"/"} />
        <TwitterCardMeta url={"/"} />
        <div className="flex flex-auto items-center justify-center py-0 px-6">
          <div>
            <h1 className="text-4xl m-0 font-medium md:text-5xl">
              <span className="text-[#15847d]">Flik</span>
            </h1>
            <span className="inline-block mt-1 text-gray-400 tracking-wider">
              Front-End Developer
            </span>
            <div className="text-4xl font-normal md:text-2xl">
              뭔가 만들고 생각하고 실험하는 것을 좋아합니다
            </div>
            <SocialList />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Admin;
