import type { CardCraftProps } from "./components/HomeHero/Portfolio/CardCraft";

export { data };
export type HomeData = Awaited<ReturnType<typeof data>>;

const fakeShowcases: CardCraftProps[] = [
  {
    id: "1",
    title: "Amazing Project",
    description: "This is a description of an amazing project.",
    isPublish: true,
    file: {
      contentType: "image/jpeg",
      fileName: "project-image.png",
      fileUrl: "/src/pages/index/assets/images/portfolio/1.jpg",
      metadata: {
        width: 800,
        height: 600,
        blurhash: "LKO2?U%2Tw=w]~RBVZRi};RPxuwH",
      },
    },
    link: "https://example.com/project",
    authorName: "John Doe",
    actionText: "View Project",
    createdAt: "2023-10-01T12:00:00Z",
  },
  {
    id: "2",
    title: "Innovative Design",
    description: "This project showcases an innovative design.",
    isPublish: false,
    file: {
      contentType: "image/jpeg",
      fileName: "design-image.jpg",
      fileUrl: "/design-image.jpg",
      metadata: {
        width: 1024,
        height: 768,
        blurhash: "LKO2?U%2Tw=w]~RBVZRi};RPxuwH",
      },
    },
    link: "https://example.com/design",
    authorName: "Jane Smith",
    actionText: "Explore Design",
    createdAt: "2023-09-15T08:30:00Z",
  },
  {
    id: "3",
    title: "Tech Solution",
    description: "A cutting-edge tech solution for modern problems.",
    isPublish: true,
    file: {
      contentType: "video/mp4",
      fileName: "solution-video.mp4",
      fileUrl: "/solution-video.mp4",
      metadata: {
        width: 1920,
        height: 1080,
        blurhash: "LKO2?U%2Tw=w]~RBVZRi};RPxuwH",
      },
    },
    link: "https://example.com/solution",
    authorName: "Alice Johnson",
    actionText: "Watch Video",
    createdAt: "2023-08-20T14:45:00Z",
  },
  {
    id: "4",
    title: "Creative Artwork",
    description: "A beautiful piece of creative artwork.",
    isPublish: true,
    file: {
      contentType: "video/mp4",
      fileName: "artwork.gif",
      fileUrl: "/artwork.gif",
      metadata: {
        width: 500,
        height: 500,
        blurhash: "LKO2?U%2Tw=w]~RBVZRi};RPxuwH",
      },
    },
    link: "https://example.com/artwork",
    authorName: "Bob Brown",
    actionText: "View Artwork",
    createdAt: "2023-07-10T10:00:00Z",
  },
  {
    id: "5",
    title: "Innovative App",
    description: "An innovative app that solves many problems.",
    isPublish: false,
    file: {
      fileName: "app-icon.svg",
      fileUrl: "/app-icon.svg",
      metadata: {
        type: "image/jpeg",
        width: 600,
        height: 400,
        blurhash: "LKO2?U%2Tw=w]~RBVZRi};RPxuwH",
      },
    },
    link: "https://example.com/app",
    authorName: "Charlie Davis",
    actionText: "Download App",
    createdAt: "2023-06-25T09:15:00Z",
  },
  {
    id: "6",
    title: "Tech Conference",
    description: "Highlights from the latest tech conference.",
    isPublish: true,
    file: {
      contentType: "video/mp4",
      fileName: "conference-video.mp4",
      fileUrl: "/conference-video.mp4",
      metadata: {
        width: 1280,
        height: 720,
        blurhash: "LKO2?U%2Tw=w]~RBVZRi};RPxuwH",
      },
    },
    link: "https://example.com/conference",
    authorName: "Diana Evans",
    actionText: "Watch Highlights",
    createdAt: "2023-05-30T11:45:00Z",
  },
  {
    id: "7",
    title: "Photography Portfolio",
    description: "A stunning photography portfolio.",
    isPublish: true,
    file: {
      contentType: "image/jpeg",
      fileName: "portfolio.jpg",
      fileUrl: "/portfolio.jpg",
      metadata: {
        width: 1200,
        height: 800,
        blurhash: "LKO2?U%2Tw=w]~RBVZRi};RPxuwH",
      },
    },
    link: "https://example.com/portfolio",
    authorName: "Eve Foster",
    actionText: "View Portfolio",
    createdAt: "2023-04-20T13:30:00Z",
  },
  {
    id: "8",
    title: "Music Album",
    description: "A new music album release.",
    isPublish: false,
    file: {
      contentType: "video/mp4",
      fileUrl: "/album.mp3",
      metadata: {
        fileName: "album.mp3",
        width: 0,
        height: 0,
        blurhash: "LKO2?U%2Tw=w]~RBVZRi};RPxuwH",
      },
    },
    link: "https://example.com/album",
    authorName: "Frank Green",
    actionText: "Listen Now",
    createdAt: "2023-03-15T07:00:00Z",
  },
  {
    id: "9",
    title: "Art Exhibition",
    description: "Details about the upcoming art exhibition.",
    isPublish: true,
    file: {
      contentType: "image/png",
      fileName: "exhibition.png",
      fileUrl: "/exhibition.png",
      metadata: {
        width: 1024,
        height: 768,
        blurhash: "LKO2?U%2Tw=w]~RBVZRi};RPxuwH",
      },
    },
    link: "https://example.com/exhibition",
    authorName: "Grace Harris",
    actionText: "Learn More",
    createdAt: "2023-02-10T16:00:00Z",
  },
  {
    id: "10",
    title: "Science Fair",
    description: "Highlights from the annual science fair.",
    isPublish: true,
    file: {
      contentType: "video/mp4",
      fileName: "science-fair.mp4",
      fileUrl: "/science-fair.mp4",
      metadata: {
        width: 1920,
        height: 1080,
        blurhash: "LKO2?U%2Tw=w]~RBVZRi};RPxuwH",
      },
    },
    link: "https://example.com/science-fair",
    authorName: "Henry Irving",
    actionText: "Watch Highlights",
    createdAt: "2023-01-05T12:00:00Z",
  },
  {
    id: "11",
    title: "Cooking Show",
    description: "A new episode of the popular cooking show.",
    isPublish: false,
    file: {
      contentType: "video/mp4",
      fileName: "cooking-show.mp4",
      fileUrl: "/cooking-show.mp4",
      metadata: {
        width: 1280,
        height: 720,
        blurhash: "LKO2?U%2Tw=w]~RBVZRi};RPxuwH",
      },
    },
    link: "https://example.com/cooking-show",
    authorName: "Ivy Johnson",
    actionText: "Watch Episode",
    createdAt: "2022-12-25T18:00:00Z",
  },
  {
    id: "12",
    title: "Fitness Program",
    description: "A comprehensive fitness program.",
    isPublish: true,
    file: {
      contentType: "image/jpeg",
      fileName: "fitness-program.jpg",
      fileUrl: "/fitness-program.jpg",
      metadata: {
        width: 800,
        height: 600,
        blurhash: "LKO2?U%2Tw=w]~RBVZRi};RPxuwH",
      },
    },
    link: "https://example.com/fitness-program",
    authorName: "Jack King",
    actionText: "Join Now",
    createdAt: "2022-11-15T14:00:00Z",
  },
];

async function data() {
  return {
    showcases: fakeShowcases,
  };
}
