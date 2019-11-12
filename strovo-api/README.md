# Strovo Api

This API uses a MongoDB database hosted by [mLab](https://mlab.com/)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

> The server is running on port 3000

---

## Usage

### 3 users available

```json
{"id": 1, "username": "John", "password": "p4ssw0rd"}
{"id": 2, "username": "Jack", "password": "p4ssw0rd"}
{"id": 3, "username": "Ema", "password": "p4ssw0rd"}
```

### Connection

```bash
curl -X POST -H 'Content-Type: application/json' -d '{
  "username": "John",
  "password": "p4ssw0rd"
}' http://localhost:3000/auth/login -i
```

> This command returns an access token to include in request header for run creation and removal, like this : 

```bash
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU3MzU2NjQ5NiwiZXhwIjoxNTczNTcwMDk2fQ.htMC74MNXp1zy-E7FknfWvKsY_WanxZwARU9Lm72Zi0"
```

### Run API

#### Create a run

```bash
curl -X POST -H 'Content-Type: application/json' -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -d '{
  "runType": "Walk",
  "startDate": "1995-11-24T27:00:00.000Z",
  "endDate": "1995-11-25T23:00:00.000Z",
  "distance": 10,
  "calories": 750
}' http://localhost:3000/runs -i
```

> This command returns the created run

```json
{
  "id":1573567121440,
  "userId":"1",
  "runType":"Walk",
  "startDate":"1995-11-24T27:00:00.000Z",
  "endDate":"1995-11-25T23:00:00.000Z",
  "distance":10,
  "calories":750
}
```

#### Delete a run

A user can only delete his own runs

```bash
# /runs/{id}

curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -X DELETE http://localhost:3000/runs/1573567121440
```

### User API

#### Get all users

```bash
# /users

curl http://localhost:3000/users -i
```

#### Get a user by id

```bash
# /users/{id}

curl http://localhost:3000/users/1 -i
```

#### Get user stats

```bash
# /users/stats/{id}?startDate={startDate}&endDate={endDate}
# startDate and endDate format is ISO string
# startDate and/or endDate are optional (you can use of one them or both)

curl http://localhost:3000/users/stats/1?startDate=2019-12-02T27:00:00.000Z&endDate=2019-12-04T27:00:00.000Z -i
```