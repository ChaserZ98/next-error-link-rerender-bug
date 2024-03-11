import Link from "next/link";

export default function RootLayout({ children }) {
    return (
        <html>
            <head />
            <body>
                <Link href="/">prefetch Link</Link>
                <br />
                <Link href="/" prefetch={false}>
                    non-prefetch Link
                </Link>
                {children}
            </body>
        </html>
    );
}
