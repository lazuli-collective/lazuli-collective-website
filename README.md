# The Lazuli Collective Website

A modern, static website for The Lazuli Collective — a bespoke adventure network offering curated expeditions, liveaboards, and adventure experiences in Egypt and Turkey.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **React**: 19.x
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (New York style)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Type Safety**: TypeScript 5.x
- **Package Manager**: [Bun](https://bun.sh/)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd lazuli-collective-website

# Install dependencies
bun install

# Start the development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── expeditions/        # Expedition listing and detail pages
│   ├── network/            # Partner network page
│   ├── partner/            # Partner application page
│   ├── globals.css         # Global styles and CSS variables
│   ├── layout.tsx          # Root layout with fonts and metadata
│   └── page.tsx            # Homepage
│
├── components/             # React components
│   ├── ui/                 # shadcn/ui base components
│   └── *.tsx               # Feature components
│
├── lib/                    # Utilities and data
│   ├── constants.ts        # Brand, contact, SEO, layout constants
│   ├── types.ts            # TypeScript type definitions
│   ├── expeditions-data.ts # Expedition content
│   ├── partners-data.ts    # Partner network content
│   └── utils.ts            # Utility functions (cn, etc.)
│
├── hooks/                  # Custom React hooks
│
├── public/                 # Static assets
│   ├── images/             # Organized image assets
│   │   ├── expeditions/    # Expedition photos
│   │   ├── partners/       # Partner logos
│   │   ├── hero/           # Hero and background images
│   │   └── placeholders/   # Placeholder images
│   ├── icons/              # App icons and favicons
│   └── robots.txt          # SEO robots file
│
└── out/                    # Static export output (generated)
```

## Configuration

### Brand & Contact Settings

All brand information, contact details, and layout constants are centralized in [`lib/constants.ts`](lib/constants.ts):

```typescript
// Update these values for your deployment
export const CONTACT = {
  whatsapp: {
    number: "+201234567890", // Your WhatsApp number
    // ...
  },
  email: "hello@thelazulicollective.com",
  // ...
}

export const SOCIAL = {
  instagram: "", // Add your social URLs
  facebook: "",
  youtube: "",
}
```

### Adding Expeditions

Add new expeditions in [`lib/expeditions-data.ts`](lib/expeditions-data.ts):

```typescript
{
  id: "unique-expedition-slug",
  title: "Expedition Title",
  location: "Egypt, Red Sea",
  // ... see existing expeditions for full structure
}
```

### Adding Partners

Add new partners in [`lib/partners-data.ts`](lib/partners-data.ts):

```typescript
{
  name: "Partner Name",
  type: "Dive Center",
  location: "Hurghada, Egypt",
  tier: "Signature", // or "Verified"
  logo: "/images/partners/partner-name.jpg",
  description: "Partner description...",
}
```

## Design System

### Colors

The site uses a custom "Lazuli" color palette defined as CSS variables in [`app/globals.css`](app/globals.css):

| Variable       | Description                      |
| -------------- | -------------------------------- |
| `--lazuli`     | Deep lazuli blue (primary brand) |
| `--sand`       | Warm sand (secondary)            |
| `--terracotta` | Terracotta (accent)              |
| `--stone`      | Stone gray (neutral)             |

Both light and dark modes are supported.

### Fonts

- **Sans**: Inter (body text)
- **Serif**: Playfair Display (headings)

### Spacing

Standard section padding: `py-24` (6rem vertical padding)
Container max-width: `max-w-7xl` (80rem)
Container padding: `px-6` (1.5rem horizontal)

## Building for Production

```bash
# Build static export
bun run build

# The static site is generated in the /out directory
```

The site is configured for static export (`output: "export"` in `next.config.ts`), generating fully static HTML files ready for deployment to any static hosting service.

## Deployment

### Cloudflare Pages

1. Connect your repository to Cloudflare Pages
2. Build settings:
   - **Build command**: `bun run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (or your project root)
3. Deploy!

### Other Static Hosts

The `/out` directory can be deployed to any static hosting service:

- Netlify
- Vercel (though consider using their native Next.js support)
- GitHub Pages
- AWS S3 + CloudFront
- Any web server

## Development

### Scripts

| Command                | Description                              |
| ---------------------- | ---------------------------------------- |
| `bun dev`              | Start development server                 |
| `bun run build`        | Build static export and create `out.zip` |
| `bun run build:only`   | Build static export without zipping      |
| `bun run zip`          | Zip the `/out` directory to `out.zip`    |
| `bun run lint`         | Run ESLint                               |
| `bun run format`       | Format code with Prettier                |
| `bun run format:check` | Check code formatting                    |

### Code Formatting

The project uses Prettier with Tailwind CSS plugin. Configuration is in [`.prettierrc`](.prettierrc).

```bash
# Format all files
bun run format

# Check formatting
bun run format:check
```

### Forms

Contact, partner application, and expedition request forms use `mailto:` links to open the user's email client with pre-filled content. Update the email address in [`lib/constants.ts`](lib/constants.ts).

## License

See [LICENSE.md](LICENSE.md) for details.
