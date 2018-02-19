using Newtonsoft.Json;

namespace PersonsWebService.Classes
{
    public class Address
    {
        [JsonProperty("id")]
        public long Id { get; set; }

        [JsonProperty("country")]
        public string Country { get; set; }

        [JsonProperty("city")]
        public string City { get; set; }

        [JsonProperty("postalcode")]
        public string PostalCode { get; set; }

        [JsonProperty("streetaddress")]
        public string StreetAddress { get; set; }
    }

}
   