using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DB.Models
{
    [Table("professors")]
    public class Professor
    {
        [Key]
        [Column("professor_id")]
        public int Id { get; set; }
        
        [Column("job_title")]
        public string JobTitle { get; set; }
        
        [Column("first_name")]
        public string FirstName { get; set; }
        
        [Column("last_name")]
        public string LastName { get; set; }
        
        [Column("gender")]
        public string Gender { get; set; }
        
        [Column("date_of_birth")]
        public DateTime DateOfBirth { get; set; }
        
        [Column("department_id")]
        public int DepartmentId { get; set; }
        public Department Department { get; set; }
        
        [Column("contact_email")]
        public string ContactEmail { get; set; }
        
        [Column("contact_phone")]
        public string ContactPhone { get; set; }
        
        [Column("office_number")]
        public string OfficeNumber { get; set; }

        [Column("webpage")]
        public string Webpage { get; set; }
    }
}