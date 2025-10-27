import openai
import json
from django.conf import settings
from structlog import get_logger

logger = get_logger()


# Function to interact with OpenAI's ChatGPT model
def send_code_for_peer_review(code_contents):
    """
    Send code for peer review using OpenAI's ChatGPT model
    :param code_contents:
    :return:
    """
    logger.info("Sending code for peer review")

    # Prepare the prompt with multiple files and their content
    prompt_parts = []
    for file_name, code_content in code_contents.items():
        prompt_parts.append(f"File: {file_name}\nCode:\n{code_content}\n")

    prompt = (
            "You are a senior-level code reviewer with expertise in identifying best practices, potential bugs, "
            "performance issues, and security vulnerabilities. Review the provided files and generate a detailed, "
            "line-specific report for each file. Specifically, ensure that:\n"
            "- Line numbers are accurate and correspond to the provided file content.\n"
            "- Each issue is clearly tied to the correct line number within its respective file.\n"
            "- The issues identified can include bugs, performance inefficiencies, security risks, violations of "
            "best practices, and code smells.\n"
            "- Provide suggestions for improvements where necessary.\n"
            "- If multiple files are uploaded, each file should be reviewed independently with results in the same "
            "structured format.\n"
            "- Output the response in valid JSON format for any number of files, ensuring clarity and consistency.\n"
            "- Format the response as follows:\n"
            "{\n"
            '  "FileName1": {\n'
            '    "LineNumber1": ["Issue 1: Description and Improvement Suggestion", "Issue 2: Description and Improvement Suggestion"],\n'
            '    "LineNumber2": ["Issue 3: Description and Improvement Suggestion"]\n'
            "  },\n"
            '  "FileName2": {\n'
            '    "LineNumber3": ["Issue 4: Description and Improvement Suggestion"]\n'
            "  }\n"
            "}\n\n" + "\n".join(prompt_parts)
    )

    openai.api_key = settings.CHAGPT_KEY
    response = openai.ChatCompletion.create(
        model=settings.CHAGPT_MODEL,
        messages=[
            {"role": "system", "content": "You are a helpful code reviewer."},
            {"role": "user", "content": prompt},
        ],
        temperature=0.7,
        max_tokens=1500,
    )

    # Process the response to extract issues
    issues = {}
    review_message = response["choices"][0]["message"]["content"]

    try:
        # Parse the JSON response from the review message
        issues = json.loads(review_message.replace("```json", "").replace("```", ""))
    except json.JSONDecodeError as e:
        logger.error("Error decoding JSON response", error=str(e))
        logger.error("Received response: %s", review_message)

    return issues
