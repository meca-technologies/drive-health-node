# Shared

Types:

- <code><a href="./src/resources/shared.ts">CallLog</a></code>

# Chats

## Sessions

Types:

- <code><a href="./src/resources/chats/sessions.ts">ChatSession</a></code>
- <code><a href="./src/resources/chats/sessions.ts">SessionRetrieveResponse</a></code>
- <code><a href="./src/resources/chats/sessions.ts">SessionListResponse</a></code>

Methods:

- <code title="get /chats/sessions/{chat_id}">client.chats.sessions.<a href="./src/resources/chats/sessions.ts">retrieve</a>(chatId) -> SessionRetrieveResponse</code>
- <code title="get /chats/sessions">client.chats.sessions.<a href="./src/resources/chats/sessions.ts">list</a>({ ...params }) -> SessionListResponse</code>

# Calls

Types:

- <code><a href="./src/resources/calls.ts">CallRecord</a></code>
- <code><a href="./src/resources/calls.ts">CallRetrieveResponse</a></code>
- <code><a href="./src/resources/calls.ts">CallListResponse</a></code>

Methods:

- <code title="get /calls/{call_id}">client.calls.<a href="./src/resources/calls.ts">retrieve</a>(callId) -> CallRetrieveResponse</code>
- <code title="get /calls">client.calls.<a href="./src/resources/calls.ts">list</a>({ ...params }) -> CallListResponse</code>

# Enterprise

## Clara

Types:

- <code><a href="./src/resources/enterprise/clara/clara.ts">ClaraCreateReminderResponse</a></code>

Methods:

- <code title="post /enterprise/clara/create-reminder">client.enterprise.clara.<a href="./src/resources/enterprise/clara/clara.ts">createReminder</a>({ ...params }) -> ClaraCreateReminderResponse</code>
- <code title="post /enterprise/clara/register-web-call">client.enterprise.clara.<a href="./src/resources/enterprise/clara/clara.ts">registerWebCall</a>({ ...params }) -> void</code>

### Tmp

#### V1

Types:

- <code><a href="./src/resources/enterprise/clara/tmp/v1/v1.ts">V1MakeOutboundCallResponse</a></code>

Methods:

- <code title="post /enterprise/clara/tmp/v1/make-outbound-call">client.enterprise.clara.tmp.v1.<a href="./src/resources/enterprise/clara/tmp/v1/v1.ts">makeOutboundCall</a>({ ...params }) -> V1MakeOutboundCallResponse</code>

##### CallLogs

Types:

- <code><a href="./src/resources/enterprise/clara/tmp/v1/call-logs.ts">CallLogRetrieveResponse</a></code>
- <code><a href="./src/resources/enterprise/clara/tmp/v1/call-logs.ts">CallLogListResponse</a></code>

Methods:

- <code title="get /enterprise/clara/tmp/v1/get-call-logs/{call_id}">client.enterprise.clara.tmp.v1.callLogs.<a href="./src/resources/enterprise/clara/tmp/v1/call-logs.ts">retrieve</a>(callId) -> CallLogRetrieveResponse</code>
- <code title="get /enterprise/clara/tmp/v1/get-call-logs">client.enterprise.clara.tmp.v1.callLogs.<a href="./src/resources/enterprise/clara/tmp/v1/call-logs.ts">list</a>({ ...params }) -> CallLogListResponse</code>

##### Ark

Types:

- <code><a href="./src/resources/enterprise/clara/tmp/v1/ark/ark.ts">ArkMakeOutboundCallResponse</a></code>

Methods:

- <code title="post /enterprise/clara/tmp/v1/ark/make-outbound-call">client.enterprise.clara.tmp.v1.ark.<a href="./src/resources/enterprise/clara/tmp/v1/ark/ark.ts">makeOutboundCall</a>({ ...params }) -> ArkMakeOutboundCallResponse</code>

###### CallLogs

#### Ark

##### CallLogs

Types:

- <code><a href="./src/resources/enterprise/clara/tmp/ark/call-logs.ts">CallLogRetrieveResponse</a></code>
- <code><a href="./src/resources/enterprise/clara/tmp/ark/call-logs.ts">CallLogListResponse</a></code>

Methods:

- <code title="get /enterprise/clara/tmp/v1/ark/get-call-logs/{call_id}">client.enterprise.clara.tmp.ark.callLogs.<a href="./src/resources/enterprise/clara/tmp/ark/call-logs.ts">retrieve</a>(callId) -> CallLogRetrieveResponse</code>
- <code title="get /enterprise/clara/tmp/v1/ark/get-call-logs">client.enterprise.clara.tmp.ark.callLogs.<a href="./src/resources/enterprise/clara/tmp/ark/call-logs.ts">list</a>({ ...params }) -> CallLogListResponse</code>
