using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Models
{
    public class Context:DbContext
    {
        public DbSet<Item> Items { get; set; } = null!;
        public DbSet<Service> Services { get; set; } = null!;
        public DbSet<Shop> Shops { get; set; } = null!;
        public DbSet<Busket> Buskets { get; set; } = null!;


        public Context(DbContextOptions<Context> options) : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=web_bd.db");
        }
    }
}
