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
        public ActionResult CreateProduct(Product model)
        {
            if (!ModelState.IsValid)
            {
                return View("Index", model);
            }

            return View("Index");
        }
    }
}