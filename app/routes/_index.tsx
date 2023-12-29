import type { MetaFunction } from "@remix-run/node";
import ProblemView from "~/components/problem_view";
import { ProblemTag } from "~/lib/defs";
import { TEST_QUESTION_MARKDOWN, TEST_ANSWER_MARKDOWN, parse_markdown } from "~/lib/md_check";
import { useLoaderData } from "@remix-run/react";


export const meta: MetaFunction = () => {
  return [
    { title: "in-revision" },
    { name: "description", content: "Physics is hard, need to revise..." },
  ];
};

export async function loader() {
  return {
    question: await parse_markdown(TEST_QUESTION_MARKDOWN),
    answer: await parse_markdown(TEST_ANSWER_MARKDOWN),
  };
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  console.log(data);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-3xl">in-revision</h1>
      <ProblemView title={data.question.metadata.title} question_html={data.question.html} answer_html={data.answer.html} tags={[ProblemTag.PHYSICS, ProblemTag.CLASSICAL_PHYSICS]}/>
      <ProblemView title={data.question.metadata.title} question_html={data.question.html} answer_html={data.answer.html} tags={[ProblemTag.OTHER]}/>
    </div>
  );
}