using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using PersonsWebService.Classes;

namespace PersonsWebService.Controllers
{
    [Route("api/[controller]")]
    public class AddressController : Controller
    {
        private IEnumerable<Address> addresses;
        public AddressController()
        {
            var addressData = System.IO.File.ReadAllText("addr_data.json");
            addresses = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Address>>(addressData);
        }

        [HttpGet]
        public IEnumerable<Address> Get() => addresses;

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}