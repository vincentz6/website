const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const querystring = require("querystring");
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const TOP_ARTISTS_ENDPOINT =
  "https://api.spotify.com/v1/me/top/artists?time_range=short_term&";

async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  const tokenData = await response.json();
  return tokenData.access_token;
}

export async function handler() {
  try {
    const access_token = await getAccessToken();

    const response = await fetch(TOP_ARTISTS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const artistData = await response.json();

    const artists = artistData.items.map((artist) => ({
      name: artist.name,
      image: artist.images?.[0]?.url,
      url: artist.external_urls.spotify,
    }));

    return {
      statusCode: 200,
      body: JSON.stringify(artists),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || "Something went wrong" }),
    };
  }
}
