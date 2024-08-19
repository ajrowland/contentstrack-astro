export interface Team {
  name: string;
  code: string;
  country: string;
}

export interface Competition {
  name: string;
  clubs: Team[];
}

export interface Fixture {
  round: string;
  date: string;
  team1: string;
  team2: string;
  score?: {
    ft: Array<[number, number]>;
  };
}

export interface Fixtures {
  name: string;
  matches: Fixture[];
}
