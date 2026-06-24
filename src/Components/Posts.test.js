import { render, screen } from '@testing-library/react';
import Post from './Posts';

const DEFAULT_PROPS = {
  username: 'test_user',
  caption: 'This is a test caption',
  likes: 42,
};

describe('Post component', () => {
  it('renders the username passed via props', () => {
    render(<Post {...DEFAULT_PROPS} />);
    const usernameElements = screen.getAllByText(DEFAULT_PROPS.username);
    expect(usernameElements.length).toBeGreaterThan(0);
  });

  it('renders the caption passed via props', () => {
    render(<Post {...DEFAULT_PROPS} />);
    expect(screen.getByText(DEFAULT_PROPS.caption)).toBeInTheDocument();
  });

  it('renders the likes count passed via props', () => {
    render(<Post {...DEFAULT_PROPS} />);
    expect(screen.getByText(new RegExp(String(DEFAULT_PROPS.likes)))).toBeInTheDocument();
  });

  it('does not render hardcoded username when different username is provided', () => {
    render(<Post {...DEFAULT_PROPS} username="another_user" />);
    expect(screen.queryByText('neeraj__chopra')).not.toBeInTheDocument();
  });

  it('does not render hardcoded caption content when different caption is provided', () => {
    render(<Post {...DEFAULT_PROPS} caption="My custom caption" />);
    expect(
      screen.queryByText(/Still processing this feeling/i)
    ).not.toBeInTheDocument();
  });

  it('renders different usernames correctly for different prop values', () => {
    const { rerender } = render(<Post {...DEFAULT_PROPS} username="user_one" />);
    expect(screen.getAllByText('user_one').length).toBeGreaterThan(0);

    rerender(<Post {...DEFAULT_PROPS} username="user_two" />);
    expect(screen.getAllByText('user_two').length).toBeGreaterThan(0);
    expect(screen.queryByText('user_one')).not.toBeInTheDocument();
  });

  it('renders different captions correctly for different prop values', () => {
    const { rerender } = render(<Post {...DEFAULT_PROPS} caption="First caption" />);
    expect(screen.getByText('First caption')).toBeInTheDocument();

    rerender(<Post {...DEFAULT_PROPS} caption="Second caption" />);
    expect(screen.getByText('Second caption')).toBeInTheDocument();
    expect(screen.queryByText('First caption')).not.toBeInTheDocument();
  });

  it('renders different likes counts correctly for different prop values', () => {
    const { rerender } = render(<Post {...DEFAULT_PROPS} likes={100} />);
    expect(screen.getByText(/100/)).toBeInTheDocument();

    rerender(<Post {...DEFAULT_PROPS} likes={200} />);
    expect(screen.getByText(/200/)).toBeInTheDocument();
  });
});