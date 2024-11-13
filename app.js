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
- Use appropriate HTML tags to structure the text.
- Insert <img> tags with src="image_placeholder.jpg" where images are needed.
- Add alt attributes to <img> tags with prompts for image generation.
- Format image captions using appropriate HTML tags.
- Do not include CSS or JavaScript.
- Provide only the content for the <body> section, without <html>, <head>, and <body> tags.

Article Text:
${articleContent}
`;

async function generateHTML() {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const htmlContent = response.choices[0].message.content.trim();

    // save
    fs.writeFileSync("artykul.html", htmlContent, "utf-8");
    console.log("HTML content saved to artykul.html");

  } catch (error) {
    console.error("Error generating HTML:", error);
  }
}


generateHTML();
