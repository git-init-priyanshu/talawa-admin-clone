[talawa-admin](../README.md) / [Modules](../modules.md) / screens/OrganizationPeople/MockDataTypes

# Module: screens/OrganizationPeople/MockDataTypes

## Table of contents

### Type Aliases

- [TestMock](screens_OrganizationPeople_MockDataTypes.md#testmock)

## Type Aliases

### TestMock

Ƭ **TestMock**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `newData?` | () =\> [`TestMock`](screens_OrganizationPeople_MockDataTypes.md#testmock)[``"result"``] |
| `request` | \{ `query`: `DocumentNode` ; `variables`: \{ `email?`: `string` ; `firstName?`: `string` ; `firstNameContains?`: `string` ; `firstName_contains?`: `string` ; `id?`: `string` ; `id_not_in?`: `string`[] ; `lastName?`: `string` ; `lastNameContains?`: `string` ; `lastName_contains?`: `string` ; `orgId?`: `string` ; `orgid?`: `string` ; `password?`: `string` ; `userid?`: `string`  \}  \} |
| `request.query` | `DocumentNode` |
| `request.variables` | \{ `email?`: `string` ; `firstName?`: `string` ; `firstNameContains?`: `string` ; `firstName_contains?`: `string` ; `id?`: `string` ; `id_not_in?`: `string`[] ; `lastName?`: `string` ; `lastNameContains?`: `string` ; `lastName_contains?`: `string` ; `orgId?`: `string` ; `orgid?`: `string` ; `password?`: `string` ; `userid?`: `string`  \} |
| `request.variables.email?` | `string` |
| `request.variables.firstName?` | `string` |
| `request.variables.firstNameContains?` | `string` |
| `request.variables.firstName_contains?` | `string` |
| `request.variables.id?` | `string` |
| `request.variables.id_not_in?` | `string`[] |
| `request.variables.lastName?` | `string` |
| `request.variables.lastNameContains?` | `string` |
| `request.variables.lastName_contains?` | `string` |
| `request.variables.orgId?` | `string` |
| `request.variables.orgid?` | `string` |
| `request.variables.password?` | `string` |
| `request.variables.userid?` | `string` |
| `result` | \{ `__typename?`: `string` ; `data`: \{ `__typename?`: `string` ; `createMember?`: \{ `__typename`: `string` ; `_id`: `string`  \} ; `organizations?`: `InterfaceQueryOrganizationsListObject`[] ; `organizationsMemberConnection?`: \{ `edges?`: `Edge`[] ; `user?`: `Edge`[]  \} ; `signUp?`: \{ `accessToken?`: `string` ; `refreshToken?`: `string` ; `user?`: \{ `_id`: `string`  \}  \} ; `users?`: \{ `user?`: `User`  \}[]  \}  \} |
| `result.__typename?` | `string` |
| `result.data` | \{ `__typename?`: `string` ; `createMember?`: \{ `__typename`: `string` ; `_id`: `string`  \} ; `organizations?`: `InterfaceQueryOrganizationsListObject`[] ; `organizationsMemberConnection?`: \{ `edges?`: `Edge`[] ; `user?`: `Edge`[]  \} ; `signUp?`: \{ `accessToken?`: `string` ; `refreshToken?`: `string` ; `user?`: \{ `_id`: `string`  \}  \} ; `users?`: \{ `user?`: `User`  \}[]  \} |
| `result.data.__typename?` | `string` |
| `result.data.createMember?` | \{ `__typename`: `string` ; `_id`: `string`  \} |
| `result.data.createMember.__typename` | `string` |
| `result.data.createMember._id` | `string` |
| `result.data.organizations?` | `InterfaceQueryOrganizationsListObject`[] |
| `result.data.organizationsMemberConnection?` | \{ `edges?`: `Edge`[] ; `user?`: `Edge`[]  \} |
| `result.data.organizationsMemberConnection.edges?` | `Edge`[] |
| `result.data.organizationsMemberConnection.user?` | `Edge`[] |
| `result.data.signUp?` | \{ `accessToken?`: `string` ; `refreshToken?`: `string` ; `user?`: \{ `_id`: `string`  \}  \} |
| `result.data.signUp.accessToken?` | `string` |
| `result.data.signUp.refreshToken?` | `string` |
| `result.data.signUp.user?` | \{ `_id`: `string`  \} |
| `result.data.signUp.user._id` | `string` |
| `result.data.users?` | \{ `user?`: `User`  \}[] |

#### Defined in

[src/screens/OrganizationPeople/MockDataTypes.ts:34](https://github.com/git-init-priyanshu/talawa-admin-clone/blob/d03f5ca/src/screens/OrganizationPeople/MockDataTypes.ts#L34)
