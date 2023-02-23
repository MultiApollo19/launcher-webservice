import Image from "next/image";

export default function Loading() {
    return (
        <main >
            <div className="flex justify-center flex-col place-items-center">
                <p className="text-white text-5xl mb-10 mt-40">Loading...</p>
                <Image src="/Assets/tail-spin.svg" width={64} height={64} />
            </div>


        </main>
    );
}