 

import connectDB from "../../../../libs/mogoodb";
import Topic from "../../../../models/topic";
import { NextResponse } from "next/server";

// GET SINGLE TOPIC
export async function GET(request, { params }) {
    try {
        await connectDB();

        const { id } = await params;

        const topic = await Topic.findById(id);

        return NextResponse.json(
            { topic },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}

// UPDATE TOPIC
export async function PUT(request, { params }) {
    try {
        await connectDB();

        const { id } = await params;

        const body = await request.json();

        const updatedTopic = await Topic.findByIdAndUpdate(
            id,
            body,
            { new: true }
        );

        return NextResponse.json(
            {
                message: "Updated Successfully",
                updatedTopic,
            },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}

// DELETE TOPIC
export async function DELETE(request, { params }) {
    try {
        await connectDB();

        const { id } = await params;

        await Topic.findByIdAndDelete(id);

        return NextResponse.json(
            { message: "Deleted Successfully" },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}