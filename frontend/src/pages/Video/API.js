
export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIzYmFjZDIyOS0zOWYyLTRjODMtYTA3MS0wMTdjNDkyOWU0NDgiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxNTcxODg3NSwiZXhwIjoxNzE2MzIzNjc1fQ.yAF0a8CFFX6pUSjkQhiq8RGX4ImYaK4NprCSA0vf0bw";
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  const { roomId } = await res.json();
  return roomId;
};