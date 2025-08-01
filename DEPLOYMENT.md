# TechFoundry Deployment Guide

## Vercel Deployment

This project is optimized for deployment on Vercel with zero configuration.

### Prerequisites

1. **SendGrid Account**: Set up a SendGrid account for email functionality
   - Sign up at [sendgrid.com](https://sendgrid.com)
   - Verify a sender email address
   - Get your API key from Settings > API Keys

2. **Git Repository**: Push your code to GitHub, GitLab, or Bitbucket

### Deployment Steps

1. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect the configuration

2. **Set Environment Variables**:
   In your Vercel project dashboard, go to Settings > Environment Variables and add:
   ```
   SENDGRID_API_KEY=your_api_key_here
   SENDGRID_FROM_EMAIL=your_verified_sender@domain.com
   SENDGRID_TO_EMAIL=your_business_email@domain.com
   ```

3. **Deploy**:
   - Vercel will automatically build and deploy
   - Your site will be available at `https://your-project-name.vercel.app`

### Custom Domain (Optional)

1. In Vercel project settings, go to Domains
2. Add your custom domain
3. Configure DNS settings as instructed by Vercel

### Automatic Deployments

- Every push to your main branch will trigger a new deployment
- Preview deployments are created for pull requests

### Project Structure

```
TechFoundryLanding/
├── client/                 # React frontend
├── server/                 # Express backend
├── shared/                 # Shared schemas and types
├── dist/                   # Built files (auto-generated)
│   ├── public/            # Static frontend files
│   └── index.js           # Built server
├── vercel.json            # Vercel configuration
└── package.json           # Dependencies and scripts
```

### Build Process

1. Frontend: Vite builds React app to `dist/public/`
2. Backend: esbuild bundles server code to `dist/index.js`
3. Vercel serves static files from `dist/public/` and API routes from `dist/index.js`

### Environment Variables

- `SENDGRID_API_KEY`: Your SendGrid API key
- `SENDGRID_FROM_EMAIL`: Verified sender email
- `SENDGRID_TO_EMAIL`: Your business email (where contact forms are sent)

### Contact Form Flow

1. User submits contact form on website
2. Form data is validated using Zod schema
3. Email notification sent via SendGrid
4. Success/error response returned to user

### Troubleshooting

- **Build fails**: Check that all dependencies are in `package.json`
- **Contact form not working**: Verify SendGrid environment variables
- **502 errors**: Check server logs in Vercel dashboard

### Local Development

```bash
npm install
npm run dev
```

Make sure to create a `.env` file with your SendGrid credentials for local testing.
