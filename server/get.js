"use server"

import { db } from "../lib/prisma";

async function getQuestions() {
    const questions = await db.question.findMany()
    return questions
}

export default getQuestions