import Twitter from "@/assets/twitter-alt.svg";
import GitHub from "@/assets/github-alt.svg";
import config from "@/lib/config";

import type { FC } from "react";

const SocialList: FC = () => {
  return (
    <div className="mt-8">
      <a
        title="Resume"
        href={`https://docs.google.com/document/d/1hz59MvXFUCBpfSUjDeUUg3JpUsdHNRNK9za1zWjZwlg/edit?usp=sharing`}
        target="_blank"
        rel="noopener"
        className="inline-block mr-8 hover:text-blue-500"
      >
        Resume
      </a>
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
        className="inline-block hover:text-blue-500"
      >
        GitHub
      </a>
    </div>
  );
};

export default SocialList;
