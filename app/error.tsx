"use client";

import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & {
        digest?: string;
        statusCode: number;
    };
    reset: () => void;
}) {
    console.log("error render");
    return (
        <main>
            <h1>Error</h1>
            <Link href="/">prefetch Link inside error</Link>
            <br />
            <Link href="/" prefetch={false}>
                non-prefetch link inside error
            </Link>
            <p>{error.message}</p>
            <button onClick={reset}>Reset</button>
        </main>
    );
}
