using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {        
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(Product model)
        {
            if (!ModelState.IsValid)
            {
                var errors = ModelState.SelectMany(m => m.Value.Errors).Select(e => e.ErrorMessage).ToList();

                return View(model);
            }

            return View("IndexSuccesOrSomethingElse");
        }
    }
}