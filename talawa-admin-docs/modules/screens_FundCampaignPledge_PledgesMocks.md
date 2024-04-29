[talawa-admin](../README.md) / [Modules](../modules.md) / screens/FundCampaignPledge/PledgesMocks

# Module: screens/FundCampaignPledge/PledgesMocks

## Table of contents

### Variables

- [EMPTY\_MOCKS](screens_FundCampaignPledge_PledgesMocks.md#empty_mocks)
- [MOCKS](screens_FundCampaignPledge_PledgesMocks.md#mocks)
- [MOCKS\_CREATE\_PLEDGE\_ERROR](screens_FundCampaignPledge_PledgesMocks.md#mocks_create_pledge_error)
- [MOCKS\_DELETE\_PLEDGE\_ERROR](screens_FundCampaignPledge_PledgesMocks.md#mocks_delete_pledge_error)
- [MOCKS\_FUND\_CAMPAIGN\_PLEDGE\_ERROR](screens_FundCampaignPledge_PledgesMocks.md#mocks_fund_campaign_pledge_error)
- [MOCKS\_UPDATE\_PLEDGE\_ERROR](screens_FundCampaignPledge_PledgesMocks.md#mocks_update_pledge_error)

## Variables

### EMPTY\_MOCKS

• `Const` **EMPTY\_MOCKS**: \{ `request`: \{ `query`: `DocumentNode` = FUND\_CAMPAIGN\_PLEDGE; `variables`: \{ `id`: `undefined` = undefined \}  \} ; `result`: \{ `data`: \{ `getFundraisingCampaignById`: \{ `endDate`: `string` = '2024-01-01'; `pledges`: `never`[] = []; `startDate`: `string` = '2024-01-01' \}  \}  \}  \}[]

#### Defined in

[src/screens/FundCampaignPledge/PledgesMocks.ts:294](https://github.com/git-init-priyanshu/talawa-admin-clone/blob/d03f5ca/src/screens/FundCampaignPledge/PledgesMocks.ts#L294)

___

### MOCKS

• `Const` **MOCKS**: (\{ `request`: \{ `query`: `DocumentNode` = FUND\_CAMPAIGN\_PLEDGE; `variables`: \{ `amount?`: `undefined` = 100100; `campaignId?`: `undefined` = undefined; `currency?`: `undefined` = 'INR'; `endDate?`: `undefined` = '2023-02-01'; `id`: `undefined` = undefined; `startDate?`: `undefined` = '2023-01-01'; `userIds?`: `undefined`  \}  \} ; `result`: \{ `data`: \{ `createFundraisingCampaignPledge?`: `undefined` ; `getFundraisingCampaignById`: \{ `endDate`: `string` = '2024-01-01'; `pledges`: \{ `_id`: `string` = '1'; `amount`: `number` = 100; `currency`: `string` = 'USD'; `endDate`: `string` = '2024-01-01'; `startDate`: `string` = '2024-01-01'; `users`: \{ `_id`: `string` = '1'; `firstName`: `string` = 'John' \}[]  \}[] ; `startDate`: `string` = '2024-01-01' \} ; `removeFundraisingCampaignPledge?`: `undefined` ; `updateFundraisingCampaignPledge?`: `undefined`  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = CREATE\_PlEDGE; `variables`: \{ `amount`: `number` = 100; `campaignId`: `undefined` = undefined; `currency`: `string` = 'USD'; `endDate`: `string` = '2024-03-10'; `id?`: `undefined` = '123'; `startDate`: `string` = '2024-03-10'; `userIds`: ``null``[]  \}  \} ; `result`: \{ `data`: \{ `createFundraisingCampaignPledge`: \{ `_id`: `string` = '3' \} ; `getFundraisingCampaignById?`: `undefined` ; `removeFundraisingCampaignPledge?`: `undefined` ; `updateFundraisingCampaignPledge?`: `undefined`  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = UPDATE\_PLEDGE; `variables`: \{ `amount`: `number` = 100100; `campaignId?`: `undefined` = undefined; `currency`: `string` = 'INR'; `endDate`: `string` = '2024-03-10'; `id`: `string` = '1'; `startDate`: `string` = '2024-03-10'; `userIds?`: `undefined`  \}  \} ; `result`: \{ `data`: \{ `createFundraisingCampaignPledge?`: `undefined` ; `getFundraisingCampaignById?`: `undefined` ; `removeFundraisingCampaignPledge?`: `undefined` ; `updateFundraisingCampaignPledge`: \{ `_id`: `string` = '1' \}  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = DELETE\_PLEDGE; `variables`: \{ `amount?`: `undefined` = 100100; `campaignId?`: `undefined` = undefined; `currency?`: `undefined` = 'INR'; `endDate?`: `undefined` = '2023-02-01'; `id`: `string` = '1'; `startDate?`: `undefined` = '2023-01-01'; `userIds?`: `undefined`  \}  \} ; `result`: \{ `data`: \{ `createFundraisingCampaignPledge?`: `undefined` ; `getFundraisingCampaignById?`: `undefined` ; `removeFundraisingCampaignPledge`: \{ `_id`: `string` = '1' \} ; `updateFundraisingCampaignPledge?`: `undefined`  \}  \}  \})[]

#### Defined in

[src/screens/FundCampaignPledge/PledgesMocks.ts:8](https://github.com/git-init-priyanshu/talawa-admin-clone/blob/d03f5ca/src/screens/FundCampaignPledge/PledgesMocks.ts#L8)

___

### MOCKS\_CREATE\_PLEDGE\_ERROR

• `Const` **MOCKS\_CREATE\_PLEDGE\_ERROR**: (\{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = FUND\_CAMPAIGN\_PLEDGE; `variables`: \{ `amount?`: `undefined` = 100100; `campaignId?`: `undefined` = undefined; `currency?`: `undefined` = 'INR'; `endDate?`: `undefined` = '2023-02-01'; `id`: `undefined` = undefined; `startDate?`: `undefined` = '2023-01-01'; `userIds?`: `undefined`  \}  \} ; `result`: \{ `data`: \{ `getFundraisingCampaignById`: \{ `endDate`: `string` = '2024-01-01'; `pledges`: \{ `_id`: `string` = '1'; `amount`: `number` = 100; `currency`: `string` = 'USD'; `endDate`: `string` = '2024-01-01'; `startDate`: `string` = '2024-01-01'; `users`: \{ `_id`: `string` = '1'; `firstName`: `string` = 'John' \}[]  \}[] ; `startDate`: `string` = '2024-01-01' \}  \}  \}  \} \| \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = CREATE\_PlEDGE; `variables`: \{ `amount`: `number` = 100; `campaignId`: `undefined` = undefined; `currency`: `string` = 'USD'; `endDate`: `string` = '2024-03-10'; `id?`: `undefined` = '123'; `startDate`: `string` = '2024-03-10'; `userIds`: ``null`` = null \}  \} ; `result?`: `undefined`  \})[]

#### Defined in

[src/screens/FundCampaignPledge/PledgesMocks.ts:120](https://github.com/git-init-priyanshu/talawa-admin-clone/blob/d03f5ca/src/screens/FundCampaignPledge/PledgesMocks.ts#L120)

___

### MOCKS\_DELETE\_PLEDGE\_ERROR

• `Const` **MOCKS\_DELETE\_PLEDGE\_ERROR**: (\{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = FUND\_CAMPAIGN\_PLEDGE; `variables`: \{ `id`: `undefined` = undefined \}  \} ; `result`: \{ `data`: \{ `getFundraisingCampaignById`: \{ `endDate`: `string` = '2024-01-01'; `pledges`: \{ `_id`: `string` = '1'; `amount`: `number` = 100; `currency`: `string` = 'USD'; `endDate`: `string` = '2024-01-01'; `startDate`: `string` = '2024-01-01'; `users`: \{ `_id`: `string` = '1'; `firstName`: `string` = 'John' \}[]  \}[] ; `startDate`: `string` = '2024-01-01' \}  \}  \}  \} \| \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = DELETE\_PLEDGE; `variables`: \{ `id`: `string` = '1' \}  \} ; `result?`: `undefined`  \})[]

#### Defined in

[src/screens/FundCampaignPledge/PledgesMocks.ts:239](https://github.com/git-init-priyanshu/talawa-admin-clone/blob/d03f5ca/src/screens/FundCampaignPledge/PledgesMocks.ts#L239)

___

### MOCKS\_FUND\_CAMPAIGN\_PLEDGE\_ERROR

• `Const` **MOCKS\_FUND\_CAMPAIGN\_PLEDGE\_ERROR**: \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = FUND\_CAMPAIGN\_PLEDGE; `variables`: \{ `id`: `undefined` = undefined \}  \}  \}[]

#### Defined in

[src/screens/FundCampaignPledge/PledgesMocks.ts:108](https://github.com/git-init-priyanshu/talawa-admin-clone/blob/d03f5ca/src/screens/FundCampaignPledge/PledgesMocks.ts#L108)

___

### MOCKS\_UPDATE\_PLEDGE\_ERROR

• `Const` **MOCKS\_UPDATE\_PLEDGE\_ERROR**: (\{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = FUND\_CAMPAIGN\_PLEDGE; `variables`: \{ `amount?`: `undefined` = 100100; `currency?`: `undefined` = 'INR'; `endDate?`: `undefined` = '2023-02-01'; `id`: `undefined` = undefined; `startDate?`: `undefined` = '2023-01-01' \}  \} ; `result`: \{ `data`: \{ `getFundraisingCampaignById`: \{ `endDate`: `string` = '2024-01-01'; `pledges`: \{ `_id`: `string` = '1'; `amount`: `number` = 100; `currency`: `string` = 'USD'; `endDate`: `string` = '2024-01-01'; `startDate`: `string` = '2024-01-01'; `users`: \{ `_id`: `string` = '1'; `firstName`: `string` = 'John' \}[]  \}[] ; `startDate`: `string` = '2024-01-01' \}  \}  \}  \} \| \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = UPDATE\_PLEDGE; `variables`: \{ `amount`: `number` = 200; `currency`: `string` = 'USD'; `endDate`: `string` = '2024-03-10'; `id`: `string` = '1'; `startDate`: `string` = '2024-03-10' \}  \} ; `result?`: `undefined`  \})[]

#### Defined in

[src/screens/FundCampaignPledge/PledgesMocks.ts:180](https://github.com/git-init-priyanshu/talawa-admin-clone/blob/d03f5ca/src/screens/FundCampaignPledge/PledgesMocks.ts#L180)
