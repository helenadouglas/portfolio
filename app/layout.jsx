import "./globals.css";
import Link from "next/link";
import ModeToggle from "./components/ModeToggle";

export const metadata = {
    title: "Helena Douglas",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <link
                href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap"
                rel="stylesheet"
            />
        </head>

        <body>
          <Link href="/" className="home-link">Home</Link>
        {children}
          <ModeToggle />
        </body>
        </html>
    );
}