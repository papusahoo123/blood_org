"use client";
import { useRouter } from "next/navigation";
export default function RemoveBtn({ id }) {
    const router = useRouter();

    const removeTopic = async () => {
        try {

              const confirmDelete = confirm(
            "Are you sure you want to delete?"
        );

        if (confirmDelete) {

            await fetch(`http://localhost:3000/api/topics?id=${id}`, {
                method: "DELETE",
            });

        }
        if(confirmDelete.ok){
            router.refresh();

        } } catch (error) {
            console.error("Error deleting topic:", error);
        }

      
    };
 

    return (
        <button onClick={removeTopic} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Delete
        </button>
    );
}