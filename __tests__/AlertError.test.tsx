import { render, screen } from "@testing-library/react";
import AlertError from '@components/AlertError';

describe("AlertError", () => {
  it("render title and subtitle", async () => {
    render(<AlertError title="Resultado não encontrado" subtitle="Faça uma nova busca"  />);

    const title = await screen.findByText('Resultado não encontrado');
    const subtitle = await screen.findByText('Faça uma nova busca');

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
});