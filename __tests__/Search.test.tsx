import { render, screen, fireEvent } from "@testing-library/react";
import mockRouter from 'next-router-mock';
import Search from '@components/Search';

describe("Search", () => {
  it("text and go to search page result", async () => {
    render(<Search />);

    const input = screen.getByPlaceholderText('Buscar...');
    fireEvent.change(input, {target: {value: 'teste'}})
    fireEvent.submit(input);

    expect(mockRouter).toMatchObject({ 
      pathname: "/busca/teste"
    });
  });
});