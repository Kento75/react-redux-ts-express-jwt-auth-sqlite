# react-redux-ts-basic-template

### backend API Routes

|URL|Type|Request|Response
|:---|:---|:-----|:-----|
|**`/user/authenticate`**|POST|username, password|username, password, token
|**`/user/all`**|GET|-|id, username, password, firstName, lastName, age, imageURL, comment
|**`/user/count`**|GET|-|count(*)
|**`/user/find/:userId`**|GET|id|id, username, password, firstName, lastName, age, imageURL, comment
