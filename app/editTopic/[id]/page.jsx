 



import EditTopicForm from "@/app/comp/EditTopicForm";

const getTopic = async (id) => {
    try {

        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topic");
        }

        return res.json();

    } catch (error) {
        console.log(error);

        return { topic: null };
    }
};

export default async function EditTopic({ params }) {

    const { id } = await params;

    const { topic } = await getTopic(id);

    const {
        name,
        bloodType,
        mobile,
        email,
        address,
        message,
    } = topic || {};

    return (
        <>
            <EditTopicForm
                id={id}
                name={name}
                bloodType={bloodType}
                mobile={mobile}
                email={email}
                address={address}
                message={message}
            />
        </>
    );
}