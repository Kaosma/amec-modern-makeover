# AMEC Konsult

A React application built with Vite and TypeScript, styled with Tailwind CSS and shadcn/ui. The website is deployed to Cloudflare Pages.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Cloudflare Pages
- Cloudflare Pages Functions
- Resend for inquiry form emails

## Requirements

- Node.js (current LTS version recommended)
- pnpm
- A Cloudflare account with the project connected to a Git repository
- A Resend account and a verified sending domain for production email delivery

## Getting Started

Clone the repository and install dependencies:

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
pnpm install
```

Start the local development server:

```sh
pnpm dev
```

The Vite development server serves the frontend. Cloudflare Pages Functions do not run automatically through Vite, so use Wrangler to test the inquiry form locally.

## Available Scripts

Check `package.json` for the scripts configured in this project. A typical setup includes:

```sh
pnpm dev       # Start the development server
pnpm build     # Build the production site
pnpm preview   # Preview the production build
pnpm lint      # Run linting, if configured
```

Only run scripts that exist in `package.json`.

## Project Structure

```text
.
├── functions/
│   └── api/
│       └── send-inquiry.js   # Inquiry email API endpoint
├── public/                   # Static assets
├── src/                      # React application
├── index.html
├── package.json
└── vite.config.ts
```

The `functions/` directory must be at the repository root, alongside `src` and `package.json`. Do not place it inside `src` or the build output directory.

## Inquiry Form and Email Delivery

The inquiry form submits a POST request to:

```text
/api/send-inquiry
```

Cloudflare Pages handles the request through `functions/api/send-inquiry.js`. The function validates submitted data on the server and uses Resend to send the inquiry to the configured recipient.

### Dependencies

Install the required dependencies if they are not already present:

```sh
pnpm add resend zod
pnpm add -D wrangler
```

### Resend Setup

1. Create an account at [Resend](https://resend.com/).
2. Add the sending domain in Resend.
3. Add the DNS records provided by Resend at the domain's DNS provider.
4. Wait until Resend verifies the domain.
5. Create a Resend API key.

The sender address must use a domain verified in Resend. The recipient can be the client's existing business email address.

### Local Environment Variables

Create a `.dev.vars` file in the project root:

```dotenv
RESEND_API_KEY=re_your_actual_key
RESEND_FROM_EMAIL="AMEC Konsult <formular@amecokonsult.se>"
INQUIRY_TO_EMAIL=client@amecokonsult.se
```

Replace the example values with the actual API key, verified sender address, and destination inbox.

Make sure `.dev.vars` is included in `.gitignore`. Never commit API keys or other secrets to the repository.

### Test the Inquiry Form Locally

Build the site and start the Cloudflare Pages development server:

```sh
pnpm build
pnpm exec wrangler pages dev dist
```

Open the local URL printed by Wrangler and submit a test inquiry.

This assumes Vite outputs the production build to `dist`. If the configured output directory is different, use that directory instead.

### Production Environment Variables

In the Cloudflare dashboard:

1. Open **Workers & Pages**.
2. Select the AMEC Konsult Pages project.
3. Open **Settings → Variables and Secrets**.
4. Add the following variables to the Production environment:

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key; store as a secret |
| `RESEND_FROM_EMAIL` | Verified sender address |
| `INQUIRY_TO_EMAIL` | Email address receiving inquiries |

Add the variables to the Preview environment only if preview deployments should be able to send emails.

Redeploy the project after changing the configuration.

**Never prefix the Resend API key with `VITE_`.** Variables exposed to Vite client code must not contain secrets.

## Deployment

The project is deployed to Cloudflare Pages.

For a typical Vite React application, configure the Pages project with:

- **Production branch:** The branch used for production, commonly `main`
- **Build command:** `pnpm build`
- **Build output directory:** `dist`

Commit and push changes to the connected Git repository to trigger a deployment.

Ensure that the root-level `functions/` directory is included in the repository so Cloudflare Pages can deploy the API endpoint alongside the website.

Cloudflare Pages Functions require a supported Pages deployment workflow. The standard Direct Upload workflow does not support Pages Functions.

## Security and Troubleshooting

- Never expose the Resend API key in frontend code.
- Never commit `.dev.vars` or other files containing secrets.
- Validate submitted form data on the server.
- Limit accepted input sizes and escape user-provided content before including it in HTML emails.
- Consider Cloudflare Turnstile and/or rate limiting to reduce automated spam.
- If email delivery fails, check the Cloudflare Pages function logs and Resend email logs.
- A successful API response means Resend accepted the email request; it does not guarantee that the message reached the recipient's inbox.

## Development Workflow

Make changes in your preferred editor or IDE. Commit and push changes to the Git repository connected to Cloudflare Pages to trigger a deployment.
