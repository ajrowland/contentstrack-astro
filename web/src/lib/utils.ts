import Stack from "./contentstack-sdk";
import type { Fixture } from "./type/fixture";

const liveEdit = import.meta.env.CONTENTSTACK_LIVE_EDIT_TAGS === "true";

export const getAllFixtures = async (): Promise<Fixture[]> => {
  const response = (await Stack.getEntry({
    contentTypeUid: "fixture",
    referenceFieldPath: ["home_team", "away_team", "season", "competition"],
    /*
    referenceFieldPath: ["page_components.from_blog.featured_blogs"],
    jsonRtePath: [
      "page_components.from_blog.featured_blogs.body",
      "page_components.section_with_buckets.buckets.description",
      "page_components.section_with_html_code.description",
    ],
    */
  })) as [Fixture[]];
  return response[0];
};

export function formatDate(dateStr: string) {
  return dateStr ? new Date(dateStr).toDateString() : "No date";
}
