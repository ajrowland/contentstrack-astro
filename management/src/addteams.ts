import contentstack from "@contentstack/management";
import type { Competition } from "./types";

const client = contentstack.client({
  host: process.env.HOST,
});

const season = "2020-21";
const division = "1";
const country = "en";

const resTeams = await fetch(
  `https://raw.githubusercontent.com/openfootball/football.json/master/${season}/${country}.${division}.clubs.json`
);

const dataTeams = (await resTeams.json()) as Competition;

console.log(dataTeams);

client
  .login({ email: process.env.USER_EMAIL, password: process.env.USER_PASSWORD })
  .then(async (response) => {
    console.log(response.notice);

    dataTeams.clubs.forEach(async (team) => {
      const resTeam = await client
        .stack({ api_key: process.env.API_KEY })
        .contentType("team")
        .entry()
        .create({
          entry: {
            title: team.name,
            code: team.code,
          },
        });

      console.log(resTeam);
    });
  });
