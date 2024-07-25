using System.ComponentModel.DataAnnotations;

namespace MyMvcProject.Models
{
    public class Record
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }
    }
}