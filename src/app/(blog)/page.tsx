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
              Hi, I&apos;am Flik. Front-End Developer who loves every creative
              things.<span className="text-[#15847d]">.</span>
            </h1>
            <span className="inline-block mt-1 text-gray-400 tracking-wider"></span>
            <h2 className="text-3xl font-normal md:text-4xl">
              This website is for my life & development
            </h2>
            <SocialList />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Admin;
