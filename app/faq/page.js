"use client";
import React, { useEffect, useState } from "react";
import Search from "../components/search";
import { CONTACT_TYPES } from "../../data/contactTypes";
import ContactMethod from "../components/contact-method";
import Faq from "../components/faq";
import useFetchQuestions from "../apiFetches/questions";
import Fuse from 'fuse.js'


const Page = () => {
  const { questions, loading, error } = useFetchQuestions();
  const [currentUrl, setCurrentUrl] = useState("");
  const [finalQuestions, setFinalQuestions] = useState({});


  useEffect(() => { setCurrentUrl(window.location.href);}, []);

  useEffect(() => {    
    if(loading || !questions?.length) return;

    const rawQuery = currentUrl.includes("query=")
      ? decodeURIComponent(currentUrl.split("query=")[1].replace("/\+/g", " "))
      : "";
    const query = rawQuery.trim(); 

    if(!query){
      setFinalQuestions(questions.slice(0,5))
      return;
    }
    const fuse = new Fuse(questions, {
      includeScore: true,
      // threshold: 0.1,
      keys: ['question', 'answer']
    })
    const hits = fuse.search(query).map((i) => i.item)
    setFinalQuestions(hits.length ? hits : questions.slice(0,5))

  }, [currentUrl, questions, loading])


  return (
    <main className="flex w-full flex-col gap-9 dynamic-padding items-center justify-center">
      <div className="max-w-[606px] w-full h-fit flex flex-col gap-6 items-center justify-center text-center">
        <h1 className="w-[392px]">Have Questions? We’ve Got Answers!</h1>
        <p className="w-[392px]">
          Simply type your question below to find the answers you need in
          seconds.
        </p>
        <Search link={"faq"} />
      </div>
      {finalQuestions.length > 1 && <Faq questions={finalQuestions} />}
      <ContactMethod data={CONTACT_TYPES} />
    </main>
  );
};

export default Page;
