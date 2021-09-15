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
        public DbSet<Student> Students { get; set; }
        public DbSet<Publication> Publications { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<ResearchFact> ResearchFact { get; set; }
        public DbSet<ResearchArea> ResearchAreas { get; set; }
        
        public DmContext(DbContextOptions options)
            : base(options)
        {
        }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ResearchFact>().HasNoKey();
        }
    }
}