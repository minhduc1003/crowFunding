import React from 'react';
import LayoutDashBoard from '../layout/LayoutDashBoard';
import CampaignAddNew from '../modules/dashboard/campaign/CampaignAddNew';

const StartCampaign = () => {
    return (
        <>
            <LayoutDashBoard>
                <CampaignAddNew></CampaignAddNew>
            </LayoutDashBoard>
        </>
    );
};

export default StartCampaign;