using Microsoft.EntityFrameworkCore;
using MyMvcProject.Models;

namespace MyMvcProject.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Record> Records { get; set; }
    }
}