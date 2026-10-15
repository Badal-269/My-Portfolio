export const profile = {
  name: 'Jagannath Senapati',
  role: 'Video Editor',
  tagline: 'Crafting cinematic stories frame by frame — from raw footage to final cut.',
  email: 'badalsenapati35@gmail.com',
  location: 'Noida, India',
  bio: "I'm a video editor with over three years of experience cutting narratives, commercials, and branded content. I work at the intersection of rhythm and emotion — letting the pacing of a cut carry the story before a single word of dialogue does.",
  specialties: ['Narrative Editing', 'Color Grading', 'Sound Design', 'Motion Graphics'],
  socials: [
    { label: 'Instagram', url: 'https://instagram.com/' },
    { label: 'YouTube', url: 'https://youtube.com/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/jagannath-senapati' },
  ],
};

export interface WorkItem {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  videoId: string;
  platform: 'youtube' | 'vimeo';
  duration: string;
}

export const works: WorkItem[] = [
  {
    id: 'w1',
    title: 'Monsoon Reverie',
    client: 'Wander Films',
    category: 'Short Film',
    year: '2025',
    videoId: 'dQw4w9WgXcQ',
    platform: 'youtube',
    duration: '4:32',
  },
  {
    id: 'w2',
    title: 'Urban Pulse',
    client: 'Nike India',
    category: 'Commercial',
    year: '2025',
    videoId: 'dQw4w9WgXcQ',
    platform: 'youtube',
    duration: '1:30',
  },
  {
    id: 'w3',
    title: 'The Craftsman',
    client: 'Artisan Collective',
    category: 'Documentary',
    year: '2024',
    videoId: 'dQw4w9WgXcQ',
    platform: 'youtube',
    duration: '8:15',
  },
  {
    id: 'w4',
    title: 'Velocity',
    client: 'Red Bull',
    category: 'Action Sports',
    year: '2024',
    videoId: 'dQw4w9WgXcQ',
    platform: 'youtube',
    duration: '3:48',
  },
  {
    id: 'w5',
    title: 'Lumen',
    client: 'Sony Music',
    category: 'Music Video',
    year: '2023',
    videoId: 'dQw4w9WgXcQ',
    platform: 'youtube',
    duration: '4:05',
  },
  {
    id: 'w6',
    title: 'Origins',
    client: 'National Geographic',
    category: 'Documentary Series',
    year: '2023',
    videoId: 'dQw4w9WgXcQ',
    platform: 'youtube',
    duration: '12:20',
  },
];

export interface ExperienceItem {
  role: string;
  client: string;
  year: string;
  description: string;
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Video Editor',
    client: 'ScholarHat (EdTech Platform)',
    year: 'Jan 2026 — Present',
    description: "Edited ScholarHat’s complete range of paid and free courses, along with advertisements and social media content, delivering polished and engaging video content aligned with the brand.",
  },
  {
    role: 'Freelance Video Editor',
    client: 'Individual Content Creators & Brands',
    year: 'Jul 2025 — Present',
    description: 'Worked with individual content creators and brands to edit engaging short-form and long-form videos, enhancing storytelling, pacing, visuals, and overall content quality for social media platforms.',
  },
  {
    role: 'Video Editor & Graphic Designer',
    client: "MLA's Political Campaign (Bargarh, Odisha)",
    year: '2023',
    description: 'Edited and produced high-impact campaign videos, social media content, promotional creatives, and graphic designs, helping deliver campaign messages effectively and engage the target audience.',
  },
];
