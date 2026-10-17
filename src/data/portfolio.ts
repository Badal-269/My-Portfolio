export const profile = {
  name: 'Jagannath Senapati',
  role: 'Video Editor',
  tagline: 'Crafting cinematic stories frame by frame — from raw footage to final cut.',
  email: 'jagannathsenapati278@gmail.com',
  location: 'Noida, India',
  bio: "I'm a video editor with over three years of experience cutting narratives, commercials, and branded content. I work at the intersection of rhythm and emotion — letting the pacing of a cut carry the story before a single word of dialogue does.",
  specialties: ['Narrative Editing', 'Color Grading', 'Sound Design', 'Motion Graphics'],
  socials: [
    { label: 'Instagram', url: 'https://www.instagram.com/editz.by.jagannath?srtk=NjU0NnBkdjY0Z2l5' },
    { label: 'YouTube', url: 'https://youtube.com/@editz.by.jagannath?si=z-IUqcasMHOaSmMK' },
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
  platform: 'youtube' | 'vimeo' | 'drive' | '';
  duration: string;
  orientation?: 'portrait';
}

export const works: WorkItem[] = [
  {
    id: 'w1',
    title: 'Video Editing Showreel',
    client: 'Self-Promo',
    category: 'Showreel',
    year: '2026',
    videoId: '1JpY1wRTu3WeUlwTnojgYkebViZqBTDv4',
    platform: 'drive',
    duration: '0:39',
    orientation: 'portrait',
  },
  {
    id: 'w2',
    title: 'Mutual Fund',
    client: 'Shining Bull',
    category: 'Educational',
    year: '2026',
    videoId: '1E5f4UJxA7VErfy2oUWuor1LZVgYU5VUB',
    platform: 'drive',
    duration: '0:22',
    orientation: 'portrait',
  },
  {
    id: 'w3',
    title: 'AWS AI with Python Intro',
    client: 'ScholarHat',
    category: 'Educational',
    year: '2026',
    videoId: '1NwkoyflXsia9X59ihSq4Hr7gg3vb3tfr',
    platform: 'drive',
    duration: '0:49',
    orientation: 'portrait',
  },
  {
    id: 'w4',
    title: 'Green Energy',
    client: 'Shining Bull',
    category: 'Educational',
    year: '2026',
    videoId: '1xNiu0GoJjm5vCj61HQEn0fLsOGiqhzQc',
    platform: 'drive',
    duration: '0:34',
    orientation: 'portrait',
  },
  {
    id: 'w5',
    title: 'Coming soon',
    client: '',
    category: '',
    year: '',
    videoId: '',
    platform: '',
    duration: '',
  },
  {
    id: 'w6',
    title: 'Coming soon',
    client: '',
    category: '',
    year: '',
    videoId: '',
    platform: '',
    duration: '',
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
