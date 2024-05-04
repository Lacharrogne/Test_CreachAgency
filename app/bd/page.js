import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient();

export default async function handler(req, res){
    const question = await prisma.question.findMany()
    const option = await prisma.option.findMany()
    console.log(question);
    console.log(option);

    return (
    <div>
        <ul>
        {question.map((question) => (
            <li key={question.id}>
                <h2>{question.title}</h2>
                <p>{question.description}</p>
            </li>
        ))}
        </ul>
    </div>
    )
}