import { render, screen } from '@testing-library/react';
import SideBox from './SideBox';

jest.mock('../images/instalogo.png', () => 'instalogo.png');
jest.mock('../images/instaclone.png', () => 'instaclone.png');
jest.mock('../images/profile.png', () => 'profile.png');

describe('SideBox — image accessibility conformance', () => {
  beforeEach(() => {
    render(<SideBox />);
  });

  it('renders at least one image element', () => {
    const images = screen.getAllByRole('img');

    expect(images.length).toBeGreaterThan(0);
  });

  it('every image has a non-empty alt attribute', () => {
    const images = screen.getAllByRole('img');

    images.forEach((img) => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt').trim()).not.toBe('');
    });
  });

  it('the main image has a descriptive alt text that is not a placeholder or empty string', () => {
    const images = screen.getAllByRole('img');
    const mainImage = images[0];

    const altText = mainImage.getAttribute('alt');

    expect(altText).not.toBeNull();
    expect(altText.trim().length).toBeGreaterThan(0);
  });

  it('no image has an alt attribute consisting only of whitespace', () => {
    const images = screen.getAllByRole('img');

    const imagesWithBlankAlt = Array.from(images).filter(
      (img) => img.getAttribute('alt') !== null && img.getAttribute('alt').trim() === ''
    );

    expect(imagesWithBlankAlt).toHaveLength(0);
  });

  it('the main image alt text conveys meaningful content, not a generic filler value', () => {
    const images = screen.getAllByRole('img');
    const mainImage = images[0];

    const altText = mainImage.getAttribute('alt').trim().toLowerCase();
    const forbiddenPlaceholders = ['image', 'img', 'photo', 'picture', 'untitled', 'test'];

    const isForbidden = forbiddenPlaceholders.some((placeholder) => altText === placeholder);

    expect(isForbidden).toBe(false);
  });
});