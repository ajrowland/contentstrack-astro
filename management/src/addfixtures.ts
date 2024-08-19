import contentstack from "@contentstack/management";
import type { Fixtures } from "./types";

const client = contentstack.client({
  host: process.env.HOST,
});

const season = "2020-21";
const division = "1";
const country = "en";
const competitionName = "Premier League";
const competitionId = "blt8ff82f65bbb9aeb8";
const seasonId = "blt2e173bfc57f061cc";

const resFixtures = await fetch(
  `https://raw.githubusercontent.com/openfootball/football.json/master/${season}/${country}.${division}.json`
);

const dataFixtures = (await resFixtures.json()) as Fixtures;

export const deleteAllFixtures = async () => {
  const resFixtures = await client
    .stack({ api_key: process.env.API_KEY })
    .contentType("fixture")
    .entry()
    .query()
    .find();

  resFixtures.items.forEach(async (fixture) => {
    await client
      .stack({ api_key: process.env.API_KEY })
      .contentType("fixture")
      .entry(fixture["uid"])
      .delete();
  });
};

export const addFixtures = async () => {
  const resTeams = await client
    .stack({ api_key: process.env.API_KEY })
    .contentType("team")
    .entry()
    .query()
    .find();

  const teamLookup = resTeams.items.reduce<{ [key: string]: string }>(
    (lookup, team) => {
      lookup[team["title"]] = team["uid"];
      return lookup;
    },
    {}
  );

  console.log(dataFixtures.matches.slice(2, 3));

  dataFixtures.matches.forEach(async (match) => {
    console.log(match);

    const resFixture = await client
      .stack({ api_key: process.env.API_KEY })
      .contentType("fixture")
      .entry()
      .create({
        entry: {
          title: `${match.date} (${competitionName}) - ${match.team1} v ${match.team2}`,
          date: match.date,
          competition: [
            { uid: competitionId, _content_type_uid: "competition" },
          ],
          season: [{ uid: seasonId, _content_type_uid: "season" }],
          home_team: [
            { uid: teamLookup[match.team1], _content_type_uid: "team" },
          ],
          away_team: [
            { uid: teamLookup[match.team2], _content_type_uid: "team" },
          ],
          home_score: match.score?.ft[0],
          away_score: match.score?.ft[1],
        },
      });

    console.log(resFixture);

    await client
      .stack({ api_key: process.env.API_KEY })
      .contentType("fixture")
      .entry(resFixture.uid)
      .publish({
        publishDetails: { locales: ["en-gb"], environments: ["development"] },
      });
  });
};

const loginRes = await client.login({
  email: process.env.USER_EMAIL,
  password: process.env.USER_PASSWORD,
});

console.log(loginRes.notice);

// await deleteAllFixtures();
await addFixtures();
