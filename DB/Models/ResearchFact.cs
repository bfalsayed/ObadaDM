using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DB.Models
{
    [Table("table_research_fact")]
    public class ResearchFact
    {
        [Key]
        public int Id;
        
        [Column("student_id")]
        public int? StudentId { get; set; }
        
        [Column("Department_id")]
        public int? DepartmentId { get; set; }
        
        [Column("professor_id")]
        public int? ProfessorId { get; set; }
        
        [Column("publication_id")]
        public int? PublicationId { get; set; }
        
        [Column("research_project_id")]
        public int? ProjectId { get; set; } 
        
        [Column("research_area_id")]
        public int? AreaId { get; set; }
        
        [Column("item_id")]
        public int? ItemId { get; set; }
    }
}