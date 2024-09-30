import { render, screen, fireEvent } from "@testing-library/react";
import Categories from '@components/Categories';
import mockRouter from 'next-router-mock';

describe("Categories", () => {
  it("render categories", async () => {
    render(<Categories />);

    const button01 = await screen.findByText('Todas');
    const button02 = await screen.findByText('Destaques');
    const button03 = await screen.findByText('Lançamentos');
    const button04 = await screen.findByText('Eventos');

    expect(button01).toBeInTheDocument();
    expect(button02).toBeInTheDocument();
    expect(button03).toBeInTheDocument();
    expect(button04).toBeInTheDocument();
  });

  it("click and got to categories", async () => {
    render(<Categories />);

    const button01 = await screen.findByText('Todas');
    const button02 = await screen.findByText('Destaques');
    const button03 = await screen.findByText('Lançamentos');
    const button04 = await screen.findByText('Eventos');

    fireEvent.click(button01);
    expect(mockRouter).toMatchObject({ 
      pathname: "/"
    });
    fireEvent.click(button02);
    expect(mockRouter).toMatchObject({ 
      pathname: "/destaques"
    });
    fireEvent.click(button03);
    expect(mockRouter).toMatchObject({ 
      pathname: "/lancamentos"
    });
    fireEvent.click(button04);
    expect(mockRouter).toMatchObject({ 
      pathname: "/eventos"
    });
  });
});