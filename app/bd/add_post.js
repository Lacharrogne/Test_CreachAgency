import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient();

export default async function handler(req, res){
    const updateResponse = await prisma.response.update({
        where: {
            id: 1
        },
        data: {
            answer: "Maxime"
        }
    })
    res.status(200).send("ok")
}