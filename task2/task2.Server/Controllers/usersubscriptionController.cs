using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using task2.Server.DTO;
using task2.Server.Models;

namespace task2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class usersubscriptionController : ControllerBase
    {
        private readonly MyDbContext _db;


        public usersubscriptionController(MyDbContext db)
        {
            _db = db;
        }
        [HttpPost]
        public IActionResult addsubscription([FromBody] usersubscriptionDTO dto)
        {

            var add = _db.Subscriptions.Where(x=>x.SubscriptionId == dto.SubscriptionId).FirstOrDefault();
            var amount = add.SubscriptionAmount;
            var startDate= DateOnly.FromDateTime(DateTime.Now);
            DateOnly endDate = DateOnly.FromDateTime(DateTime.Now);
            switch (amount)
            {
                case "7":
                    endDate = startDate.AddDays(7); break;
                case "90":
                    endDate = startDate.AddMonths(3);
                    break;
                case "365":
                    endDate = startDate.AddYears(1);
                    break;
            }

            var usersubscription = new UserSubscription
            {
                UserId = dto.UserId,
                SubscriptionId = dto.SubscriptionId,
                SubServiceId = dto.SubServiceId,
                StartDate = startDate,
                EndDate = endDate

            };
            _db.UserSubscriptions.Add(usersubscription);
            _db.SaveChanges();
            return Ok();
        }


    }
}
