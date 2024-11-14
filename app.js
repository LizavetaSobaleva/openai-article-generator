require("dotenv").config();
const fs = require("fs");
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const articleContent = fs.readFileSync("article.txt", "utf-8");

const prompt = `
The following article text may contain encoding issues due to incorrect character encoding.
Please process the text to correct any encoding errors and convert it into HTML code with the following requirements:

- Correct any character encoding issues in the text.
- Use appropriate HTML tags to semantically structure the text, including headings (e.g., <h1>, <h2>, etc.), paragraphs, and emphasis tags like <em>.
- Do not add, remove, or alter any text or new headings; preserve the original wording and order exactly as provided.
- Based on the content, determine where images would be appropriate and insert <img> tags with src="image_placeholder.jpg" at those locations.
- For each <img> tag, add a meaningful alt attribute that provides a detailed description of the image's contents.
- Do not include any CSS or JavaScript code.
- Provide only the content that belongs inside the <body> tag, without including <html>, <head>, or <body> tags themselves.

Article Text:
${articleContent}
`;


async function generateHTML() {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.6,
    });

    const htmlContent = response.choices[0].message.content.trim();

    // save
    fs.writeFileSync("artykul.html", htmlContent, "utf-8");
    console.log("HTML content saved to artykul.html");

    // preview
    createPreview();

  } catch (error) {
    console.error("Error generating HTML:", error);
  }
}

function createPreview() {
    const template = fs.readFileSync('szablon.html', 'utf-8');
    const articleHTML = fs.readFileSync('artykul.html', 'utf-8');
  
    // Insert the article HTML into the template
    const previewContent = template.replace(
      '<!-- Article content will be inserted here -->',
      articleHTML
    );
  
    fs.writeFileSync('podglad.html', previewContent, 'utf-8');
    console.log('Preview available in podglad.html');
  }


generateHTML();
