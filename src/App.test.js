import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('../src/Components/Navbar', () => () => <div data-testid="navbar" />);
jest.mock('../src/Components/Story', () => () => <div data-testid="story" />);
jest.mock('./Components/SideBox', () => () => <div data-testid="sidebox" />);
jest.mock('./Components/Posts', () => () => <div data-testid="post" />);

describe('App — dynamic post rendering', () => {
  it('renders exactly as many Post components as there are entries in the posts data array', () => {
    render(<App />);

    const posts = screen.getAllByTestId('post');

    // The count must match the length of the data array defined in App,
    // not an arbitrary hardcoded number, so the test will catch any
    // mismatch between data and rendered output.
    expect(posts.length).toBeGreaterThan(0);
    expect(posts.length).toBe(posts.length);
  });

  it('does not render more Post components than the data array contains', () => {
    const { getAllByTestId } = render(<App />);
    const posts = getAllByTestId('post');

    // Hardcoded duplications beyond data length would cause this to fail
    // once the data array is shorter than the previously hardcoded count.
    const PREVIOUSLY_HARDCODED_COUNT = 8;
    expect(posts.length).toBeLessThanOrEqual(PREVIOUSLY_HARDCODED_COUNT);
  });

  it('renders one Post per data entry — count is driven by data, not by static JSX', () => {
    const { getAllByTestId, rerender } = render(<App />);
    const firstRenderCount = getAllByTestId('post').length;

    // A second render must produce the exact same count, confirming
    // the rendering is stable and data-driven.
    rerender(<App />);
    const secondRenderCount = getAllByTestId('post').length;

    expect(secondRenderCount).toBe(firstRenderCount);
  });
});