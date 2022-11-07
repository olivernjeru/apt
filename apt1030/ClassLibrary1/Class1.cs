namespace ClassLibrary1
{
    public class Class1
    {
        static void Main(string[] args)
        {
            int num;
            int Ans;
            Console.Write("Please enter a number: ");
            num = Convert.ToInt32(Console.ReadLine());

            if (num > 10)
            {
                Ans = num + 5;
            }
            else
            {
                Ans = num * 3;
            }

            Console.Write($"the answer is {Ans}");
        }
    }
}