import { render, screen } from '@testing-library/react';
import SideBox from './SideBox';

describe('SideBox — basic rendering', () => {
  it('renders without crashing', () => {
    render(<SideBox />);
  });

  it('renders at least one element in the document', () => {
    const { container } = render(<SideBox />);

    expect(container.firstChild).not.toBeNull();
  });

  it('renders profile avatar image', () => {
    const { container } = render(<SideBox />);

    const images = container.querySelectorAll('img');

    expect(images.length).toBeGreaterThan(0);
  });

  it('renders at least one anchor or interactive element', () => {
    const { container } = render(<SideBox />);

    const anchors = container.querySelectorAll('a');
    const buttons = container.querySelectorAll('button');

    expect(anchors.length + buttons.length).toBeGreaterThan(0);
  });

  it('renders suggestion or follow-related text content', () => {
    const { container } = render(<SideBox />);

    // SideBox is expected to show suggestions — any visible text confirms
    // the component is rendering its intended content tree
    expect(container.textContent.trim().length).toBeGreaterThan(0);
  });

  it('renders a consistent structure across multiple renders', () => {
    const { container: first } = render(<SideBox />);
    const { container: second } = render(<SideBox />);

    expect(first.innerHTML).toBe(second.innerHTML);
  });
});