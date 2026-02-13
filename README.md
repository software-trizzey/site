[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsoftware-trizzey%2Fsite)

# tristandeane.ca

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Postgres](https://vercel.com/postgres)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## Running Locally

This application requires Node.js v25+ (Next.js minimum is v20.9.0).

Ensure you have [pnpm installed](https://pnpm.io/installation).

```bash
git clone https://github.com/software-trizzey/site.git
cd site
pnpm install
pnpm run delete # Remove all of my notes
pnpm dev
```

Optional: Create a `.env.local` file with your `POSTGRES_URL` environment variable to store redirects.

## Database Schema

```sql
CREATE TABLE redirects (
  id SERIAL PRIMARY KEY,
  source VARCHAR(255) NOT NULL,
  destination VARCHAR(255) NOT NULL,
  permanent BOOLEAN NOT NULL
);
```

## License

This site builds on the work of Lee Rob's [website](https://github.com/leerob/site), and I'm grateful for the inspiration.

1. You are free to use this code as inspiration.
2. Please do not copy it directly.
3. Crediting the author is appreciated.

Please remove all of my personal information by running `pnpm run delete`.
