import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { hash } from "bcryptjs"

export async function POST(req: Request) {
  const { name, email, password } = await req.json()

  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 })
  }

  const hashed = await hash(password, 12)

  const user = await prisma.user.create({
    data: { name, email, password: hashed },
  })

  return NextResponse.json(user, { status: 201 })
}
