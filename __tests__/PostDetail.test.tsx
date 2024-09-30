import { render, screen, fireEvent } from "@testing-library/react";
import PostDetail from '@components/PostDetail';

const mockPost = {
    "id": '20085',
    "title": "El administrador de NASA viajará a Sudamérica, hablará de cooperación",
    "url": "http://www.nasa.gov/press-release/el-administrador-de-nasa-viajar-a-sudam-rica-hablar-de-cooperaci-n",
    "image_url": "https://www.nasa.gov/sites/default/files/thumbnails/image/53055306699_f2cc87d539_o.jpg?itok=J4K9KDF0",
    "news_site": "NASA",
    "summary": "Como parte de una serie de reuniones con destacados funcionarios gubernamentales, el administrador de la NASA, Bill Nelson, viajará a Brasil, Argentina y Colombia a partir del lunes 24 de julio.",
    "published_at": "08/08/1988",
}

describe("PostDetail", () => {
  it("render post details", async () => {
    render(<PostDetail post={mockPost} />);

    const title = await screen.findByText('El administrador de NASA viajará a Sudamérica, hablará de cooperación');
    const subtitle = await screen.findByText('Como parte de una serie de reuniones con destacados funcionarios gubernamentales, el administrador de la NASA, Bill Nelson, viajará a Brasil, Argentina y Colombia a partir del lunes 24 de julio.');
    const site = await screen.findByText('NASA');
    const date = await screen.findByText('08/08/1988');

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(site).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });

  it("click and open post link", async () => {
    render(<PostDetail post={mockPost} />);
    const button = await screen.findByText('Visitar site');
    fireEvent.click(button);
    expect(window.open).toHaveBeenCalledWith('http://www.nasa.gov/press-release/el-administrador-de-nasa-viajar-a-sudam-rica-hablar-de-cooperaci-n','_blank')
  });
});