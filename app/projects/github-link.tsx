import type { ReactNode } from 'react';

type GitHubLinkProps = Readonly<{
  href: string;
  children: ReactNode;
}>;

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M12 0.3C5.4 0.3 0 5.7 0 12.4c0 5.3 3.4 9.8 8.2 11.3 0.6 0.1 0.8-0.3 0.8-0.6 0-0.3 0-1.1 0-2.1-3.3 0.7-4-1.5-4-1.5-0.6-1.4-1.3-1.8-1.3-1.8-1.1-0.8 0.1-0.8 0.1-0.8 1.2 0.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.3 3.6 1 0.1-0.8 0.4-1.3 0.8-1.6-2.7-0.3-5.5-1.3-5.5-6 0-1.3 0.5-2.4 1.2-3.3-0.1-0.3-0.5-1.5 0.1-3.2 0 0 1-0.3 3.3 1.2 0.9-0.3 2-0.5 3-0.5s2 0.2 3 0.5c2.2-1.5 3.3-1.2 3.3-1.2 0.6 1.7 0.2 2.9 0.1 3.2 0.8 0.9 1.2 2 1.2 3.3 0 4.7-2.8 5.7-5.5 6 0.4 0.4 0.8 1.1 0.8 2.2 0 1.6 0 2.9 0 3.3 0 0.3 0.2 0.7 0.8 0.6 4.8-1.6 8.2-6 8.2-11.3C24 5.7 18.6 0.3 12 0.3z" />
    </svg>
  );
}

export function GitHubLink({ href, children }: GitHubLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-700"
    >
      <GitHubIcon />
      {children}
    </a>
  );
}
