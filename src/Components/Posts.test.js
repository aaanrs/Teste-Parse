import { render, screen } from '@testing-library/react';
import Posts from './Posts';

const MOCK_POST = {
  author: 'Test Author',
  content: 'This is a test post content.',
  likes: 42,
  comments: 7,
  timestamp: '1 hour ago',
  avatar: 'https://i.pravatar.cc/150?img=99',
};

describe('Posts — basic rendering', () => {
  beforeEach(() => {
    render(
      <Posts
        author={MOCK_POST.author}
        content={MOCK_POST.content}
        likes={MOCK_POST.likes}
        comments={MOCK_POST.comments}
        timestamp={MOCK_POST.timestamp}
        avatar={MOCK_POST.avatar}
      />
    );
  });

  it('renders the author name', () => {
    expect(screen.getByText(MOCK_POST.author)).toBeInTheDocument();
  });

  it('renders the post content', () => {
    expect(screen.getByText(MOCK_POST.content)).toBeInTheDocument();
  });

  it('renders the likes count', () => {
    expect(screen.getByText(new RegExp(String(MOCK_POST.likes)))).toBeInTheDocument();
  });

  it('renders the comments count', () => {
    expect(screen.getByText(new RegExp(String(MOCK_POST.comments)))).toBeInTheDocument();
  });

  it('renders the timestamp', () => {
    expect(screen.getByText(MOCK_POST.timestamp)).toBeInTheDocument();
  });

  it('renders the avatar image with the provided src', () => {
    const avatarImg = screen.getByRole('img');
    expect(avatarImg).toHaveAttribute('src', MOCK_POST.avatar);
  });
});

describe('Posts — prop variations', () => {
  it('renders different author names correctly', () => {
    const differentAuthor = 'Jane Doe';
    render(
      <Posts
        author={differentAuthor}
        content={MOCK_POST.content}
        likes={MOCK_POST.likes}
        comments={MOCK_POST.comments}
        timestamp={MOCK_POST.timestamp}
        avatar={MOCK_POST.avatar}
      />
    );
    expect(screen.getByText(differentAuthor)).toBeInTheDocument();
  });

  it('renders zero likes without crashing', () => {
    render(
      <Posts
        author={MOCK_POST.author}
        content={MOCK_POST.content}
        likes={0}
        comments={MOCK_POST.comments}
        timestamp={MOCK_POST.timestamp}
        avatar={MOCK_POST.avatar}
      />
    );
    expect(screen.getByText(/0/)).toBeInTheDocument();
  });

  it('renders zero comments without crashing', () => {
    render(
      <Posts
        author={MOCK_POST.author}
        content={MOCK_POST.content}
        likes={MOCK_POST.likes}
        comments={0}
        timestamp={MOCK_POST.timestamp}
        avatar={MOCK_POST.avatar}
      />
    );
    // Ensures the component does not blow up with edge-case numeric props
    expect(screen.getByText(MOCK_POST.author)).toBeInTheDocument();
  });

  it('renders long content strings without truncation or error', () => {
    const longContent = 'A'.repeat(300);
    render(
      <Posts
        author={MOCK_POST.author}
        content={longContent}
        likes={MOCK_POST.likes}
        comments={MOCK_POST.comments}
        timestamp={MOCK_POST.timestamp}
        avatar={MOCK_POST.avatar}
      />
    );
    expect(screen.getByText(longContent)).toBeInTheDocument();
  });
});