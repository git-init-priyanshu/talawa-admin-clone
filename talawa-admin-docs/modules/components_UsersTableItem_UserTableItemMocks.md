[talawa-admin](../README.md) / [Modules](../modules.md) / components/UsersTableItem/UserTableItemMocks

# Module: components/UsersTableItem/UserTableItemMocks

## Table of contents

### Variables

- [MOCKS](components_UsersTableItem_UserTableItemMocks.md#mocks)

## Variables

### MOCKS

• `Const` **MOCKS**: (\{ `request`: \{ `query`: `DocumentNode` = REMOVE\_MEMBER\_MUTATION; `variables`: \{ `organizationId?`: `undefined` = '123'; `orgid`: `string` = 'abc'; `role?`: `undefined` = 'ADMIN'; `userId?`: `undefined` = '123'; `userid`: `string` = '123' \}  \} ; `result`: \{ `data`: \{ `removeMember`: \{ `_id`: `string` = '123' \} ; `updateUserRoleInOrganization?`: `undefined`  \}  \}  \} \| \{ `request`: \{ `query`: `DocumentNode` = UPDATE\_USER\_ROLE\_IN\_ORG\_MUTATION; `variables`: \{ `organizationId`: `string` = 'abc'; `orgid?`: `undefined` = 'abc'; `role`: `string` = 'ADMIN'; `userId`: `string` = '123'; `userid?`: `undefined` = '123' \}  \} ; `result`: \{ `data`: \{ `removeMember?`: `undefined` ; `updateUserRoleInOrganization`: \{ `_id`: `string` = '123' \}  \}  \}  \})[]

#### Defined in

[src/components/UsersTableItem/UserTableItemMocks.ts:6](https://github.com/git-init-priyanshu/talawa-admin-clone/blob/d03f5ca/src/components/UsersTableItem/UserTableItemMocks.ts#L6)
