/* eslint-disable @next/next/no-img-element */
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
        <div className="flex flex-col justify-center align-center">
          <div className="flex flex-row justify-center align-center">
            <img
              src="/images/flik.jpeg"
              alt="profile"
              className="w-28 h-28 rounded-full flex-row mx-8"
            />
            <div className="flex flex-col">
              <h1 className="text-4xl m-0 font-medium md:text-5xl">
                <span className="text-[#15847d]">Flik</span>
              </h1>
              <span className="inline-block mt-1 text-gray-400 tracking-wider">
                Front-End Developer
              </span>
              <div className="text-xl font-normal md:text-2xl">
                생각하고 실험하고 뭔가 만드는걸 좋아합니다
              </div>
              <SocialList />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Admin;
