import { render, screen, fireEvent } from "@testing-library/react";
import PostList from '@components/PostList';

const mockPosts = [
  {
    "id": '25759',
    "title": "SpaceX Starlink faces sanctions in Brazil over Elon Musk’s X access",
    "url": "https://www.teslarati.com/spacex-starlink-faces-sanctions-in-brazil-access/",
    "image_url": "https://www.teslarati.com/wp-content/uploads/2024/05/starlink-satellite-new-10.jpeg",
    "news_site": "Teslarati",
    "summary": "SpaceX’s high-speed internet service, Starlink, is facing sanctions in Brazil after Elon Musk’s X was blocked by the government last week. The...",
    "published_at": "2024-09-03T20:57:54Z",
    "updated_at": "2024-09-03T20:57:58.191938Z",
    "featured": false,
    "launches": [],
    "events": []
  },
  {
    "id": '25384',
    "title": "São Francisco’s Colorful Palette",
    "url": "https://www.nasa.gov/image-article/sao-franciscos-colorful-palette/",
    "image_url": "https://www.nasa.gov/wp-content/uploads/2024/08/iss070-e-51989-lrg.jpg?w=1440",
    "news_site": "NASA",
    "summary": "This Dec. 27, 2023 image of the São Francisco River in southeast Brazil showcases the range of vibrant colors in the area including blues, reds, greens, and yellows. Much of the unvegetated land, such as unplanted fields and unpaved roads, appears in bright shades of red and yellow. This coloration comes from the underlying clays [&#8230;]",
    "published_at": "2024-08-15T18:11:40Z",
    "updated_at": "2024-08-15T18:17:03.998549Z",
    "featured": false,
    "launches": [],
    "events": []
  }
];

describe("PostList", () => {
  it("render posts", async () => {
    render(<PostList posts={mockPosts} page={1} totalPages={1} searchTerm="" />);

    const title01 = await screen.findByText('SpaceX Starlink faces sanctions in Brazil over Elon Musk’s X access');
    const title02 = await screen.findByText('São Francisco’s Colorful Palette');

    expect(title01).toBeInTheDocument();
    expect(title02).toBeInTheDocument();
  });

  it("render empty with search term", async () => {
    render(<PostList posts={[]} page={1} totalPages={1} searchTerm="teste" />);

    const text = await screen.findByText('Sem resultados para a busca: teste');
    expect(text).toBeInTheDocument();
  });

  it("render empty without search term", async () => {
    render(<PostList posts={[]} page={1} totalPages={1} searchTerm="" />);

    const text = await screen.findByText('Sem resultados para a categoria');
    expect(text).toBeInTheDocument();
  });
});