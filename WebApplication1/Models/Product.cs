using System.ComponentModel.DataAnnotations;
namespace WebApplication1.Models
{
    public class Product
    {
        public int Id { get; set; }

        [Display(Name = "Product name")]
        [Required(ErrorMessage = "{0} is required")]
        [StringLength(250, MinimumLength = 2, ErrorMessage = "{0} must be from {2} to {1} characters")]
        public string Name { get; set; }

        [Display(Name = "Poduct price"), Required(ErrorMessage = "{0} is required")]
        public double Price { get; set; }

        [Display(Name = "Price description")]
        public string Description { get; set; }

        [Display(Name = "Product snippet")]
        [StringLength(20, ErrorMessage = "{0} is too long")]
        public string Snippet { get; set; }
    }
}