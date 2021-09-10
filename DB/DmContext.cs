using DB.Models;
using Microsoft.EntityFrameworkCore;

namespace DB
{
    public class DmContext : DbContext
    {
        //vendors
        
        public DbSet<Calendar> Calenders { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Professor> Professors { get; set; }
        
        public DmContext(DbContextOptions options)
            : base(options)
        {
        }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}