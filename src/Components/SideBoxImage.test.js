import { render, screen } from '@testing-library/react';
import SideBoxImage from './SideBoxImage';

const DEFAULT_IMAGE = 'https://i.pravatar.cc/150?img=10';
const DEFAULT_NAME = 'Jane Doe';

describe('SideBoxImage — rendering', () => {
  it('renders an image element', () => {
    render(<SideBoxImage image={DEFAULT_IMAGE} name={DEFAULT_NAME} />);

    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
  });

  it('renders the image with the provided src', () => {
    render(<SideBoxImage image={DEFAULT_IMAGE} name={DEFAULT_NAME} />);

    const img = screen.getByRole('img');

    expect(img).toHaveAttribute('src', DEFAULT_IMAGE);
  });

  it('renders the name text', () => {
    render(<SideBoxImage image={DEFAULT_IMAGE} name={DEFAULT_NAME} />);

    expect(screen.getByText(DEFAULT_NAME)).toBeInTheDocument();
  });

  it('renders with a different image and name', () => {
    const image = 'https://i.pravatar.cc/150?img=20';
    const name = 'John Smith';

    render(<SideBoxImage image={image} name={name} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', image);
    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it('renders without crashing when name is an empty string', () => {
    render(<SideBoxImage image={DEFAULT_IMAGE} name="" />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders without crashing when image is an empty string', () => {
    render(<SideBoxImage image="" name={DEFAULT_NAME} />);

    const img = screen.getByRole('img');

    expect(img).toHaveAttribute('src', '');
  });

  it('does not render the name of a different user', () => {
    render(<SideBoxImage image={DEFAULT_IMAGE} name="Alice" />);

    expect(screen.queryByText('Bob')).not.toBeInTheDocument();
  });
});