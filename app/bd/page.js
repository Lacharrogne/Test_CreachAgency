import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

// const Response = await prisma.response.create({

//     data: {
//         questionId: 1,
//         answer: "Maxime test"
//     },
// })

// if (POST){
//     await prisma.response.create({

//         data: {
//             questionId: 1,
//             answer: "Maxime test"
//         },
//     })
// }

async function handler(req, res){
    const question = await prisma.question.findMany({orderBy: { id: 'asc' } })
    const option = await prisma.option.findMany()
    console.log(question);
    console.log(option);
    
    return (
    <form method='POST'>
        <ul>
        {question.map((question) => (
            <li key={question.id}>
                <h2>{question.title}</h2>
                <p>{question.description}</p>
                
                {option.map((option) => (
                <span key={option.id}>
                    {option.questionId === question.id && (
                        <div>
                            <input type={question.type} name={option.questionId} id={option.id} />
                            <label htmlFor={option.questionId}>{option.text}</label>
                        </div>
                )}
                </span>
            ))}
            </li>
        ))}
        </ul>
        <button></button>
    </form>
    )
}

export default handler