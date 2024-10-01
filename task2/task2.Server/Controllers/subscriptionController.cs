using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using task2.Server.Models;

namespace task2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class subscriptionController : ControllerBase
    {

        private readonly MyDbContext _Db;
            public subscriptionController(MyDbContext db)
        {
            _Db = db;
        }

        [HttpGet]
        public IActionResult getsupscription()
        {
            var supscription=_Db.Subscriptions.ToList();
            return Ok(supscription);
        }
    }
}
