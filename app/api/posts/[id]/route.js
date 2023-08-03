// url: http://localhost:3000/api/posts/12345
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"

export const GET = async (request, { params }) => {
    try {
        const { id } = params;
        const cuisine = await prisma.cuisine.findUnique({
            where: {
                id : parseInt(id)
            }
        });   
        if (!cuisine) {
            return NextResponse.json(
                {message: "cuisine not found", err},
                {status: 404}
            )
        }

    return NextResponse.json(cuisine);
        } catch(err) {
            return NextResponse.json({message: "GET i Error", err}, {status: 500})
        }
}

export const PATCH = async (request, {params}) => {
    try {
        const body = await request.json();
        const {name, description} = body;
        const {id} = params;
        const updateCuisine = await prisma.cuisine.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name,
                description
            }
            })
        if (!updateCuisine) {
            return NextResponse.json(
                {message: "Cuisine not found", err},
                {status: 404}
            )
        }
        return NextResponse.json(updateCuisine);
    } catch(err) {
        return NextResponse.json({message: "update Error", err}, {status: 500})
    }
}

export const DELETE = async (request, { params }) => {
    try {
        const { id } = params;
        await prisma.cuisine.delete({
            where: {
                id : parseInt(id)
            }
        });   
        return NextResponse.json("Cuisine has beeen deleted");
    } catch(err) {
        return NextResponse.json({message: "DELETE Error", err}, {status: 500})
    }
}
