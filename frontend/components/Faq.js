import ReactMarkdown from "react-markdown";
import { getStrapiURL } from "../lib/api";

const Questions = ({ answers }) => (
  <ul className="list-none space-y-4 text-4xl mb-3">
    {answers &&
      answers.map((answer) => {
        return (
          <li key={answer.id}>
            <div className="flex flex-col last:mb-0 ">
              <div className="flex mb-4 text-base">
                <p className="pr-1 font-serif font-semibold">Q:</p>
                <p className="font-['Open-Sans'] italic text-lg">
                  {answer.attributes.question}
                </p>
              </div>
              <div
                id="margin"
                className="font-['Open-Sans'] first-letter:mb-8 text-lg font-normal leading-5"
              >
                <ReactMarkdown transformImageUri={(uri) => getStrapiURL(uri)}>
                  {answer.attributes.answer}
                </ReactMarkdown>
              </div>
            </div>
          </li>
        );
      })}
  </ul>
);

export default Questions;
