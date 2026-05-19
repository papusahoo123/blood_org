

import connectDB from "../../../libs/mogoodb";
import Topic from "../../../models/topic";
import { NextResponse } from "next/server";
 
 

export async function POST(request) {
    try {

        const {
            name,
            bloodType,
            mobile,
            email,
            address,
            message,

            // add these
            showName,
            showMobile,
            showEmail,

        } = await request.json();

        await connectDB();

        await Topic.create({
            name,
            bloodType,
            mobile,
            email,
            address,
            message,

            // save these too
            showName,
            showMobile,
            showEmail,
        });

        return NextResponse.json(
            { message: "Topic Created" },
            { status: 201 }
        );

    } catch (error) {

        console.log(error);

        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}

 



export async function GET() {

    try {   
        await connectDB();

        const topics = await Topic.find();
        return NextResponse.json(
            {
                topics,
            },
            {
                status: 200,
            }
        );  
    } catch (error) {

        console.log(error);
        return NextResponse.json(
            {
                error: error.message,
            },
            {
                status: 500,
            }
        );
    }
}


 

export async function DELETE(request) {

    try {

        await connectDB();

        const { searchParams } = new URL(request.url);

        const id = searchParams.get("id");

        await Topic.findByIdAndDelete(id);

        return NextResponse.json(
            {
                message: "Deleted successfully",
            },
            {
                status: 200,
            }
        );

    } catch (error) {

        console.log(error);

        return NextResponse.json(
            {
                error: error.message,
            },
            {
                status: 500,
            }
        );
    }
}


