using System.Text;
using Xamarin.Forms;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Essentials;
using System.Net.Http;
using ImHere.data;
using Newtonsoft.Json;

namespace ImHere
{
    public class MainViewModel : BaseViewModel
    {
        string message = "";
        public string Message
        {
            get => message;
            set => Set(ref message, value);
        }

        string phoneNumbers = "";
        public string PhoneNumbers
        {
            get => phoneNumbers;
            set => Set(ref phoneNumbers, value);
        }

        public MainViewModel()
        {
            SendLocationCommand = new Command(async () => await SendLocation());
        }

        public ICommand SendLocationCommand { get; }
        HttpClient client = new HttpClient();
        const string baseUrl = "https://imherefunctions20231129111001.azurewebsites.net";

        async Task SendLocation()
        {
            Location location = await Geolocation.GetLastKnownLocationAsync();

            if (location != null)
            {
                Message = $"Location found: {location.Latitude}, {location.Longitude}.";
                PostData postData = new PostData
                {
                    Latitude = location.Latitude,
                    Longitude = location.Longitude,
                    ToNumbers = PhoneNumbers.Split('\n')
                };

                string data = JsonConvert.SerializeObject(postData);
                StringContent content = new StringContent(data, Encoding.UTF8, "application/json");
                HttpResponseMessage result = await client.PostAsync($"{baseUrl}/api/SendLocation",
                                                                    content);

                if (result.IsSuccessStatusCode)
                    Message = "Location sent successfully";
                else
                    Message = $"Error - {result.ReasonPhrase}";
            }
        }
    }
}
