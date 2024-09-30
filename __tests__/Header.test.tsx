import { render, screen } from "@testing-library/react";
import Header from '@components/Header';

describe("Header", () => {
  it("render title and subtitle", async () => {
    render(<Header />);

    const title = await screen.findByText('Space Flight News');
    const subtitle = await screen.findByText('Sua dose diária de notícias sobre o voos espaciais');

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
});