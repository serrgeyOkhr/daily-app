import type { IWebsite } from "@/const";

export const RANDOM_FACT_URL = "https://uselessfacts.jsph.pl/api/v2/facts/random";

export const generalWebsites: IWebsite[] = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/",
    image: "youtube",
  },
  {
    name: "Movies",
    url: "https://movies2watch.tv/",
    image: "movies2watch",
  },
  {
    name: "Music",
    url: "https://music.yandex.ru/home/",
    image: "yandex_music.svg",
  },
];
export const workWebsites: IWebsite[] = [
  {
    name: "Toggl",
    url: "https://track.toggl.com/timer",
    image: "toggle.svg",
  },
  {
    name: "Jira",
    url: "https://scrile.atlassian.net/jira/software/c/projects/CO/boards/83",
  },
  {
    name: "gitlab",
    url: "https://gitlab.com/webvideo/",
    image: "gitlab.svg",
  },
];
