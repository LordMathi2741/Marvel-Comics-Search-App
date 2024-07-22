
import SearchComic from "@/app/components/search-comic.component";

export default function HomeScreen(){
    return (
        <div className="m-20 grid place-content-center gap-3 ">
           <h1 className="font-bold text-red-600 text-center text-sm md:text-base lg:text-2xl"> Search comic by Issue title</h1>
            <SearchComic/>
        </div>
    );
}