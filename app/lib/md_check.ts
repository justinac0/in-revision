import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'
import matter from "gray-matter"
import rehypeDocument from 'rehype-document'
import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

export const TEST_QUESTION_MARKDOWN = `
---
title: "Example Algebra Question"
---
![image of bird](https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15.jpg)
### Solve for $$x$$
$$x + 5 = \\frac{2}{x}$$
`;


export const TEST_ANSWER_MARKDOWN = `
---
title: "Solution"
---

### Solution
$$x = -\\frac{5}{2}-\\frac{\\sqrt{33}}{2}$$ or\\
\\
$$x = \\frac{\\sqrt{33}}{2}-\\frac{5}{2}$$
`;

type MarkdownDocument = {
    metadata: Record<string, any>,
    html: string,
}

export async function parse_markdown(rawText: string): Promise<MarkdownDocument> {
    const matterResult = matter(rawText.trimStart()); // Trim to ensure the matter metadata is on the first line if present

    const pipeline = unified()
        .use(remarkParse, {fragment: true}) // String to Markdown AST
        .use(remarkMath)                    // Math Styling
        .use(remarkRehype)                  // Markdown AST to HTML AST
        .use(rehypeKatex)                   // Math Styling
        // Get the latest one from: <https://katex.org/docs/browser>.
        .use(rehypeDocument, { css: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css' })
        .use(rehypeStringify);              // HTML AST to String
    const htmlString = await pipeline.process(matterResult.content);

    return {
        metadata: matterResult.data,
        html: htmlString.value.toString(),
    };
}

// export const mardown_to_html = () => {
//     return parse_markdown(TEST_QUESTION_MARKDOWN)
// }