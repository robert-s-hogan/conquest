import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listCampaigns } from "../../src/graphql/queries";

function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);

  async function fetchCampaigns() {
    try {
      const campaignData = await API.graphql({ query: listCampaigns });
      return campaignData.data.listCampaigns.items;
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    }
  }

  useEffect(() => {
    async function getCampaigns() {
      const campaigns = await fetchCampaigns();
      setCampaigns(campaigns);
    }

    getCampaigns();
  }, []);

  return (
    <div>
      <h1>Campaigns</h1>
      <div>
        {campaigns &&
          campaigns.map((campaign) => (
            <div key={campaign.id} className='p-4'>
              <h2 className='text-xl font-bold'>{campaign.title}</h2>
              <p>{campaign.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Campaigns;
