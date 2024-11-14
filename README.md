# Article Preview Project

This project processes and previews articles by generating semantic HTML and applying custom styles for an enhanced reading experience. It utilizes an OpenAI prompt to structure article text, correct encoding issues, and output formatted HTML, which is then previewed in a styled template.

## Features

- **Semantic HTML Generation**: Uses OpenAI to process article text and generate structured HTML with appropriate tags, such as headings, paragraphs, and emphasis tags, based on the content.
- **Custom Styling**: Applies custom styles from an external CSS file (`styles.css`) to improve readability and create a visually appealing layout.
- **User-Friendly Layout**: Designed for optimal readability with well-organized content sections and responsive design adjustments.

## Project Files

- **szablon.html**: The template file that provides a styled layout for the article preview. This file includes a placeholder `<body>` section for inserting the article content and links to `styles.css` for styling.
- **styles.css**: Contains custom CSS styles to enhance the readability and aesthetic of the article preview. Styles cover headings, paragraphs, images, lists, and more for a cohesive design.
- **artykul.html**: The HTML file generated from the article text using OpenAI, structured with semantic HTML tags.
- **podglad.html**: The final preview file where the generated article content (`artykul.html`) is inserted into the template (`szablon.html`) for viewing.

## How to Run

1. **Set up OpenAI API Key**:
   - Ensure you have an API key from OpenAI.
   - Create a `.env` file in the root of your project and add your OpenAI API key:
     ```
     OPENAI_API_KEY=your_api_key_here
     ```

2. **Insert Text for Processing**:
   - Place the text you want to process in a file named `article.txt` in the project directory. This text will be processed by OpenAI to generate structured HTML.

3. **Run the Script to Insert Content**:
   - Execute the script to process `article.txt`, generate semantic HTML, and insert the content into the template (`szablon.html`). This script will produce the final preview file, `podglad.html`.
   - Example script command (assuming the script is in `app.js`):
     ```
     node app.js
     ```

4. **View the Article Preview**:
   - Open `podglad.html` in your web browser to view the fully styled and formatted article.

## Customization

- **Styling**: Customize the look and feel of the article preview by editing `styles.css`. Adjust colors, font sizes, spacing, and other visual elements as needed.
- **Layout Adjustments**: Modify `szablon.html` for additional structural changes if a different layout is required.

## Notes

- Ensure `szablon.html` correctly links to `styles.css` for styling.
- Customize `styles.css` to match specific design requirements or branding preferences.

## License

This project is open-source and available for use and modification. Credit the original author if redistributing.