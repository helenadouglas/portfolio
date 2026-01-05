import "./globals.css";

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
        {children}
        </body>
        </html>
    );
}