import { render, screen } from '@testing-library/react';
import SideBox from './SideBox';

jest.mock('./SideBoxImage', () => () => <div data-testid="side-box-image" />);
jest.mock('../images/neerajchopra.webp', () => 'neerajchopra.webp');

describe('SideBox', () => {
  it('renders the main profile image with a descriptive alt text for screen readers', () => {
    render(<SideBox />);

    const profileImage = screen.getByAltText('Foto de perfil de Jugesh Raghav');

    expect(profileImage).toBeInTheDocument();
  });
});