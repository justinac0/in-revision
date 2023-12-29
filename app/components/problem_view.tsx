import { useState } from "react";
import { Problem } from "~/lib/defs";
import Tag from "./markdown/tag";

function ProblemView({
    title, question_html, answer_html, tags
}: Problem) {
    const SHOW_ANSWER: string = "show answer";
    const HIDE_ANSWER: string = "hide answer";

    const [showAnswer, setShowAnswer] = useState(false);

    const toggle_show_answer = () => {
        setShowAnswer(!showAnswer);
    }

    const button_text = () => {
        return showAnswer ? HIDE_ANSWER : SHOW_ANSWER;
    }

    const button_color = () => {
        return showAnswer ? "bg-blue-600" : "bg-green-600";
    }

    return (
        <div className="m-6 p-4 bg-white rounded-md shadow-md question">
            {/* TODO: move to component (Tags) */}
            <div className="flex">
                {tags?.map((tag, index) => <Tag key={index} name={tag} />)}
            </div>
            <br />
            <h1 className="text-2xl underline">{title}</h1>
            <br />
            <div className="prose">
                <div dangerouslySetInnerHTML={{ __html: question_html }}></div>
                {showAnswer && <>
                    <hr />
                    <div dangerouslySetInnerHTML={{ __html: answer_html }}></div>
                </>
                }
            </div>
            <br />
            <button className={"text-white p-2 rounded-md" + " " + button_color()} onClick={toggle_show_answer}>{button_text()}</button>
        </div>
    );
}

export default ProblemView;