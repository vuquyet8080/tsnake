"use client";
import CarouselList from "@/components/CarouselList";
import { Popover, Button } from "flowbite-react";
import Image from "next/image";

import React from "react";

export default function index() {
  return (
    <div className="py-8">
      <div className="flex flex-row items-center justify-between gap-x-8">
        <div className="text-2xl font-semibold">
          {mockDataQuest.title || ""}
        </div>

        <Button color={"dark"} className="min-w-fit">
          <div className="relative w-5 h-5">
            <Image
              src={"/images/copy-link.svg"}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="ml-2 font-semibold">Copy link</div>
        </Button>
      </div>
      <div className="flex flex-col pt-6 gap-y-4">
        {mockDataQuest?.tasks?.map((quest) => {
          return (
            <button
              type="button"
              key={quest.id}
              className="flex flex-row items-center px-4 py-2 border border-gray-300 rounded-md shadow-md active:bg-gray-50 gap-x-2 hover:cursor-pointer"
            >
              <div className="relative w-6 h-6">
                <Image
                  src={`/images/${quest.type}.svg`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="font-semibold">Follow @_MetaEarth_ on X</div>
            </button>
          );
        })}
      </div>
      <div className="pt-12">
        <div className="text-2xl font-semibold">Description</div>
        <div className="pt-3 text-base">{mockDataQuest.description || ""}</div>
      </div>
      <div className="pt-10">
        <CarouselList />
      </div>
    </div>
  );
}

const mockDataQuest = {
  avatar:
    "https://s3.ap-northeast-1.amazonaws.com/quest3.xyz/community/894066191681466636.png",
  title: "Blow up with $BUBBLE coin from @ImaginaryOnes!",
  status: "Draft",
  createAt: "4/16/2024 - 12:12",
  description: `Disclaimer : Previously we wanted to provide an explanation of why we use BSC on QuestN, because QuestN is not available for SEI Network, therefore we use BSC on QuestN

Introduction :
     PepeBorn is more than just a NFT and Token project, we offer many benefits and advantages in this project, our NFTs and Tokens are fully functional and have many usecases that we can offer, such as Whitelist, Airdrop, Staking and Earning PBT and SEI Tokens, Voting (DAO), Lottery Draw and etc.

     You can also participate in the Last Mint Contest at the time of minting begins and have the opportunity to get a reward pool that starts with 50 SEI and will continue to increase by 10% (0.3 SEI) from each NFT public minted (890 SEI total, or 0.3 SEI x 2800 NFT (Public Mint) = 840 SEI + 50 SEI From Dev = Total 890 SEI), We also have 1/1 and 1/1+Legendary NFTs with a floor value of 20 SEI (1/1) and 30 SEI (1/1+legendary) that you can get randomly and many more usecases that we will provide to our users.

     With a mint price that is quite cheap at around 1 SEI for WL and 3 SEI for Public Mint, you can already have the PepeBorn NFT Collection, it is worth it with the many usecases we offer, and we guarantee the floor price of our NFT in the market, if anyone sells NFT below the floor price then we will buyback and burn the NFT, so the supply of NFT will decrease, and of course the price will increase. 5% of the 10% (50%) of transaction fees in the market will be used to maintain the price of PepeBorn NFTs (Buyback and Burn), we believe this system in addition to other usecases such as staking, lottery draw, DAO, WL and others will put buying pressure on Pepeborn NFTs. Many projects on other chains use this method to keep the price of their NFTs in check and it works, We had that experience.

Whitelist (WL) :
To get WL, please complete the task on QuesN, and paste your address on our Twitter or on our Discord

GiveAways :
To get giveaways from us, please complete the task on QuestN, and we will draw the winner, don't forget to follow, like, RT and comment HERE and HERE
We will give away 50 free NFTs to 50 random winners. NFTs will be tradeable on the Dagora NFT Marketplace, Pallet.exchange and others.

Airdrop :
We will provide 5% supply (50M PBT) of our tokens to NFT holders, as soon as we launch our tokens on the market. To get our airdrop you need to have an NFT of ours in your wallet, and we will take a snapshot for that, each of your NFTs in the wallet will have a portion, so there is no need to worry if you have more than 1 NFT in your wallet, because we give airdrop tokens for each NFT or per NFT, not per wallet.
Please visit our partner website on Dagora NFT marketplace to get our NFT - LINK HERE`,
  tasks: [
    {
      type: "twitter",
      title: "Join twitter server",
      id: "1713274503538",
    },
    {
      type: "facebook",
      title: "Join facebook server",
      id: "1713274503338",
    },
    {
      type: "telegram",
      title: "Join telegram",
      id: "1711274503538",
    },
  ],
};
