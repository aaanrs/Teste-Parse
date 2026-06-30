import { render, screen } from '@testing-library/react';
import StoryElement from './StoryElement';

const MOCK_PROPS = {
  username: 'testuser',
  avatar: 'https://i.pravatar.cc/150?img=42',
};

describe('StoryElement — rendering with mocked props', () => {
  it('renders the username in the DOM', () => {
    render(<StoryElement username={MOCK_PROPS.username} avatar={MOCK_PROPS.avatar} />);

    expect(screen.getByText(MOCK_PROPS.username)).toBeInTheDocument();
  });

  it('renders an avatar image in the DOM', () => {
    render(<StoryElement username={MOCK_PROPS.username} avatar={MOCK_PROPS.avatar} />);

    const avatarImage = screen.getByRole('img');

    expect(avatarImage).toBeInTheDocument();
  });

  it('renders the avatar with the correct src attribute', () => {
    render(<StoryElement username={MOCK_PROPS.username} avatar={MOCK_PROPS.avatar} />);

    const avatarImage = screen.getByRole('img');

    expect(avatarImage).toHaveAttribute('src', MOCK_PROPS.avatar);
  });

  it('renders the avatar with an alt attribute referencing the username', () => {
    render(<StoryElement username={MOCK_PROPS.username} avatar={MOCK_PROPS.avatar} />);

    const avatarImage = screen.getByRole('img');

    expect(avatarImage).toHaveAttribute('alt', MOCK_PROPS.username);
  });

  it('renders both avatar and username when both props are provided', () => {
    render(<StoryElement username={MOCK_PROPS.username} avatar={MOCK_PROPS.avatar} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(MOCK_PROPS.username)).toBeInTheDocument();
  });

  it('renders different usernames correctly when props change', () => {
    const alternativeUsername = 'anotheruser';
    const alternativeAvatar = 'https://i.pravatar.cc/150?img=99';

    render(<StoryElement username={alternativeUsername} avatar={alternativeAvatar} />);

    expect(screen.getByText(alternativeUsername)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', alternativeAvatar);
  });
});