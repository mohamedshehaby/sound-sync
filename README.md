# Sound Sync

This is a web application for sound streaming built with TypeScript, JavaScript, React, and npm. It uses Stripe for payment processing and Supabase for backend services.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository
```bash
git clone https://github.com/mohamedshehaby/sound-sync
```
2. Install dependencies
```bash
npm install
```
3. Create a `.env.local` file in the root directory and fill it with your keys:
```bash
NEXT_PUBLIC_SUPABASE_URL=<your_supabase_url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your_supabase_anon_key>
SUPABASE_SERVIVE_ROLE_KEY=<your_supabase_service_role_key>
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<your_stripe_publishable_key>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
STRIPE_WEBHOOK_SECRET=<your_stripe_webhook_secret>
```
4. Run the development server
```bash
npm run dev
```

## Built With

- [React](https://reactjs.org/) - The web framework used
- [TypeScript](https://www.typescriptlang.org/) - The language used
- [npm](https://www.npmjs.com/) - Dependency Management
- [Stripe](https://stripe.com/) - Used for payment processing
- [Supabase](https://supabase.io/) - Used for backend services
