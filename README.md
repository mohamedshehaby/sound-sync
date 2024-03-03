# Sound Sync

A sophisticated music streaming platform with seamless audio streaming, curated playlists, and personalized recommendations. Engineered innovative sync functionalities for a user-friendly experience. Demonstrates my proficiency in full-stack development and end-to-end project management.


## Features

- **User Authentication:** Users can sign up and log in using email, GitHub.
- **Browse Content:** Explore a vast library of music, playlists.
- **Favorite List:** Users can add items to their favorite list for easy access later.
- **Search Functionality:** Search for specific movies, TV shows, or actors.
- **Responsive Design:** The application is responsive and works seamlessly across different devices.


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
3. Create a `.env.local` file in the root directory and fill it with your keys: This project using the following environment variables:
    1. Supabase to handel authentication, authorization with JWT, Github OAuth.
   2. Supabase to handle uploading and fetching images, music and other data.

```bash
NEXT_PUBLIC_SUPABASE_URL=<your_supabase_url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your_supabase_anon_key>
SUPABASE_SERVIVE_ROLE_KEY=<your_supabase_service_role_key>
```
4. Run the development server
```bash
npm run dev
```

## Technologies Used

- [React](https://reactjs.org/) - The web framework used
- [Next.js](https://nextjs.org/) - The web framework used
- [TypeScript](https://www.typescriptlang.org/) - The language used
- [npm](https://www.npmjs.com/) - Dependency Management
- [Supabase](https://supabase.io/) - Used for backend services


## Contributing

Contributions are welcome! To contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/improvement).
3. Make your changes.
4. Commit your changes (git commit -m 'Add some feature').
5. Push to the branch (git push origin feature/improvement).
6. Create a new Pull Request.