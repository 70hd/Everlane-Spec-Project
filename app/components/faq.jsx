import React from "react";

const QuestionAnswer = ({ question, answer }) => {
  return (
    <div className="w-full h-fit md:py-12 dynamic-y-padding px-6 flex flex-col custom-gap-3 border-t-[1px] border-t-black">
      <h2>{question}</h2>
      <p>{answer}</p>
    </div>
  );
};
const Faq = ({ questions }) => {

  return (
    <section className="w-full">
      {questions.map((i,id) => {
        return <QuestionAnswer question={i.question} answer={i.answer} key={id}/>;
      })}
    </section>
  );
};

export default Faq;
