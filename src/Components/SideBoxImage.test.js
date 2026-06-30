import { render, screen } from '@testing-library/react';
import SideBoxImage from './SideBoxImage';

const MOCK_IMAGE_SRC = 'https://i.pravatar.cc/150?img=10';
const MOCK_NAME = 'John Doe';

describe('SideBoxImage — rendering with image and name props', () => {
  it('renders an img element when an image src is provided', () => {
    render(<SideBoxImage image={MOCK_IMAGE_SRC} name={MOCK_NAME} />);

    const imgElement = screen.getByRole('img');

    expect(imgElement).toBeInTheDocument();
  });

  it('renders the img element with the correct src prop', () => {
    render(<SideBoxImage image={MOCK_IMAGE_SRC} name={MOCK_NAME} />);

    const imgElement = screen.getByRole('img');

    expect(imgElement).toHaveAttribute('src', MOCK_IMAGE_SRC);
  });

  it('renders the name text when a name prop is provided', () => {
    render(<SideBoxImage image={MOCK_IMAGE_SRC} name={MOCK_NAME} />);

    expect(screen.getByText(MOCK_NAME)).toBeInTheDocument();
  });

  it('renders a different name when a different name prop is supplied', () => {
    const alternativeName = 'Jane Smith';

    render(<SideBoxImage image={MOCK_IMAGE_SRC} name={alternativeName} />);

    expect(screen.getByText(alternativeName)).toBeInTheDocument();
  });

  it('renders a different img src when a different image prop is supplied', () => {
    const alternativeImage = 'https://i.pravatar.cc/150?img=20';

    render(<SideBoxImage image={alternativeImage} name={MOCK_NAME} />);

    const imgElement = screen.getByRole('img');

    expect(imgElement).toHaveAttribute('src', alternativeImage);
  });

  it('renders the img element with an alt attribute related to the name', () => {
    render(<SideBoxImage image={MOCK_IMAGE_SRC} name={MOCK_NAME} />);

    const imgElement = screen.getByRole('img');

    expect(imgElement).toHaveAttribute('alt');
    expect(imgElement.getAttribute('alt')).not.toBe('');
  });
});