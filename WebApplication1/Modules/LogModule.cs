using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace WebApplication1.Modules
{
    public class LogModule : IHttpModule
    {
        public void Dispose()
        {
            
        }

        public void Init(HttpApplication context)
        {
            context.BeginRequest += (src, args) =>
            {
                Debug.WriteLine("log module begin request");
            };
        }
    }
}