using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DB.Models
{
    [Table("table_research_fact")]
    public class ResearchFact
    {
        [Column("student_id")]
        public int StudentId { get; set; }
        
        [Column("Department_id")]
        public int DepartmentId { get; set; }
        
        [Column("student_name")]
        public string StudentName { get; set; }
        
        [Column("student_email")]
        public string StudentEmail { get; set; }
        
        [Column("professor_id")]
        public int ProfessorId { get; set; }
        
        [Column("research_project_title")]
        public string ResearchProjectTitle { get; set; }
        
        [Column("research_project_description")]
        public string ResearchProjectDescription { get; set; }
    }
}