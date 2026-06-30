import { render, screen } from '@testing-library/react';
import SideBox from './SideBox';

describe('SideBox — basic rendering', () => {
  it('mounts without throwing', () => {
    expect(() => render(<SideBox />)).not.toThrow();
  });

  it('renders a root element in the document', () => {
    const { container } = render(<SideBox />);

    expect(container.firstChild).not.toBeNull();
  });

  it('renders children passed to it', () => {
    render(
      <SideBox>
        <span data-testid="child-element">child content</span>
      </SideBox>
    );

    expect(screen.getByTestId('child-element')).toBeInTheDocument();
    expect(screen.getByText('child content')).toBeInTheDocument();
  });

  it('renders multiple children without error', () => {
    render(
      <SideBox>
        <span data-testid="first-child">first</span>
        <span data-testid="second-child">second</span>
      </SideBox>
    );

    expect(screen.getByTestId('first-child')).toBeInTheDocument();
    expect(screen.getByTestId('second-child')).toBeInTheDocument();
  });

  it('renders without children without throwing', () => {
    expect(() => render(<SideBox />)).not.toThrow();
  });

  it('renders with null children without throwing', () => {
    expect(() => render(<SideBox>{null}</SideBox>)).not.toThrow();
  });
});