// "use client"
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main>
//       <Link href="/">Home</Link>
//       <Link href="/cv">CV</Link>
//       <Link href="/contact">Contact</Link>
//       <Link href="/jeu">Jeu</Link>
//       <Link href="/testApi">API</Link>
//       <Link href="/bd">BD</Link>
//     </main>
//   );
// }
"use server"

import {getQuestions} from "../server/get.js"

async function Page() {
    const questions = await getQuestions()
    return (
        <>
            <h1>Questions:</h1>
            <ul>
                {questions.map((question) => (
                    <li key={question.id}>{question.title}</li>
                ))}
            </ul>
        </>
    );
}

export default Page