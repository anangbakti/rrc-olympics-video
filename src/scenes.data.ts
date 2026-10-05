export interface SceneMetadata {
  id: string;
  chapterNumber: number;
  title: string;
  subtitle: string;
  startSec: number;
  endSec: number;
}

export const SCENES_DATA: SceneMetadata[] = [
  {
    id: "scene-1-cold-open",
    chapterNumber: 1,
    title: "The Historical Paradox",
    subtitle: "From The Sick Man of East Asia to Seoul 1988",
    startSec: 0.0,
    endSec: 79.5,
  },
  {
    id: "scene-2-juguo-tizhi",
    chapterNumber: 2,
    title: "Pillar One: Juguo Tizhi",
    subtitle: "The Whole-Nation System & Youth Boarding Academies",
    startSec: 79.5,
    endSec: 141.4,
  },
  {
    id: "scene-3-project-119",
    chapterNumber: 3,
    title: "Pillar Two: Project 119",
    subtitle: "The Mathematics of Medals & 6 Core Monopoly Sports",
    startSec: 141.4,
    endSec: 226.5,
  },
  {
    id: "scene-4-sports-science",
    chapterNumber: 4,
    title: "Pillar Three: Sports Science",
    subtitle: "High-Speed Sensors & Aerospace Wind Tunnels",
    startSec: 226.5,
    endSec: 253.9,
  },
  {
    id: "scene-5-dark-side",
    chapterNumber: 5,
    title: "The Human Cost & The New Era",
    subtitle: "The 0.1% Pyramid vs Modern Global Champions",
    startSec: 253.9,
    endSec: 308.5,
  },
  {
    id: "scene-6-geopolitics",
    chapterNumber: 6,
    title: "Conclusion: Geopolitics & Outro",
    subtitle: "Engineering Champions for Ideological Legitimacy",
    startSec: 308.5,
    endSec: 345.0, // Includes 12s outro end screen
  },
];
