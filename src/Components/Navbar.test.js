import { render } from '@testing-library/react';
import Navbar from './Navbar';

jest.mock('../images/instalogo.png', () => 'instalogo.png');

describe('Navbar — JSX className conformance', () => {
  let container;

  beforeEach(() => {
    ({ container } = render(<Navbar />));
  });

  it('renders <i> elements with className attribute, not the native class attribute', () => {
    const iElements = container.querySelectorAll('i');

    expect(iElements.length).toBeGreaterThan(0);

    iElements.forEach((el) => {
      // In JSX, `class` must be written as `className`; React maps it to the
      // DOM `class` attribute correctly, but the prop must be `className` in
      // source. If the native `class` attribute string is present on the React
      // element props it means `className` was never set, so the DOM node's
      // className property would be empty.
      expect(el.className).not.toBe('');
    });
  });

  it('every <i> element has a non-empty className reflecting a Font Awesome icon class', () => {
    const iElements = container.querySelectorAll('i');

    iElements.forEach((el) => {
      expect(el.className.trim().length).toBeGreaterThan(0);
    });
  });

  it('no <i> element carries an empty or missing className', () => {
    const iElements = container.querySelectorAll('i');

    const elementsWithoutClassName = Array.from(iElements).filter(
      (el) => !el.className || el.className.trim() === ''
    );

    expect(elementsWithoutClassName).toHaveLength(0);
  });

  it('renders the expected number of icon elements', () => {
    const EXPECTED_ICON_COUNT = 6;
    const iElements = container.querySelectorAll('i');

    expect(iElements).toHaveLength(EXPECTED_ICON_COUNT);
  });

  it('contains the search icon with the correct className', () => {
    const iElements = Array.from(container.querySelectorAll('i'));
    const searchIcon = iElements.find((el) =>
      el.className.includes('fa-search')
    );

    expect(searchIcon).toBeDefined();
    expect(searchIcon.className).toContain('fas');
  });

  it('contains the home icon with the correct className', () => {
    const iElements = Array.from(container.querySelectorAll('i'));
    const homeIcon = iElements.find((el) =>
      el.className.includes('fa-home')
    );

    expect(homeIcon).toBeDefined();
    expect(homeIcon.className).toContain('fas');
  });
});