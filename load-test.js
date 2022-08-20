import http from "k6/http";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function () {
  const url = "http://34.110.192.145/api/users/signin";
  const payload = JSON.stringify({
    email: "test@gmail.com",
    password: "Test@1234",
  });

  http.post(url, payload);
}
