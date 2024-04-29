[talawa-admin](../README.md) / [Modules](../modules.md) / screens/OrganizationFunds/OrganizationFundsMocks

# Module: screens/OrganizationFunds/OrganizationFundsMocks

## Table of contents

### Variables

- [MOCKS](screens_OrganizationFunds_OrganizationFundsMocks.md#mocks)
- [MOCKS\_ERROR\_CREATE\_FUND](screens_OrganizationFunds_OrganizationFundsMocks.md#mocks_error_create_fund)
- [MOCKS\_ERROR\_ORGANIZATIONS\_FUNDS](screens_OrganizationFunds_OrganizationFundsMocks.md#mocks_error_organizations_funds)
- [MOCKS\_ERROR\_REMOVE\_FUND](screens_OrganizationFunds_OrganizationFundsMocks.md#mocks_error_remove_fund)
- [MOCKS\_ERROR\_UPDATE\_FUND](screens_OrganizationFunds_OrganizationFundsMocks.md#mocks_error_update_fund)
- [NO\_FUNDS](screens_OrganizationFunds_OrganizationFundsMocks.md#no_funds)

## Variables

### MOCKS

• `Const` **MOCKS**: (\{ `request`: \{ `query`: `DocumentNode` = FUND\_LIST; `variables`: \{ `id`: `undefined` = undefined; `isArchived?`: `undefined` = true; `isDefault?`: `undefined` = true; `name?`: `undefined` = 'Ad1'; `organizationId?`: `undefined` = '123'; `refrenceNumber?`: `undefined` = '1'; `taxDeductible?`: `undefined` = false \}  \} ; `result`: \{ `data`: \{ `createFund?`: `undefined` ; `fundsByOrganization`: \{ `_id`: `string` = '1'; `createdAt`: `string` = '2021-07-01T00:00:00.000Z'; `creator`: \{ `_id`: `string` = 'creatorId1'; `firstName`: `string` = 'John'; `lastName`: `string` = 'Doe' \} ; `isArchived`: `boolean` = false; `isDefault`: `boolean` = false; `name`: `string` = 'Fund 1'; `organizationId`: `string` = 'organizationId1'; `refrenceNumber`: `string` = '123'; `taxDeductible`: `boolean` = true \}[] ; `removeFund?`: `undefined` ; `updateFund?`: `undefined`  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = CREATE\_FUND\_MUTATION; `variables`: \{ `id?`: `undefined` = '123'; `isArchived`: `boolean` = false; `isDefault`: `boolean` = false; `name`: `string` = 'Test Fund'; `organizationId`: `undefined` = undefined; `refrenceNumber`: `string` = '1'; `taxDeductible`: `boolean` = true \}  \} ; `result`: \{ `data`: \{ `createFund`: \{ `_id`: `string` = '3' \} ; `fundsByOrganization?`: `undefined` ; `removeFund?`: `undefined` ; `updateFund?`: `undefined`  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = UPDATE\_FUND\_MUTATION; `variables`: \{ `id`: `string` = '1'; `isArchived`: `boolean` = true; `isDefault`: `boolean` = true; `name`: `string` = 'Test Fund'; `organizationId?`: `undefined` = '123'; `refrenceNumber`: `string` = '1'; `taxDeductible`: `boolean` = false \}  \} ; `result`: \{ `data`: \{ `createFund?`: `undefined` ; `fundsByOrganization?`: `undefined` ; `removeFund?`: `undefined` ; `updateFund`: \{ `_id`: `string` = '1' \}  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = REMOVE\_FUND\_MUTATION; `variables`: \{ `id`: `string` = '1'; `isArchived?`: `undefined` = true; `isDefault?`: `undefined` = true; `name?`: `undefined` = 'Ad1'; `organizationId?`: `undefined` = '123'; `refrenceNumber?`: `undefined` = '1'; `taxDeductible?`: `undefined` = false \}  \} ; `result`: \{ `data`: \{ `createFund?`: `undefined` ; `fundsByOrganization?`: `undefined` ; `removeFund`: \{ `_id`: `string` = '1' \} ; `updateFund?`: `undefined`  \}  \}  \})[]

#### Defined in

[src/screens/OrganizationFunds/OrganizationFundsMocks.ts:8](https://github.com/git-init-priyanshu/talawa-admin-clone/blob/d03f5ca/src/screens/OrganizationFunds/OrganizationFundsMocks.ts#L8)

___

### MOCKS\_ERROR\_CREATE\_FUND

• `Const` **MOCKS\_ERROR\_CREATE\_FUND**: (\{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = FUND\_LIST; `variables`: \{ `id`: `undefined` = undefined; `isArchived?`: `undefined` = true; `isDefault?`: `undefined` = true; `name?`: `undefined` = 'Ad1'; `organizationId?`: `undefined` = '123'; `refrenceNumber?`: `undefined` = '1'; `taxDeductible?`: `undefined` = false \}  \} ; `result`: \{ `data`: \{ `fundsByOrganization`: \{ `_id`: `string` = '1'; `createdAt`: `string` = '2021-07-01T00:00:00.000Z'; `creator`: \{ `_id`: `string` = 'creatorId1'; `firstName`: `string` = 'John'; `lastName`: `string` = 'Doe' \} ; `isArchived`: `boolean` = false; `isDefault`: `boolean` = false; `name`: `string` = 'Fund 1'; `organizationId`: `string` = 'organizationId1'; `refrenceNumber`: `string` = '123'; `taxDeductible`: `boolean` = true \}[]  \}  \}  \} \| \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = CREATE\_FUND\_MUTATION; `variables`: \{ `id?`: `undefined` = '123'; `isArchived`: `boolean` = false; `isDefault`: `boolean` = false; `name`: `string` = 'Fund 3'; `organizationId`: `undefined` = undefined; `refrenceNumber`: `string` = '789'; `taxDeductible`: `boolean` = true \}  \} ; `result?`: `undefined`  \})[]

#### Defined in

[src/screens/OrganizationFunds/OrganizationFundsMocks.ts:135](https://github.com/git-init-priyanshu/talawa-admin-clone/blob/d03f5ca/src/screens/OrganizationFunds/OrganizationFundsMocks.ts#L135)

___

### MOCKS\_ERROR\_ORGANIZATIONS\_FUNDS

• `Const` **MOCKS\_ERROR\_ORGANIZATIONS\_FUNDS**: \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = FUND\_LIST; `variables`: \{ `organizationId`: `string` = '1' \}  \}  \}[]

#### Defined in

[src/screens/OrganizationFunds/OrganizationFundsMocks.ts:124](https://github.com/git-init-priyanshu/talawa-admin-clone/blob/d03f5ca/src/screens/OrganizationFunds/OrganizationFundsMocks.ts#L124)

___

### MOCKS\_ERROR\_REMOVE\_FUND

• `Const` **MOCKS\_ERROR\_REMOVE\_FUND**: (\{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = FUND\_LIST; `variables`: \{ `id`: `undefined` = undefined; `isArchived?`: `undefined` = true; `isDefault?`: `undefined` = true; `name?`: `undefined` = 'Ad1'; `organizationId?`: `undefined` = '123'; `refrenceNumber?`: `undefined` = '1'; `taxDeductible?`: `undefined` = false \}  \} ; `result`: \{ `data`: \{ `createFund?`: `undefined` ; `fundsByOrganization`: \{ `_id`: `string` = '3'; `createdAt`: `string` = '2021-07-01T00:00:00.000Z'; `creator`: \{ `_id`: `string` = 'creatorId1'; `firstName`: `string` = 'John'; `lastName`: `string` = 'Doe' \} ; `isArchived`: `boolean` = false; `isDefault`: `boolean` = false; `name`: `string` = 'Fund 1'; `organizationId`: `string` = 'organizationId1'; `refrenceNumber`: `string` = '123'; `taxDeductible`: `boolean` = true \}[] ; `updateFund?`: `undefined`  \}  \}  \} \| \{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = CREATE\_FUND\_MUTATION; `variables`: \{ `id?`: `undefined` = '123'; `isArchived`: `boolean` = false; `isDefault`: `boolean` = false; `name`: `string` = 'Fund 3'; `organizationId`: `undefined` = undefined; `refrenceNumber`: `string` = '789'; `taxDeductible`: `boolean` = true \}  \} ; `result`: \{ `data`: \{ `createFund`: \{ `_id`: `string` = '3' \} ; `fundsByOrganization?`: `undefined` ; `updateFund?`: `undefined`  \}  \}  \} \| \{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = UPDATE\_FUND\_MUTATION; `variables`: \{ `id`: `undefined` = undefined; `isArchived`: `boolean` = false; `isDefault`: `boolean` = false; `name`: `string` = 'Fund 1'; `organizationId?`: `undefined` = '123'; `refrenceNumber?`: `undefined` = '1'; `taxDeductible`: `boolean` = true \}  \} ; `result`: \{ `data`: \{ `createFund?`: `undefined` ; `fundsByOrganization?`: `undefined` ; `updateFund`: \{ `_id`: `string` = '1' \}  \}  \}  \} \| \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = REMOVE\_FUND\_MUTATION; `variables`: \{ `id`: `undefined` = undefined; `isArchived?`: `undefined` = true; `isDefault?`: `undefined` = true; `name?`: `undefined` = 'Ad1'; `organizationId?`: `undefined` = '123'; `refrenceNumber?`: `undefined` = '1'; `taxDeductible?`: `undefined` = false \}  \} ; `result?`: `undefined`  \})[]

#### Defined in

[src/screens/OrganizationFunds/OrganizationFundsMocks.ts:275](https://github.com/git-init-priyanshu/talawa-admin-clone/blob/d03f5ca/src/screens/OrganizationFunds/OrganizationFundsMocks.ts#L275)

___

### MOCKS\_ERROR\_UPDATE\_FUND

• `Const` **MOCKS\_ERROR\_UPDATE\_FUND**: (\{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = FUND\_LIST; `variables`: \{ `id`: `undefined` = undefined; `isArchived?`: `undefined` = true; `isDefault?`: `undefined` = true; `name?`: `undefined` = 'Ad1'; `organizationId?`: `undefined` = '123'; `refrenceNumber?`: `undefined` = '1'; `taxDeductible?`: `undefined` = false \}  \} ; `result`: \{ `data`: \{ `createFund?`: `undefined` ; `fundsByOrganization`: \{ `_id`: `string` = '1'; `createdAt`: `string` = '2021-07-01T00:00:00.000Z'; `creator`: \{ `_id`: `string` = 'creatorId1'; `firstName`: `string` = 'John'; `lastName`: `string` = 'Doe' \} ; `isArchived`: `boolean` = false; `isDefault`: `boolean` = false; `name`: `string` = 'Fund 1'; `organizationId`: `string` = 'organizationId1'; `refrenceNumber`: `string` = '123'; `taxDeductible`: `boolean` = true \}[]  \}  \}  \} \| \{ `error?`: `undefined` ; `request`: \{ `query`: `DocumentNode` = CREATE\_FUND\_MUTATION; `variables`: \{ `id?`: `undefined` = '123'; `isArchived`: `boolean` = false; `isDefault`: `boolean` = false; `name`: `string` = 'Fund 3'; `organizationId`: `undefined` = undefined; `refrenceNumber`: `string` = '789'; `taxDeductible`: `boolean` = true \}  \} ; `result`: \{ `data`: \{ `createFund`: \{ `_id`: `string` = '3' \} ; `fundsByOrganization?`: `undefined`  \}  \}  \} \| \{ `error`: `Error` ; `request`: \{ `query`: `DocumentNode` = UPDATE\_FUND\_MUTATION; `variables`: \{ `id`: `undefined` = undefined; `isArchived`: `boolean` = false; `isDefault`: `boolean` = false; `name`: `string` = 'Fund 1'; `organizationId?`: `undefined` = '123'; `refrenceNumber`: `string` = '789'; `taxDeductible`: `boolean` = true \}  \} ; `result?`: `undefined`  \})[]

#### Defined in

[src/screens/OrganizationFunds/OrganizationFundsMocks.ts:195](https://github.com/git-init-priyanshu/talawa-admin-clone/blob/d03f5ca/src/screens/OrganizationFunds/OrganizationFundsMocks.ts#L195)

___

### NO\_FUNDS

• `Const` **NO\_FUNDS**: \{ `request`: \{ `query`: `DocumentNode` = FUND\_LIST; `variables`: \{ `id`: `undefined` = undefined \}  \} ; `result`: \{ `data`: \{ `fundsByOrganization`: `never`[] = [] \}  \}  \}[]

#### Defined in

[src/screens/OrganizationFunds/OrganizationFundsMocks.ts:109](https://github.com/git-init-priyanshu/talawa-admin-clone/blob/d03f5ca/src/screens/OrganizationFunds/OrganizationFundsMocks.ts#L109)
