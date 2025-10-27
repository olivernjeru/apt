using System;
using Android.App;
using Android.OS;
using Android.Views;
using Android.Widget;

namespace CalculatorApp
{
    [Activity(Label = "MainActivity", MainLauncher = true)]
    public class MainActivity : Activity
    {
        private EditText editTextCalculator;

        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);
            SetContentView(Resource.Layout.activity_main);

            editTextCalculator = FindViewById<EditText>(Resource.Id.editTextCalculator);
        }

        public void AppendToCalculator(View view)
        {
            Button button = (Button)view;
            string buttonText = button.Text;
            string currentText = editTextCalculator.Text;
            editTextCalculator.Text = currentText + buttonText;
        }

        public void ClearCalculator(View view)
        {
            editTextCalculator.Text = "";
        }

        public void CalculateResult(View view)
        {
            string expression = editTextCalculator.Text.Trim();

            if (string.IsNullOrEmpty(expression))
            {
                editTextCalculator.Text = "Error: Empty input";
                return;
            }

            string[] operators = { "+", "-", "*", "/" };

            string operatorStr = null;
            double num1, num2;

            foreach (string op in operators)
            {
                if (expression.Contains(op))
                {
                    operatorStr = op;
                    break;
                }
            }

            if (operatorStr == null)
            {
                editTextCalculator.Text = "Error: Invalid expression";
                return;
            }

            string[] parts = expression.Split(new[] { operatorStr }, StringSplitOptions.None);

            if (parts.Length != 2)
            {
                editTextCalculator.Text = "Error: Invalid expression";
                return;
            }

            try
            {
                num1 = double.Parse(parts[0].Trim());
                num2 = double.Parse(parts[1].Trim());

                double result = 0;

                switch (operatorStr)
                {
                    case "+":
                        result = num1 + num2;
                        break;
                    case "-":
                        result = num1 - num2;
                        break;
                    case "*":
                        result = num1 * num2;
                        break;
                    case "/":
                        if (num2 != 0)
                        {
                            result = num1 / num2;
                        }
                        else
                        {
                            editTextCalculator.Text = "Error: Division by zero";
                            return;
                        }
                        break;
                    default:
                        editTextCalculator.Text = "Error: Unsupported operator";
                        return;
                }

                editTextCalculator.Text = result.ToString();
            }
            catch (FormatException)
            {
                editTextCalculator.Text = "Error: Invalid numbers";
            }
        }
    }
}
