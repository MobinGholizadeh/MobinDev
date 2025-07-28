import Head from "next/head";

export default function SEO() {
    return (
        <Head>
            <title>Mobin Gholizadeh | Full Stack Developer</title>
            <meta name="description" content="Mobin Gholizadeh - Full stack developer specializing in .NET, React, TypeScript, Next.js and more." />
            <meta name="keywords" content="Mobin Gholizadeh, Mobin, Full Stack Developer, .NET, React, Next.js, Iran" />
            <meta name="author" content="Mobin Gholizadeh" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <meta property="og:title" content="Mobin Gholizadeh | Full Stack Developer" />
            <meta property="og:description" content="Mobin Gholizadeh - Full stack developer specializing in .NET, React, TypeScript, Next.js and more." />
            <meta property="og:url" content="https://mobingholizadeh.ir" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://mobingholizadeh.ir/og-image.png" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Mobin Gholizadeh | Full Stack Developer" />
            <meta name="twitter:description" content="Mobin Gholizadeh - Full stack developer specializing in .NET, React, TypeScript, Next.js and more." />
            <meta name="twitter:image" content="https://mobingholizadeh.ir/og-image.png" />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: "Mobin Gholizadeh",
                        url: "https://mobingholizadeh.ir",
                        sameAs: [
                            "https://github.com/MobinGholizadeh",
                            "https://linkedin.com/in/mobingholizadeh"
                        ],
                        jobTitle: "Full Stack Developer",
                        worksFor: { "@type": "Organization", name: "Freelance" }
                    })
                }}
            />
        </Head>
    );
}