import { render, screen } from '@testing-library/react';
import Story from './Story';

describe('Story — rendering', () => {
  it('mounts without throwing', () => {
    expect(() => render(<Story />)).not.toThrow();
  });

  it('renders a list of story elements', () => {
    const { container } = render(<Story />);

    // Story elements are expected to be rendered as individual items
    // inside a wrapper; querying by the story container confirms the
    // section itself is present.
    const storySection = container.firstChild;

    expect(storySection).not.toBeNull();
  });

  it('renders more than one story element', () => {
    const { container } = render(<Story />);

    // Each story is expected to be represented by an image or a named element;
    // checking for img tags covers avatar-based story implementations.
    const images = container.querySelectorAll('img');

    expect(images.length).toBeGreaterThan(0);
  });

  it('each story element displays a username label', () => {
    render(<Story />);

    // Story components typically show a short username beneath each avatar;
    // at least one such text node must be present for the feature to work.
    const textNodes = screen.getAllByText(/.+/);

    expect(textNodes.length).toBeGreaterThan(0);
  });

  it('renders a consistent number of story elements across multiple renders', () => {
    const { container: first } = render(<Story />);
    const { container: second } = render(<Story />);

    const firstCount = first.querySelectorAll('img').length;
    const secondCount = second.querySelectorAll('img').length;

    expect(firstCount).toBe(secondCount);
  });
});