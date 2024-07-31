"use client"
import React from 'react';
import { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import ComicService from "@/app/helpers/comic.service";
import {AxiosResponse} from "axios";
import {Comic} from "@/app/model/comic.model";




export default function SearchComic(){
    const [issueTitle, setIssueTitle] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [comic, setComic] = useState(Comic._instance);
    const searchComic  = async () =>{
        setIsLoading(true);
        await ComicService.getComicByIssueTitle(issueTitle).then((response: AxiosResponse) => {
            setComic(response.data);
            setIsLoading(false);
        });
    }
    return (
     <div className="grid place-content-center gap-20  ml-5 md:ml-0">
         <div className="flex flex-col lg:flex-row justify-center  gap-6">
             <InputText value={issueTitle} onChange={(e) => setIssueTitle(e.target.value)} type="text" className="w-48 md:w-64 p-2 text-xs md:text-base shadow-xl "  placeholder="Please enter the  Issue title" />
             <Button onClick={searchComic} label="Search"  className="p-3 w-28 text-xs md:text-base rounded-lg  bg-red-700 text-white shadow-xl hover:scale-110  " />
         </div>

         {isLoading &&(
                <div className="flex justify-center items-center">
                    <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading" className="w-20 h-20" />
                </div>
         )}
         <Card  title="Comic Info" className={`${comic?.issueTitle != " "  ? 'block' : 'hidden'} w-60 md:w-80 bg-red-700 text-white`}>
             <p> IssueTitle: {comic?.issueTitle}</p>
             <p> Name: {comic?.comicName}</p>
             <p> Writer: {comic?.writer}</p>
             <p>Penciler: {comic?.penciler}</p>
             <p> Artist: {comic?.coverArtist}</p>
             <p> Format: {comic?.format}</p>
             <p> Price: {comic?.price}</p>
             <p> PusblishDate: {comic?.publishDate}</p>
             <p> Rating: {comic?.rating}</p>
             <p>ActiveYears: {comic?.activeYears}</p>
         </Card>
     </div>
    );
}