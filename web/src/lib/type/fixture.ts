export type Fixture = {
  title: string;
  date: string;
  season: Array<{ title: string }>;
  home_team: Array<{ title: string; code: string }>;
  away_team: Array<{ title: string; code: string }>;
  home_score: number;
  away_score: number;
};
