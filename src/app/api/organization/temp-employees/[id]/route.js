export async function PATCH(userId) {
    try {
        await connectMongoDB();
        await TempEmployee.updateOne({ userId: userId }, { pending: true });
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
