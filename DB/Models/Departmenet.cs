using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DB.Models
{
    [Table("department")]
    public class Department
    {
        [Key]
        [Column("department_id")]
        public int Id { get; set; }
        
        [Column("department_name")]
        public string Name { get; set; }
    }
}