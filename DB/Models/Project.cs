using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DB.Models
{
    [Table("research_projects_dim")]
    public class Project
    {
        [Key]
        [Column("research_project_id")]
        public int Id { get; set; }
        
        [Column("professor_id")]
        public int ProfessorId { get; set; }
        public Professor Professor { get; set; }
        
        [Column("research_project_title")]
        public string Title { get; set; }
        
        [Column("research_project_description")]
        public string Description { get; set; }
        
        [Column("research_area_id")]
        public int AreaId { get; set; }
    }
}