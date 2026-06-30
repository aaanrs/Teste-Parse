import { render, screen } from '@testing-library/react';
import Story from './Story';

describe('Story — container rendering', () => {
  it('renders without throwing a runtime error', () => {
    expect(() => render(<Story />)).not.toThrow();
  });

  it('mounts and produces at least one DOM node', () => {
    const { container } = render(<Story />);

    expect(container.firstChild).not.toBeNull();
  });

  it('renders the stories container into the document', () => {
    const { container } = render(<Story />);

    expect(document.body.contains(container.firstChild)).toBe(true);
  });
});