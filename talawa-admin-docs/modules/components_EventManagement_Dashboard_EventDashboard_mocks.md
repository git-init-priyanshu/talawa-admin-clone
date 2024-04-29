[talawa-admin](../README.md) / [Modules](../modules.md) / components/EventManagement/Dashboard/EventDashboard.mocks

# Module: components/EventManagement/Dashboard/EventDashboard.mocks

## Table of contents

### Variables

- [MOCKS\_WITHOUT\_TIME](components_EventManagement_Dashboard_EventDashboard_mocks.md#mocks_without_time)
- [MOCKS\_WITH\_TIME](components_EventManagement_Dashboard_EventDashboard_mocks.md#mocks_with_time)

## Variables

### MOCKS\_WITHOUT\_TIME

• `Const` **MOCKS\_WITHOUT\_TIME**: \{ `request`: \{ `query`: `DocumentNode` = EVENT\_DETAILS; `variables`: \{ `id`: `string` = 'event123' \}  \} ; `result`: \{ `data`: \{ `event`: \{ `_id`: `string` = 'event123'; `allDay`: `boolean` = false; `attendees`: \{ `_id`: `string` = 'user1' \}[] ; `description`: `string` = 'Event Description'; `endDate`: `string` = '2/2/23'; `endTime`: ``null`` = null; `location`: `string` = 'India'; `organization`: \{ `_id`: `string` = 'org1'; `members`: \{ `_id`: `string` = 'user1'; `firstName`: `string` = 'John'; `lastName`: `string` = 'Doe' \}[]  \} ; `startDate`: `string` = '1/1/23'; `startTime`: ``null`` = null; `title`: `string` = 'Event Title' \}  \}  \}  \}[]

#### Defined in

[src/components/EventManagement/Dashboard/EventDashboard.mocks.ts:36](https://github.com/git-init-priyanshu/talawa-admin-clone/blob/d03f5ca/src/components/EventManagement/Dashboard/EventDashboard.mocks.ts#L36)

___

### MOCKS\_WITH\_TIME

• `Const` **MOCKS\_WITH\_TIME**: \{ `request`: \{ `query`: `DocumentNode` = EVENT\_DETAILS; `variables`: \{ `id`: `string` = 'event123' \}  \} ; `result`: \{ `data`: \{ `event`: \{ `_id`: `string` = 'event123'; `allDay`: `boolean` = false; `attendees`: \{ `_id`: `string` = 'user1' \}[] ; `description`: `string` = 'Event Description'; `endDate`: `string` = '16/2/23'; `endTime`: `string` = '09:00:00'; `location`: `string` = 'India'; `organization`: \{ `_id`: `string` = 'org1'; `members`: \{ `_id`: `string` = 'user1'; `firstName`: `string` = 'John'; `lastName`: `string` = 'Doe' \}[]  \} ; `startDate`: `string` = '1/1/23'; `startTime`: `string` = '08:00:00'; `title`: `string` = 'Event Title' \}  \}  \}  \}[]

#### Defined in

[src/components/EventManagement/Dashboard/EventDashboard.mocks.ts:4](https://github.com/git-init-priyanshu/talawa-admin-clone/blob/d03f5ca/src/components/EventManagement/Dashboard/EventDashboard.mocks.ts#L4)
