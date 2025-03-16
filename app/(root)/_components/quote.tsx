import Image from "next/image";

const QuotePage = () => {
    return (
        <div className="flex items-center justify-center h-full flex-col gap-8">
            <div className="p-8 md:w-[880px]">
                <h1 className="text-2xl font-semibold text-center">&quot;La mode afro est une célébration de notre héritage, une expression de notre identité et une fierté pour nos racines &quot;</h1>

            </div>
            <Image
                src={"/profile.jpg"}
                alt={"Novus Technologies"}
                width={200}
                height={200}
                className="rounded-full"
            />
            <div className="text-center">
                <h1>Miss. Beatrice FOGUE</h1>
                <span>Fondatrice de Beatrice Designs</span>
            </div>

        </div>
    );
}

export default QuotePage;