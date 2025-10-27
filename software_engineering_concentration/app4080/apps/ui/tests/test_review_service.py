import json
from unittest import TestCase
from unittest.mock import patch, MagicMock
from apps.ui.services.review_service import send_code_for_peer_review


class TestReviewService(TestCase):
    def setUp(self):
        # Example code contents for testing
        self.code_contents = {
            "example.py": "def hello():\n    print('Hello, world!')",
            "test.js": "console.log('Hello, JavaScript!');"
        }
        # Example valid JSON response from OpenAI
        self.mock_response_content = """
        {
            "example.py": {
                "1": ["Missing docstring"],
                "2": ["Use single quotes for consistency"]
            },
            "test.js": {
                "1": ["Console statements should be avoided in production"]
            }
        }
        """

    @patch("apps.ui.services.review_service.openai.ChatCompletion.create")
    def test_send_code_for_peer_review_success(self, mock_openai):
        # Mock the OpenAI API response
        mock_openai.return_value = {
            "choices": [{
                "message": {"content": f"```json\n{self.mock_response_content}\n```"}
            }]
        }

        # Call the function under test
        issues = send_code_for_peer_review(self.code_contents)

        # Validate the returned issues
        expected_issues = json.loads(self.mock_response_content)
        self.assertEqual(issues, expected_issues)

    @patch("apps.ui.services.review_service.openai.ChatCompletion.create")
    def test_send_code_for_peer_review_json_decode_error(self, mock_openai):
        # Simulate a malformed JSON response from OpenAI
        mock_openai.return_value = {
            "choices": [{
                "message": {"content": "```json\nINVALID_JSON\n```"}
            }]
        }

        # Call the function and expect an empty dict due to JSONDecodeError
        issues = send_code_for_peer_review(self.code_contents)
        self.assertEqual(issues, {})  # Verify that it returns an empty dict on error


