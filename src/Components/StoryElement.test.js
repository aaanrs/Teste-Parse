import { render, screen } from '@testing-library/react';
import StoryElement from './StoryElement';

const DEFAULT_AVATAR = 'https://i.pravatar.cc/150?img=10';
const DEFAULT_NAME = 'Jane Doe';

describe('StoryElement — rendering', () => {
  it('renders the avatar image with the provided src', () => {
    render(<StoryElement avatar={DEFAULT_AVATAR} name={DEFAULT_NAME} />);

    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', DEFAULT_AVATAR);
  });

  it('renders the name text provided via props', () => {
    render(<StoryElement avatar={DEFAULT_AVATAR} name={DEFAULT_NAME} />);

    expect(screen.getByText(DEFAULT_NAME)).toBeInTheDocument();
  });

  it('renders a different avatar src when a different prop is passed', () => {
    const altAvatar = 'https://i.pravatar.cc/150?img=20';

    render(<StoryElement avatar={altAvatar} name={DEFAULT_NAME} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', altAvatar);
  });

  it('renders a different name when a different prop is passed', () => {
    const altName = 'John Smith';

    render(<StoryElement avatar={DEFAULT_AVATAR} name={altName} />);

    expect(screen.getByText(altName)).toBeInTheDocument();
  });

  it('does not render the wrong name', () => {
    render(<StoryElement avatar={DEFAULT_AVATAR} name={DEFAULT_NAME} />);

    expect(screen.queryByText('Wrong Name')).not.toBeInTheDocument();
  });

  it('renders with an empty name without crashing', () => {
    render(<StoryElement avatar={DEFAULT_AVATAR} name="" />);

    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
  });

  it('renders with an empty avatar src without crashing', () => {
    render(<StoryElement avatar="" name={DEFAULT_NAME} />);

    expect(screen.getByText(DEFAULT_NAME)).toBeInTheDocument();
  });
});