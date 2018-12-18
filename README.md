# mongo-db-passport

# Routes

### Auth

| Route                 | Methods | Description                                  | Required                                                                                   | Authentication |
| --------------------- | ------- | -------------------------------------------- | --------                                                                                   |--------------  |
| <HOST>/api/auth/login | POST    | Url to login and get Token access            |  :heavy_check_mark: Email</br> :heavy_check_mark: Password                                 |:x:             |
| <HOST>/api/auth/user  | POST    | Create new User                              | :heavy_check_mark: Username <br> :heavy_check_mark: Email <br> :heavy_check_mark: Password |:x:             |

### User

| Route                  | Methods | Description                                  | Required | Authentication     |
| ---------------------- | ------- | -------------------------------------------- | -------- | ------------------ |
| <HOST>/api/user        | GET     | Url to login and get Token access            |          | :heavy_check_mark: |
| <HOST>/api/user/filter | GET     | Create new User                              |          | :heavy_check_mark: |
| <HOST>/api/user/_id    | GET     |                                              |          | :heavy_check_mark: |
| <HOST>/api/user/       | DELETE  |                                              |          | :heavy_check_mark: |
