[talawa-admin](../README.md) / [Modules](../modules.md) / screens/Requests/RequestsMocks

# Module: screens/Requests/RequestsMocks

## Table of contents

### Variables

- [EMPTY\_MOCKS](screens_Requests_RequestsMocks.md#empty_mocks)
- [EMPTY\_REQUEST\_MOCKS](screens_Requests_RequestsMocks.md#empty_request_mocks)
- [MOCKS](screens_Requests_RequestsMocks.md#mocks)
- [MOCKS2](screens_Requests_RequestsMocks.md#mocks2)
- [MOCKS3](screens_Requests_RequestsMocks.md#mocks3)
- [MOCKS4](screens_Requests_RequestsMocks.md#mocks4)
- [MOCKS\_WITH\_ERROR](screens_Requests_RequestsMocks.md#mocks_with_error)

## Variables

### EMPTY\_MOCKS

• `Const` **EMPTY\_MOCKS**: (\{ `request`: \{ `query`: `DocumentNode` = MEMBERSHIP\_REQUEST; `variables`: \{ `first`: `number` = 8; `firstName_contains`: `string` = ''; `id`: `string` = 'org1'; `skip`: `number` = 0 \}  \} ; `result`: \{ `data`: \{ `organizations`: \{ `_id`: `string` = 'org1'; `membershipRequests`: `never`[] = [] \}[] ; `organizationsConnection?`: `undefined`  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = ORGANIZATION\_CONNECTION\_LIST; `variables?`: `undefined`  \} ; `result`: \{ `data`: \{ `organizations?`: `undefined` ; `organizationsConnection`: `never`[] = [] \}  \}  \})[]

#### Defined in

[src/screens/Requests/RequestsMocks.ts:522](https://github.com/git-init-priyanshu/talawa-admin-clone/blob/d03f5ca/src/screens/Requests/RequestsMocks.ts#L522)

___

### EMPTY\_REQUEST\_MOCKS

• `Const` **EMPTY\_REQUEST\_MOCKS**: (\{ `request`: \{ `query`: `DocumentNode` = ORGANIZATION\_CONNECTION\_LIST; `variables?`: `undefined`  \} ; `result`: \{ `data`: \{ `organizations?`: `undefined` ; `organizationsConnection`: \{ `_id`: `string` = 'org1'; `address`: \{ `city`: `string` = 'Kingston'; `countryCode`: `string` = 'JM'; `dependentLocality`: `string` = 'Sample Dependent Locality'; `line1`: `string` = '123 Jamaica Street'; `line2`: `string` = 'Apartment 456'; `postalCode`: `string` = 'JM12345'; `sortingCode`: `string` = 'ABC-123'; `state`: `string` = 'Kingston Parish' \} ; `admins`: \{ `_id`: `string` = 'user1' \}[] ; `createdAt`: `string` = '09/11/2001'; `creator`: \{ `firstName`: `string` = 'John'; `lastName`: `string` = 'Doe' \} ; `image`: ``null`` = null; `members`: \{ `_id`: `string` = 'user1' \}[] ; `name`: `string` = 'Palisadoes' \}[]  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = MEMBERSHIP\_REQUEST; `variables`: \{ `first`: `number` = 8; `firstName_contains`: `string` = ''; `id`: `string` = ''; `skip`: `number` = 0 \}  \} ; `result`: \{ `data`: \{ `organizations`: \{ `_id`: `string` = 'org1'; `membershipRequests`: `never`[] = [] \}[] ; `organizationsConnection?`: `undefined`  \}  \}  \})[]

#### Defined in

[src/screens/Requests/RequestsMocks.ts:6](https://github.com/git-init-priyanshu/talawa-admin-clone/blob/d03f5ca/src/screens/Requests/RequestsMocks.ts#L6)

___

### MOCKS

• `Const` **MOCKS**: (\{ `request`: \{ `query`: `DocumentNode` = ORGANIZATION\_CONNECTION\_LIST; `variables?`: `undefined`  \} ; `result`: \{ `data`: \{ `organizations?`: `undefined` ; `organizationsConnection`: \{ `_id`: `string` = 'org1'; `address`: \{ `city`: `string` = 'Kingston'; `countryCode`: `string` = 'JM'; `dependentLocality`: `string` = 'Sample Dependent Locality'; `line1`: `string` = '123 Jamaica Street'; `line2`: `string` = 'Apartment 456'; `postalCode`: `string` = 'JM12345'; `sortingCode`: `string` = 'ABC-123'; `state`: `string` = 'Kingston Parish' \} ; `admins`: \{ `_id`: `string` = 'user1' \}[] ; `createdAt`: `string` = '09/11/2001'; `creator`: \{ `firstName`: `string` = 'John'; `lastName`: `string` = 'Doe' \} ; `image`: ``null`` = null; `members`: \{ `_id`: `string` = 'user1' \}[] ; `name`: `string` = 'Palisadoes' \}[]  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = MEMBERSHIP\_REQUEST; `variables`: \{ `first`: `number` = 8; `firstName_contains`: `string` = ''; `id`: `string` = ''; `skip`: `number` = 0 \}  \} ; `result`: \{ `data`: \{ `organizations`: \{ `_id`: `string` = ''; `membershipRequests`: \{ `_id`: `string` = '1'; `user`: \{ `_id`: `string` = 'user2'; `email`: `string` = 'testuser3@example.com'; `firstName`: `string` = 'Scott'; `lastName`: `string` = 'Tony' \}  \}[]  \}[] ; `organizationsConnection?`: `undefined`  \}  \}  \})[]

#### Defined in

[src/screens/Requests/RequestsMocks.ts:71](https://github.com/git-init-priyanshu/talawa-admin-clone/blob/d03f5ca/src/screens/Requests/RequestsMocks.ts#L71)

___

### MOCKS2

• `Const` **MOCKS2**: (\{ `request`: \{ `query`: `DocumentNode` = ORGANIZATION\_CONNECTION\_LIST; `variables?`: `undefined`  \} ; `result`: \{ `data`: \{ `organizations?`: `undefined` ; `organizationsConnection`: \{ `_id`: `string` = 'org1'; `address`: \{ `city`: `string` = 'Kingston'; `countryCode`: `string` = 'JM'; `dependentLocality`: `string` = 'Sample Dependent Locality'; `line1`: `string` = '123 Jamaica Street'; `line2`: `string` = 'Apartment 456'; `postalCode`: `string` = 'JM12345'; `sortingCode`: `string` = 'ABC-123'; `state`: `string` = 'Kingston Parish' \} ; `admins`: \{ `_id`: `string` = 'user1' \}[] ; `createdAt`: `string` = '09/11/2001'; `creator`: \{ `firstName`: `string` = 'John'; `lastName`: `string` = 'Doe' \} ; `image`: ``null`` = null; `members`: \{ `_id`: `string` = 'user1' \}[] ; `name`: `string` = 'Palisadoes' \}[]  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = MEMBERSHIP\_REQUEST; `variables`: \{ `first`: `number` = 8; `firstName_contains`: `string` = ''; `id`: `string` = 'org1'; `skip`: `number` = 0 \}  \} ; `result`: \{ `data`: \{ `organizations`: \{ `_id`: `string` = 'org1'; `membershipRequests`: \{ `_id`: `string` = '1'; `user`: \{ `_id`: `string` = 'user2'; `email`: `string` = 'testuser3@example.com'; `firstName`: `string` = 'Scott'; `lastName`: `string` = 'Tony' \}  \}[]  \}[] ; `organizationsConnection?`: `undefined`  \}  \}  \})[]

#### Defined in

[src/screens/Requests/RequestsMocks.ts:387](https://github.com/git-init-priyanshu/talawa-admin-clone/blob/d03f5ca/src/screens/Requests/RequestsMocks.ts#L387)

___

### MOCKS3

• `Const` **MOCKS3**: (\{ `request`: \{ `query`: `DocumentNode` = ORGANIZATION\_CONNECTION\_LIST; `variables?`: `undefined`  \} ; `result`: \{ `data`: \{ `organizations?`: `undefined` ; `organizationsConnection`: \{ `_id`: `string` = 'org1'; `address`: \{ `city`: `string` = 'Kingston'; `countryCode`: `string` = 'JM'; `dependentLocality`: `string` = 'Sample Dependent Locality'; `line1`: `string` = '123 Jamaica Street'; `line2`: `string` = 'Apartment 456'; `postalCode`: `string` = 'JM12345'; `sortingCode`: `string` = 'ABC-123'; `state`: `string` = 'Kingston Parish' \} ; `admins`: \{ `_id`: `string` = 'user1' \}[] ; `createdAt`: `string` = '09/11/2001'; `creator`: \{ `firstName`: `string` = 'John'; `lastName`: `string` = 'Doe' \} ; `image`: ``null`` = null; `members`: \{ `_id`: `string` = 'user1' \}[] ; `name`: `string` = 'Palisadoes' \}[]  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = MEMBERSHIP\_REQUEST; `variables`: \{ `first`: `number` = 8; `firstName_contains`: `string` = ''; `id`: `string` = 'org1'; `skip`: `number` = 0 \}  \} ; `result`: \{ `data`: \{ `organizations`: `never`[] = []; `organizationsConnection?`: `undefined`  \}  \}  \})[]

#### Defined in

[src/screens/Requests/RequestsMocks.ts:462](https://github.com/git-init-priyanshu/talawa-admin-clone/blob/d03f5ca/src/screens/Requests/RequestsMocks.ts#L462)

___

### MOCKS4

• `Const` **MOCKS4**: (\{ `request`: \{ `query`: `DocumentNode` = ORGANIZATION\_CONNECTION\_LIST; `variables?`: `undefined`  \} ; `result`: \{ `data`: \{ `organizations?`: `undefined` ; `organizationsConnection`: \{ `_id`: `string` = 'org1'; `address`: \{ `city`: `string` = 'Kingston'; `countryCode`: `string` = 'JM'; `dependentLocality`: `string` = 'Sample Dependent Locality'; `line1`: `string` = '123 Jamaica Street'; `line2`: `string` = 'Apartment 456'; `postalCode`: `string` = 'JM12345'; `sortingCode`: `string` = 'ABC-123'; `state`: `string` = 'Kingston Parish' \} ; `admins`: \{ `_id`: `string` = 'user1' \}[] ; `createdAt`: `string` = '09/11/2001'; `creator`: \{ `firstName`: `string` = 'John'; `lastName`: `string` = 'Doe' \} ; `image`: ``null`` = null; `members`: \{ `_id`: `string` = 'user1' \}[] ; `name`: `string` = 'Palisadoes' \}[]  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = MEMBERSHIP\_REQUEST; `variables`: \{ `first`: `number` = 8; `firstName_contains`: `string` = ''; `id`: `string` = ''; `skip`: `number` = 0 \}  \} ; `result`: \{ `data`: \{ `organizations`: \{ `_id`: `string` = ''; `membershipRequests`: \{ `_id`: `string` = '1'; `user`: \{ `_id`: `string` = 'user2'; `email`: `string` = 'testuser3@example.com'; `firstName`: `string` = 'Scott'; `lastName`: `string` = 'Tony' \}  \}[]  \}[] ; `organizationsConnection?`: `undefined`  \}  \}  \})[]

#### Defined in

[src/screens/Requests/RequestsMocks.ts:155](https://github.com/git-init-priyanshu/talawa-admin-clone/blob/d03f5ca/src/screens/Requests/RequestsMocks.ts#L155)

___

### MOCKS\_WITH\_ERROR

• `Const` **MOCKS\_WITH\_ERROR**: (\{ `request`: \{ `query`: `DocumentNode` = MEMBERSHIP\_REQUEST; `variables`: \{ `first`: `number` = 0; `firstName_contains`: `string` = ''; `id`: `string` = '1'; `skip`: `number` = 0 \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = ORGANIZATION\_CONNECTION\_LIST; `variables?`: `undefined`  \}  \})[]

#### Defined in

[src/screens/Requests/RequestsMocks.ts:556](https://github.com/git-init-priyanshu/talawa-admin-clone/blob/d03f5ca/src/screens/Requests/RequestsMocks.ts#L556)
